/**
 * Wedding Contract Generator - Google Apps Script
 * 
 * This script automates the generation of wedding contracts by merging data
 * from Google Sheets with a Google Docs template.
 * 
 * Setup Instructions:
 * 1. Create a Google Docs template with merge fields like {{Field_Name}}
 * 2. Get the template document ID from the URL
 * 3. Replace TEMPLATE_DOC_ID below with your template ID
 * 4. Ensure your Google Sheets has the required data columns
 * 5. Run the script from the custom menu or trigger
 */

// Configuration - UPDATE THESE VALUES
const CONFIG = {
  TEMPLATE_DOC_ID: 'YOUR_TEMPLATE_DOC_ID_HERE', // Replace with your Google Docs template ID
  OUTPUT_FOLDER_NAME: 'Generated Wedding Contracts', // Folder name for generated contracts
  EMAIL_CONTRACTS: false, // Set to true to automatically email contracts
  SHEET_NAMES: {
    CLIENT_DATA: 'Client_Data',
    SERVICES_PRICING: 'Services_Pricing', 
    PAYMENT_SCHEDULE: 'Payment_Schedule',
    COMPANY_INFO: 'Company_Info',
    LEGAL_TERMS: 'Legal_Terms',
    ADMIN_DETAILS: 'Admin_Details'
  }
};

/**
 * Creates the custom menu when the spreadsheet opens
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('🎊 Wedding Contracts')
    .addItem('📄 Generate Single Contract', 'generateSingleContract')
    .addItem('📋 Generate All Contracts', 'generateAllContracts')
    .addItem('✉️ Generate & Email Contract', 'generateAndEmailContract')
    .addSeparator()
    .addItem('⚙️ Setup Instructions', 'showSetupInstructions')
    .addItem('🧪 Test Template', 'testTemplate')
    .addToUi();
}

/**
 * Generates a contract for the currently selected row
 */
function generateSingleContract() {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const activeRange = sheet.getActiveRange();
    const row = activeRange.getRow();
    
    if (row === 1) {
      SpreadsheetApp.getUi().alert('Please select a data row, not the header row.');
      return;
    }
    
    const mergeData = getRowData(row);
    const docId = createContractDocument(mergeData);
    
    SpreadsheetApp.getUi().alert(
      'Success!', 
      `Contract generated successfully for ${mergeData.Client_Primary_Name}.\n\nDocument ID: ${docId}`, 
      SpreadsheetApp.getUi().ButtonSet.OK
    );
    
  } catch (error) {
    handleError('generateSingleContract', error);
  }
}

/**
 * Generates contracts for all rows with data
 */
function generateAllContracts() {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAMES.CLIENT_DATA);
    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    let successCount = 0;
    let errors = [];
    
    // Process each row (skip header)
    for (let i = 1; i < data.length; i++) {
      try {
        if (data[i][0]) { // Check if first column has data
          const mergeData = getRowDataFromArray(headers, data[i]);
          createContractDocument(mergeData);
          successCount++;
        }
      } catch (error) {
        errors.push(`Row ${i + 1}: ${error.message}`);
      }
    }
    
    let message = `Generated ${successCount} contracts successfully.`;
    if (errors.length > 0) {
      message += `\n\nErrors:\n${errors.join('\n')}`;
    }
    
    SpreadsheetApp.getUi().alert('Batch Generation Complete', message, SpreadsheetApp.getUi().ButtonSet.OK);
    
  } catch (error) {
    handleError('generateAllContracts', error);
  }
}

/**
 * Generates and emails a contract for the selected row
 */
function generateAndEmailContract() {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const activeRange = sheet.getActiveRange();
    const row = activeRange.getRow();
    
    if (row === 1) {
      SpreadsheetApp.getUi().alert('Please select a data row, not the header row.');
      return;
    }
    
    const mergeData = getRowData(row);
    
    if (!mergeData.Client_Primary_Email) {
      SpreadsheetApp.getUi().alert('Error', 'No email address found for this client.', SpreadsheetApp.getUi().ButtonSet.OK);
      return;
    }
    
    const docId = createContractDocument(mergeData);
    emailContract(docId, mergeData);
    
    SpreadsheetApp.getUi().alert(
      'Success!', 
      `Contract generated and emailed to ${mergeData.Client_Primary_Email}`, 
      SpreadsheetApp.getUi().ButtonSet.OK
    );
    
  } catch (error) {
    handleError('generateAndEmailContract', error);
  }
}

/**
 * Gets data from all sheets for a specific row
 */
function getRowData(row) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let mergeData = {};
  
  // Get data from all configured sheets
  Object.values(CONFIG.SHEET_NAMES).forEach(sheetName => {
    try {
      const sheet = ss.getSheetByName(sheetName);
      if (sheet) {
        const data = sheet.getDataRange().getValues();
        const headers = data[0];
        const rowData = data[row - 1]; // Adjust for 0-based indexing
        
        headers.forEach((header, index) => {
          if (header && rowData && rowData[index] !== undefined) {
            mergeData[header] = formatFieldValue(rowData[index]);
          }
        });
      }
    } catch (error) {
      console.log(`Warning: Could not read sheet ${sheetName}: ${error.message}`);
    }
  });
  
  return mergeData;
}

/**
 * Gets data from array format (for batch processing)
 */
function getRowDataFromArray(headers, rowData) {
  let mergeData = {};
  
  headers.forEach((header, index) => {
    if (header && rowData[index] !== undefined) {
      mergeData[header] = formatFieldValue(rowData[index]);
    }
  });
  
  return mergeData;
}

/**
 * Formats field values for proper display in contracts
 */
function formatFieldValue(value) {
  if (value instanceof Date) {
    return Utilities.formatDate(value, Session.getScriptTimeZone(), 'MM/dd/yyyy');
  }
  
  if (typeof value === 'number') {
    // Check if it looks like currency
    if (value > 0 && value < 1000000) {
      return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
    }
    return value.toString();
  }
  
  return value ? value.toString() : '';
}

/**
 * Creates a new contract document from the template
 */
function createContractDocument(mergeData) {
  try {
    // Validate required fields
    if (!mergeData.Client_Primary_Name) {
      throw new Error('Client_Primary_Name is required');
    }
    
    // Get or create output folder
    const outputFolder = getOrCreateFolder(CONFIG.OUTPUT_FOLDER_NAME);
    
    // Create document name
    const docName = `Wedding Contract - ${mergeData.Client_Primary_Name}${mergeData.Client_Secondary_Name ? ' & ' + mergeData.Client_Secondary_Name : ''} - ${mergeData.Wedding_Date || 'TBD'}`;
    
    // Copy template
    const templateFile = DriveApp.getFileById(CONFIG.TEMPLATE_DOC_ID);
    const newFile = templateFile.makeCopy(docName, outputFolder);
    const doc = DocumentApp.openById(newFile.getId());
    const body = doc.getBody();
    
    // Replace merge fields
    Object.keys(mergeData).forEach(key => {
      const placeholder = `{{${key}}}`;
      const value = mergeData[key] || '';
      body.replaceText(placeholder, value);
    });
    
    // Add generation timestamp
    const timestamp = new Date().toLocaleString();
    body.replaceText('{{GENERATION_TIMESTAMP}}', `Generated on: ${timestamp}`);
    
    // Save and close
    doc.saveAndClose();
    
    return newFile.getId();
    
  } catch (error) {
    throw new Error(`Failed to create contract document: ${error.message}`);
  }
}

/**
 * Emails the contract to the client
 */
function emailContract(docId, mergeData) {
  try {
    const file = DriveApp.getFileById(docId);
    const pdf = file.getAs('application/pdf');
    
    const subject = `Wedding Contract - ${mergeData.Client_Primary_Name}${mergeData.Client_Secondary_Name ? ' & ' + mergeData.Client_Secondary_Name : ''}`;
    
    const body = `Dear ${mergeData.Client_Primary_Name}${mergeData.Client_Secondary_Name ? ' and ' + mergeData.Client_Secondary_Name : ''},

Please find your wedding service contract attached. Please review all terms and conditions carefully.

To proceed:
1. Review the contract thoroughly
2. Sign and date where indicated
3. Return the signed contract by ${mergeData.Retainer_Due_Date || '[DATE]'}
4. Submit your retainer payment of ${mergeData.Retainer_Amount || '[AMOUNT]'}

If you have any questions about the contract terms, please don't hesitate to contact us.

We're excited to be part of your special day!

Best regards,
${mergeData.Company_Name || 'Your Wedding Service Company'}
${mergeData.Company_Phone || ''}
${mergeData.Company_Email || ''}`;

    GmailApp.sendEmail(
      mergeData.Client_Primary_Email,
      subject,
      body,
      {
        attachments: [pdf],
        name: mergeData.Company_Name || 'Wedding Services',
        cc: mergeData.Client_Secondary_Email || '',
        replyTo: mergeData.Company_Email || ''
      }
    );
    
  } catch (error) {
    throw new Error(`Failed to email contract: ${error.message}`);
  }
}

/**
 * Gets or creates a folder in Google Drive
 */
function getOrCreateFolder(folderName) {
  const folders = DriveApp.getFoldersByName(folderName);
  
  if (folders.hasNext()) {
    return folders.next();
  } else {
    return DriveApp.createFolder(folderName);
  }
}

/**
 * Tests the template with sample data
 */
function testTemplate() {
  try {
    const sampleData = {
      Client_Primary_Name: 'John',
      Client_Secondary_Name: 'Jane',
      Wedding_Date: '06/15/2025',
      Total_Contract_Amount: '$5,000.00',
      Company_Name: 'Test Wedding Services'
    };
    
    const docId = createContractDocument(sampleData);
    
    SpreadsheetApp.getUi().alert(
      'Test Successful!', 
      `Test contract created successfully.\n\nDocument ID: ${docId}\n\nPlease review the generated document to ensure merge fields are working correctly.`, 
      SpreadsheetApp.getUi().ButtonSet.OK
    );
    
  } catch (error) {
    handleError('testTemplate', error);
  }
}

/**
 * Shows setup instructions
 */
function showSetupInstructions() {
  const instructions = `Wedding Contract Generator Setup:

1. TEMPLATE SETUP:
   • Create your contract template in Google Docs
   • Use merge fields like {{Client_Primary_Name}}
   • Copy the document ID from the URL
   • Update TEMPLATE_DOC_ID in the script

2. SPREADSHEET SETUP:
   • Ensure column headers match merge field names
   • Required sheets: ${Object.values(CONFIG.SHEET_NAMES).join(', ')}
   • Fill in your data

3. TESTING:
   • Use "Test Template" to verify setup
   • Generate a single contract first
   • Check the generated document

4. TROUBLESHOOTING:
   • Ensure template ID is correct
   • Check that merge field names match column headers exactly
   • Verify you have edit permissions on the template

Need help? Check the implementation guide documentation.`;

  SpreadsheetApp.getUi().alert('Setup Instructions', instructions, SpreadsheetApp.getUi().ButtonSet.OK);
}

/**
 * Handles errors consistently
 */
function handleError(functionName, error) {
  console.error(`Error in ${functionName}:`, error);
  
  let userMessage = `An error occurred in ${functionName}:\n\n${error.message}`;
  
  if (error.message.includes('TEMPLATE_DOC_ID')) {
    userMessage += '\n\nPlease check that you have updated the TEMPLATE_DOC_ID in the script configuration.';
  }
  
  if (error.message.includes('permission')) {
    userMessage += '\n\nPlease check that you have edit permissions for the template document.';
  }
  
  SpreadsheetApp.getUi().alert('Error', userMessage, SpreadsheetApp.getUi().ButtonSet.OK);
}

/**
 * Utility function to get template document ID from URL
 * Usage: Call this function and paste your Google Docs URL to extract the ID
 */
function getDocIdFromUrl() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt('Extract Document ID', 'Paste your Google Docs URL here:', ui.ButtonSet.OK_CANCEL);
  
  if (response.getSelectedButton() === ui.Button.OK) {
    const url = response.getResponseText();
    const match = url.match(/\/document\/d\/([a-zA-Z0-9-_]+)/);
    
    if (match) {
      const docId = match[1];
      ui.alert('Document ID Found', `Your document ID is:\n\n${docId}\n\nCopy this and update TEMPLATE_DOC_ID in the script.`, ui.ButtonSet.OK);
    } else {
      ui.alert('Error', 'Could not extract document ID from URL. Please check the URL format.', ui.ButtonSet.OK);
    }
  }
}

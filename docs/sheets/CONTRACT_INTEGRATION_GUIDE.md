# Contract Integration Guide - Google Docs Mail Merge

## Overview
This guide provides complete integration between the Google Sheets calculation engine and Google Docs contract templates using mail merge functionality.

## Mail Merge Field Setup

### Client Information Fields
```excel
{{Client_Full_Name}} = C2&" "&D2&" & "&G2&" "&H2
{{Client_Email}} = E2
{{Client_Phone}} = F2
{{Partner_Email}} = I2
{{Partner_Phone}} = J2
{{Wedding_Date}} = TEXT(K2, "mmmm dd, yyyy")
{{Wedding_Day}} = TEXT(K2, "dddd")
{{Venue_Name}} = L2
{{Venue_Address}} = M2&", "&N2&", "&O2&" "&P2
{{Guest_Count}} = Q2
{{Ceremony_Time}} = TEXT(R2, "h:mm AM/PM")
{{Reception_Start}} = TEXT(S2, "h:mm AM/PM")
{{Reception_End}} = TEXT(T2, "h:mm AM/PM")
```

### Service Details Fields
```excel
{{DJ_Service_Selected}} = IF(U2="Yes", "✓ DJ Services Included", "DJ Services Not Selected")
{{DJ_Package_Details}} = IF(U2="Yes", V2&" - "&W2&" hours", "N/A")
{{DJ_Special_Requests}} = IF(ISBLANK(X2), "None specified", X2)

{{Photography_Service_Selected}} = IF(Y2="Yes", "✓ Photography Services Included", "Photography Services Not Selected")
{{Photography_Package_Details}} = IF(Y2="Yes", Z2&" - "&AA2&" hours", "N/A")
{{Photography_Locations}} = IF(ISBLANK(AB2), "Standard coverage", AB2)
{{Photography_Special_Requests}} = IF(ISBLANK(AC2), "None specified", AC2)

{{Videography_Service_Selected}} = IF(AD2="Yes", "✓ Videography Services Included", "Videography Services Not Selected")
{{Videography_Package_Details}} = IF(AD2="Yes", AE2&" - "&AF2&" hours", "N/A")
{{Videography_Style}} = IF(ISBLANK(AG2), "Standard", AG2)
{{Videography_Special_Requests}} = IF(ISBLANK(AH2), "None specified", AH2)
```

### Pricing Fields
```excel
{{DJ_Subtotal}} = IF(L2>0, TEXT(L2, "$#,##0.00"), "N/A")
{{Photography_Subtotal}} = IF(S2>0, TEXT(S2, "$#,##0.00"), "N/A")
{{Videography_Subtotal}} = IF(Z2>0, TEXT(Z2, "$#,##0.00"), "N/A")
{{Travel_Fees}} = IF(AA2>0, TEXT(AA2, "$#,##0.00"), "No travel fees")
{{Equipment_Fees}} = IF(AB2>0, TEXT(AB2, "$#,##0.00"), "No equipment fees")
{{Services_Subtotal}} = TEXT(AC2, "$#,##0.00")
{{Discount_Applied}} = IF(AE2>0, TEXT(AE2, "$#,##0.00")&" ("&TEXT(AD2, "0%")&" discount)", "No discount applied")
{{Pre_Tax_Total}} = TEXT(AF2, "$#,##0.00")
{{Tax_Amount}} = TEXT(AH2, "$#,##0.00")
{{Final_Total}} = TEXT(AI2, "$#,##0.00")
{{Final_Total_Words}} = PROPER(SUBSTITUTE(FIXED(AI2, 2), ".00", ""))&" Dollars"
```

### Payment Information Fields
```excel
{{Deposit_Amount}} = TEXT(AK2, "$#,##0.00")
{{Deposit_Percentage}} = TEXT(AJ2, "0%")
{{Balance_Due}} = TEXT(AL2, "$#,##0.00")
{{Payment_Plan}} = AM2
{{Payment_Schedule_Details}} = 
  IF(AM2="Monthly", "4 equal monthly payments",
    IF(AM2="Bi-weekly", "8 bi-weekly payments",
      "Full payment due upon signing"))
```

### Contract Terms Fields
```excel
{{Contract_Date}} = TEXT(TODAY(), "mmmm dd, yyyy")
{{Contract_Number}} = "WED-"&YEAR(TODAY())&"-"&RIGHT("000"&ROW(), 3)
{{Cancellation_Policy}} = "Cancellation more than 90 days: 50% refund. 30-90 days: 25% refund. Less than 30 days: No refund."
{{Weather_Policy}} = IF(ISNUMBER(SEARCH("outdoor", LOWER(AK2))), "Outdoor events subject to weather conditions. Indoor backup plan required.", "Standard indoor venue policy applies.")
{{Special_Requirements}} = IF(ISBLANK(AK2), "None specified", AK2)
```

## Google Docs Template Structure

### Contract Template Sections

#### 1. Header Section
```
WEDDING SERVICES CONTRACT

Contract Number: {{Contract_Number}}
Date: {{Contract_Date}}

CLIENT INFORMATION
Names: {{Client_Full_Name}}
Wedding Date: {{Wedding_Date}} ({{Wedding_Day}})
Venue: {{Venue_Name}}
Address: {{Venue_Address}}
Guest Count: {{Guest_Count}}
```

#### 2. Service Details Section
```
SERVICES CONTRACTED

{{DJ_Service_Selected}}
Package: {{DJ_Package_Details}}
Special Requests: {{DJ_Special_Requests}}

{{Photography_Service_Selected}}
Package: {{Photography_Package_Details}}
Coverage Locations: {{Photography_Locations}}
Special Requests: {{Photography_Special_Requests}}

{{Videography_Service_Selected}}
Package: {{Videography_Package_Details}}
Style: {{Videography_Style}}
Special Requests: {{Videography_Special_Requests}}
```

#### 3. Timeline Section
```
EVENT TIMELINE

Ceremony Time: {{Ceremony_Time}}
Reception Start: {{Reception_Start}}
Reception End: {{Reception_End}}

VENDOR ARRIVAL TIMES
DJ Setup: 2 hours before ceremony
Photography: 1 hour before ceremony
Videography: 30 minutes before ceremony
```

#### 4. Pricing Section
```
PRICING BREAKDOWN

DJ Services: {{DJ_Subtotal}}
Photography Services: {{Photography_Subtotal}}
Videography Services: {{Videography_Subtotal}}
Travel Fees: {{Travel_Fees}}
Equipment Fees: {{Equipment_Fees}}

Subtotal: {{Services_Subtotal}}
Discount: {{Discount_Applied}}
Pre-Tax Total: {{Pre_Tax_Total}}
Sales Tax: {{Tax_Amount}}

TOTAL AMOUNT: {{Final_Total}}
({{Final_Total_Words}})
```

#### 5. Payment Terms Section
```
PAYMENT TERMS

Total Contract Amount: {{Final_Total}}
Deposit Required: {{Deposit_Amount}} ({{Deposit_Percentage}})
Balance Due: {{Balance_Due}}
Payment Plan: {{Payment_Plan}}
Payment Schedule: {{Payment_Schedule_Details}}

PAYMENT DUE DATES
[This section will be populated from Payment Schedule sheet]
```

#### 6. Terms and Conditions Section
```
TERMS AND CONDITIONS

1. CANCELLATION POLICY
{{Cancellation_Policy}}

2. WEATHER POLICY
{{Weather_Policy}}

3. SPECIAL REQUIREMENTS
{{Special_Requirements}}

4. LIABILITY
[Standard liability clauses]

5. FORCE MAJEURE
[Standard force majeure clauses]
```

## Advanced Mail Merge Formulas

### Dynamic Service Lists
```excel
{{Services_List}} = 
  IF(U2="Yes", "• DJ Services ("&V2&")"&CHAR(10), "")&
  IF(Y2="Yes", "• Photography Services ("&Z2&")"&CHAR(10), "")&
  IF(AD2="Yes", "• Videography Services ("&AE2&")", "")
```

### Conditional Clauses
```excel
{{Equipment_Clause}} = 
  IF(AB2>0, 
    "Additional equipment rental fees of "&TEXT(AB2, "$#,##0.00")&" apply for specialized equipment and setup requirements.", 
    "No additional equipment fees apply to this contract.")
```

### Payment Schedule Integration
```excel
{{Payment_Schedule_Table}} = 
  "Payment 1 (Deposit): "&TEXT(Payment_Schedule!E2, "$#,##0.00")&" - Due: "&TEXT(Payment_Schedule!D2, "mm/dd/yyyy")&CHAR(10)&
  "Payment 2: "&TEXT(Payment_Schedule!E3, "$#,##0.00")&" - Due: "&TEXT(Payment_Schedule!D3, "mm/dd/yyyy")&CHAR(10)&
  "Payment 3: "&TEXT(Payment_Schedule!E4, "$#,##0.00")&" - Due: "&TEXT(Payment_Schedule!D4, "mm/dd/yyyy")&CHAR(10)&
  "Final Payment: "&TEXT(Payment_Schedule!E5, "$#,##0.00")&" - Due: "&TEXT(Payment_Schedule!D5, "mm/dd/yyyy")
```

## Google Apps Script Integration

### Automated Contract Generation Script
```javascript
function generateContract(clientId) {
  // Get client data from sheets
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var clientSheet = ss.getSheetByName('Client Dashboard');
  var clientData = getClientData(clientId);
  
  // Create new document from template
  var templateId = 'YOUR_TEMPLATE_DOCUMENT_ID';
  var template = DriveApp.getFileById(templateId);
  var newDoc = template.makeCopy('Contract - ' + clientData.clientName);
  
  // Open document and replace merge fields
  var doc = DocumentApp.openById(newDoc.getId());
  var body = doc.getBody();
  
  // Replace all merge fields
  for (var field in clientData) {
    body.replaceText('{{' + field + '}}', clientData[field]);
  }
  
  // Save and return document
  doc.saveAndClose();
  return newDoc.getUrl();
}

function getClientData(clientId) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Client Dashboard');
  var data = sheet.getDataRange().getValues();
  
  // Find client row and extract data
  for (var i = 1; i < data.length; i++) {
    if (data[i][0] === clientId) {
      return {
        clientName: data[i][1],
        weddingDate: Utilities.formatDate(data[i][2], Session.getScriptTimeZone(), 'MMMM dd, yyyy'),
        venue: data[i][3],
        // Add all other fields...
      };
    }
  }
}
```

### Email Integration Script
```javascript
function emailContract(clientId) {
  var contractUrl = generateContract(clientId);
  var clientData = getClientData(clientId);
  
  var subject = 'Wedding Services Contract - ' + clientData.clientName;
  var body = 'Dear ' + clientData.clientName + ',\n\n' +
             'Please find your wedding services contract attached.\n\n' +
             'Contract Details:\n' +
             'Wedding Date: ' + clientData.weddingDate + '\n' +
             'Total Amount: ' + clientData.finalTotal + '\n\n' +
             'Please review and sign the contract at your earliest convenience.\n\n' +
             'Best regards,\nWedding Services Team';
  
  GmailApp.sendEmail(clientData.email, subject, body, {
    attachments: [DriveApp.getFileById(getDocumentId(contractUrl)).getBlob()]
  });
}
```

## Implementation Steps

### Step 1: Create Google Docs Template
1. Create new Google Docs document
2. Insert merge fields using {{field_name}} format
3. Format document with professional styling
4. Save template and note document ID

### Step 2: Set Up Mail Merge Columns
1. Add new columns to Client Dashboard sheet
2. Insert mail merge formulas for each field
3. Test formulas with sample data
4. Verify formatting and calculations

### Step 3: Configure Google Apps Script
1. Open Google Apps Script editor
2. Create contract generation functions
3. Set up email integration
4. Test script with sample client data

### Step 4: Create Automation Triggers
1. Set up form submission triggers
2. Create contract status update triggers
3. Configure email notification system
4. Test end-to-end workflow

## Testing and Quality Assurance

### Test Scenarios
1. **Complete Service Package**: Client with DJ, Photography, and Videography
2. **Partial Services**: Client with only Photography
3. **Custom Requirements**: Client with special requests and modifications
4. **Payment Plans**: Test all payment plan options
5. **Edge Cases**: Unusual dates, large guest counts, multiple locations

### Validation Checklist
- [ ] All merge fields populate correctly
- [ ] Calculations match spreadsheet values
- [ ] Dates format properly
- [ ] Currency displays with correct formatting
- [ ] Conditional text appears/disappears as expected
- [ ] Payment schedules generate accurately
- [ ] Email integration works properly
- [ ] Document permissions set correctly

## Troubleshooting Common Issues

### Merge Field Problems
- **Field not populating**: Check spelling and case sensitivity
- **Wrong data appearing**: Verify cell references in formula
- **Formatting issues**: Use TEXT() function for number/date formatting

### Script Errors
- **Permission denied**: Check Google Apps Script permissions
- **Template not found**: Verify template document ID
- **Email failures**: Check Gmail API permissions and quotas

### Performance Optimization
- **Slow generation**: Minimize complex formulas in merge fields
- **Large documents**: Consider breaking into multiple templates
- **Batch processing**: Implement queuing for multiple contracts

This integration system provides seamless contract generation with accurate data population and professional formatting.

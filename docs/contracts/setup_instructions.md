# Quick Setup Instructions for Wedding Contract Template

## Files Included
- `contract_template.md` - Markdown source file
- `contract_template.docx` - Word document version
- `implementation_guide.md` - Comprehensive setup guide
- `setup_instructions.md` - This quick start guide

## Quick Start (5 Minutes)

### Step 1: Upload to Google Drive
1. Go to [Google Drive](https://drive.google.com)
2. Click "New" → "File upload"
3. Upload `contract_template.docx`
4. Right-click the uploaded file → "Open with" → "Google Docs"
5. Rename to "Wedding Contract Template"

### Step 2: Create Your Data Spreadsheet
1. In Google Drive, click "New" → "Google Sheets"
2. Name it "Wedding Contract Data"
3. Create these sheets (tabs at bottom):
   - Client_Data
   - Services_Pricing
   - Payment_Schedule
   - Company_Info
   - Legal_Terms
   - Admin_Details

### Step 3: Set Up Basic Data Structure
Copy these column headers into your "Client_Data" sheet:

```
Contract_Number | Contract_Date | Client_Primary_Name | Client_Secondary_Name | Wedding_Date | Total_Contract_Amount | Company_Name | Company_Phone | Company_Email
```

### Step 4: Test with Sample Data
Add one row of sample data to test the merge process.

### Step 5: Install Mail Merge Add-on
1. In your Google Sheets, go to "Extensions" → "Add-ons" → "Get add-ons"
2. Search for "Autocrat" or "Yet Another Mail Merge"
3. Install and follow setup wizard

## Merge Field Format
All merge fields use this format: `{{Field_Name}}`

Examples:
- `{{Client_Primary_Name}}` - Client's name
- `{{Wedding_Date}}` - Wedding date
- `{{Total_Contract_Amount}}` - Total contract value

## Need More Help?
See the complete `implementation_guide.md` for detailed instructions, troubleshooting, and advanced features.

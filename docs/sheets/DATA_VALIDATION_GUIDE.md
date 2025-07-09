# Data Validation and Error Handling Guide

## Data Validation Rules by Sheet

### 1. Form Responses Sheet Validation

#### Client Information Validation
```excel
Email Format: =AND(ISNUMBER(SEARCH("@", B2)), ISNUMBER(SEARCH(".", B2)), LEN(B2)>5)
Phone Format: =OR(LEN(C2)=10, LEN(C2)=12, LEN(C2)=14)
Date Format: =AND(ISNUMBER(K2), K2>TODAY())
```

#### Custom Validation Messages
- Email: "Please enter a valid email address (example@domain.com)"
- Phone: "Please enter phone number in format: 555-123-4567"
- Wedding Date: "Wedding date must be in the future"
- Guest Count: "Guest count must be between 1 and 1000"

### 2. Service Pricing Sheet Validation

#### Pricing Validation
```excel
Base Price: =AND(D2>=0, ISNUMBER(D2))
Hourly Rate: =AND(E2>=0, ISNUMBER(E2))
Hours Range: =AND(F2<=G2, F2>0, G2>0)
Multipliers: =AND(L2>=1, L2<=2, M2>=1, M2<=2, N2>=1, N2<=2)
```

#### Service Category Dropdown
```excel
={"DJ", "Photography", "Videography", "Travel", "Equipment"}
```

#### Package Name Validation
```excel
DJ Packages: ={"Basic DJ Package", "Standard DJ Package", "Premium DJ Package"}
Photography Packages: ={"Basic Photography", "Standard Photography", "Deluxe Photography", "Premium Photography"}
Videography Packages: ={"Basic Videography", "Cinematic Package", "Premium Cinematic"}
```

### 3. Client Dashboard Sheet Validation

#### Service Selection Validation
```excel
Service Options: ={"Yes", "No"}
Payment Plans: ={"Monthly", "Bi-weekly", "Lump Sum"}
Contract Status: ={"Draft", "Sent", "Signed", "Completed", "Cancelled"}
```

#### Calculated Field Validation
```excel
Hours Validation: =IF(AND(I2>0, I2<=24), I2, "Invalid hours")
Guest Count: =IF(AND(E2>0, E2<=1000), E2, "Invalid guest count")
Wedding Date: =IF(C2>TODAY(), C2, "Date must be future")
```

### 4. Payment Schedule Sheet Validation

#### Payment Status Options
```excel
={"Pending", "Paid", "Overdue", "Scheduled", "Cancelled", "Refunded"}
```

#### Payment Method Options
```excel
={"Credit Card", "Debit Card", "Check", "Bank Transfer", "Cash", "PayPal", "Venmo"}
```

#### Amount Validation
```excel
Payment Amount: =IF(AND(E2>0, E2<=AI2), E2, "Invalid payment amount")
Amount Paid: =IF(F2<=E2, F2, "Payment exceeds amount due")
```

### 5. Tax & Fees Sheet Validation

#### Tax Rate Validation
```excel
Tax Rates: =AND(E2>=0, E2<=0.15, F2>=0, F2<=0.05, G2>=0, G2<=0.03)
Total Tax Rate: =IF(H2<=0.20, H2, "Tax rate too high")
```

#### State Code Validation
```excel
State Codes: ={"AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"}
```

## Error Handling Formulas

### Common Error Scenarios

#### VLOOKUP Error Handling
```excel
=IFERROR(VLOOKUP(lookup_value, table_array, col_index, FALSE), "Service not found")
```

#### Division by Zero Protection
```excel
=IF(denominator=0, 0, numerator/denominator)
```

#### Date Calculation Errors
```excel
=IF(ISDATE(date_field), date_calculation, "Invalid date")
```

#### Blank Cell Handling
```excel
=IF(ISBLANK(cell_reference), default_value, calculation)
```

### Advanced Error Handling

#### Multiple Condition Validation
```excel
=IF(AND(condition1, condition2, condition3), 
    calculation, 
    "Error: Check input values")
```

#### Nested Error Handling
```excel
=IFERROR(
    IFERROR(primary_calculation, secondary_calculation), 
    "Unable to calculate")
```

#### Custom Error Messages
```excel
=IF(error_condition1, "Error Message 1",
    IF(error_condition2, "Error Message 2",
        IF(error_condition3, "Error Message 3", 
            normal_calculation)))
```

## Data Quality Checks

### Automated Quality Checks

#### Client Dashboard Quality Score
```excel
=COUNTIFS(A2:AN2, "<>", A2:AN2, "<>ERROR") / COUNTA(A2:AN2) * 100
```

#### Missing Data Detection
```excel
=IF(COUNTBLANK(A2:AN2)>0, "Missing data detected", "Complete")
```

#### Duplicate Client Detection
```excel
=IF(COUNTIF(A:A, A2)>1, "Duplicate client ID", "Unique")
```

### Data Consistency Checks

#### Service Package Consistency
```excel
=IF(AND(F2="Yes", ISBLANK(G2)), "Package required for DJ service", "OK")
```

#### Date Logic Validation
```excel
=IF(C2<=TODAY(), "Wedding date must be future", 
    IF(D2>C2, "Due date after wedding", "OK"))
```

#### Budget vs Actual Comparison
```excel
=IF(AI2>Form_Responses!AI2*1.2, "Exceeds budget by >20%", "Within budget")
```

## Conditional Formatting Rules

### Visual Error Indicators

#### Red Background for Errors
- Condition: `=ISERROR(cell)`
- Format: Red background, white text

#### Yellow Background for Warnings
- Condition: `=AND(NOT(ISERROR(cell)), cell="Warning")`
- Format: Yellow background, black text

#### Green Background for Valid Data
- Condition: `=AND(NOT(ISERROR(cell)), NOT(ISBLANK(cell)))`
- Format: Light green background

### Status-Based Formatting

#### Contract Status Colors
```excel
Draft: Light gray background
Sent: Yellow background
Signed: Green background
Completed: Dark green background
Cancelled: Red background
```

#### Payment Status Colors
```excel
Pending: Light blue background
Paid: Green background
Overdue: Red background, white text
Scheduled: Light gray background
```

#### Priority-Based Formatting
```excel
High Priority (Due within 7 days): Red text, bold
Medium Priority (Due within 30 days): Orange text
Low Priority (Due >30 days): Black text
```

## Input Validation Scripts

### Google Apps Script Validation Functions

#### Email Validation Function
```javascript
function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
```

#### Phone Number Validation
```javascript
function validatePhone(phone) {
  var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phoneRegex.test(phone);
}
```

#### Date Range Validation
```javascript
function validateWeddingDate(date) {
  var today = new Date();
  var weddingDate = new Date(date);
  var maxDate = new Date();
  maxDate.setFullYear(today.getFullYear() + 2);
  
  return weddingDate > today && weddingDate < maxDate;
}
```

## Error Prevention Strategies

### Form Design Best Practices

#### Required Field Indicators
- Use asterisks (*) for required fields
- Implement client-side validation before submission
- Provide clear error messages for invalid inputs

#### Dropdown Menus for Consistency
- Use dropdowns instead of free text where possible
- Provide "Other" option with text field when needed
- Validate dropdown selections against master lists

#### Progressive Disclosure
- Show relevant fields based on previous selections
- Hide unnecessary options to reduce confusion
- Use conditional logic to guide user input

### Data Entry Guidelines

#### Standardized Formats
- Phone: (555) 123-4567
- Date: MM/DD/YYYY
- Time: HH:MM AM/PM
- Currency: $X,XXX.XX

#### Validation Timing
- Real-time validation for critical fields
- Batch validation before form submission
- Post-submission validation with error reporting

## Troubleshooting Common Issues

### Formula Errors

#### #REF! Errors
- Cause: Deleted rows/columns referenced in formulas
- Solution: Update cell references or use named ranges

#### #VALUE! Errors
- Cause: Wrong data type in calculation
- Solution: Use ISNUMBER() or VALUE() functions

#### #N/A Errors
- Cause: VLOOKUP/MATCH functions can't find value
- Solution: Use IFERROR() wrapper with default value

#### #DIV/0! Errors
- Cause: Division by zero
- Solution: Use IF() to check denominator before division

### Data Import Issues

#### Format Mismatches
- Dates imported as text
- Numbers with currency symbols
- Leading/trailing spaces in text

#### Solutions
```excel
Date Conversion: =DATEVALUE(text_date)
Number Conversion: =VALUE(SUBSTITUTE(text_number, "$", ""))
Text Cleaning: =TRIM(text_field)
```

### Performance Optimization

#### Large Dataset Handling
- Use INDEX/MATCH instead of VLOOKUP for better performance
- Limit array formulas to necessary ranges
- Use helper columns for complex calculations

#### Memory Management
- Avoid volatile functions (NOW, TODAY, RAND) in large datasets
- Use manual calculation mode for complex workbooks
- Regular cleanup of unused cells and formatting

This comprehensive validation system ensures data integrity and provides clear feedback for error resolution.

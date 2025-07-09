# Wedding Services Google Sheets Calculation Engine - Setup Guide

## Overview
This comprehensive Google Sheets system processes wedding services data from Google Forms intake and performs automated pricing calculations, tax computations, payment schedules, and generates business reports.

## Sheet Structure

### 1. Form Responses Sheet
**Purpose**: Receives and organizes data directly from Google Forms
**Key Features**:
- Auto-populated from Google Forms submissions
- Client contact information and wedding details
- Service selections and special requirements
- Budget information and preferences

### 2. Service Pricing Sheet
**Purpose**: Master pricing database for all services and add-ons
**Key Features**:
- Base pricing for DJ, Photography, Videography services
- Hourly rates and package options
- Seasonal and weekend multipliers
- Add-on pricing and equipment rentals

### 3. Client Dashboard Sheet
**Purpose**: Individual client calculations and package summaries
**Key Formulas**:

#### DJ Service Calculations
```excel
=IF(DJ_Service="Yes", 
    VLOOKUP(DJ_Package, Service_Pricing!C:D, 2, FALSE) + 
    (DJ_Hours * VLOOKUP(DJ_Package, Service_Pricing!C:E, 3, FALSE)) + 
    DJ_Add_Ons, 0)
```

#### Photography Service Calculations
```excel
=IF(Photography_Service="Yes", 
    VLOOKUP(Photography_Package, Service_Pricing!C:D, 2, FALSE) + 
    (Photography_Hours * VLOOKUP(Photography_Package, Service_Pricing!C:E, 3, FALSE)) + 
    Photography_Add_Ons, 0)
```

#### Videography Service Calculations
```excel
=IF(Videography_Service="Yes", 
    VLOOKUP(Videography_Package, Service_Pricing!C:D, 2, FALSE) + 
    (Videography_Hours * VLOOKUP(Videography_Package, Service_Pricing!C:E, 3, FALSE)) + 
    Videography_Add_Ons, 0)
```

#### Weekend/Seasonal Multipliers
```excel
=IF(WEEKDAY(Wedding_Date, 2) >= 6, 
    Services_Subtotal * VLOOKUP("Weekend_Multiplier", Service_Pricing!L:M, 2, FALSE), 
    Services_Subtotal)
```

#### Total Calculations
```excel
=DJ_Subtotal + Photography_Subtotal + Videography_Subtotal + Travel_Fees + Equipment_Fees
```

### 4. Payment Schedule Sheet
**Purpose**: Automated payment plan generation with due dates
**Key Formulas**:

#### Payment Amount Calculation (Monthly Plan)
```excel
=IF(Payment_Plan="Monthly", 
    Final_Total / 4, 
    IF(Payment_Plan="Bi-weekly", 
        Final_Total / 8, 
        Final_Total))
```

#### Due Date Calculation
```excel
=IF(Payment_Number=1, 
    TODAY(), 
    Wedding_Date - (120 - (Payment_Number-1)*30))
```

#### Days Until Wedding
```excel
=Wedding_Date - TODAY()
```

#### Payment Status Logic
```excel
=IF(Amount_Paid >= Amount_Due, "Paid", 
    IF(Due_Date < TODAY(), "Overdue", 
        IF(Due_Date <= TODAY()+7, "Due Soon", "Scheduled")))
```

### 5. Tax & Fees Sheet
**Purpose**: Tax calculations and additional fees
**Key Formulas**:

#### Total Tax Rate Calculation
```excel
=Base_Tax_Rate + County_Tax_Rate + City_Tax_Rate
```

#### Sales Tax Calculation
```excel
=Taxable_Amount * Total_Tax_Rate
```

#### Processing Fee Calculation
```excel
=Services_Subtotal * Processing_Fee_Rate
```

#### Late Fee Application
```excel
=IF(Late_Fee_Applied="Yes", 
    Balance_Due * Late_Fee_Rate, 0)
```

#### Grand Total
```excel
=Services_Subtotal + Sales_Tax + Processing_Fee + Late_Fee_Amount + Convenience_Fee
```

### 6. Reports Sheet
**Purpose**: Business analytics and performance metrics
**Key Formulas**:

#### Monthly Revenue Calculation
```excel
=SUMIFS(Client_Dashboard!Final_Total, 
    Client_Dashboard!Wedding_Date, ">="&DATE(YEAR(TODAY()), MONTH(TODAY()), 1), 
    Client_Dashboard!Wedding_Date, "<"&DATE(YEAR(TODAY()), MONTH(TODAY())+1, 1))
```

#### Average Deal Size
```excel
=AVERAGE(Client_Dashboard!Final_Total)
```

#### Conversion Rate
```excel
=COUNTIF(Client_Dashboard!Contract_Status, "Signed") / 
 COUNT(Client_Dashboard!Client_ID)
```

#### Growth Rate Calculation
```excel
=(Current_Value - Previous_Value) / Previous_Value * 100
```

## Implementation Steps

### Step 1: Create Google Sheets Workbook
1. Create new Google Sheets workbook named "Wedding Services Calculator"
2. Create 6 sheets with the names provided
3. Import CSV data into each respective sheet

### Step 2: Set Up Google Forms Integration
1. Connect Google Forms to "Form Responses" sheet
2. Ensure form field names match column headers exactly
3. Set up automatic timestamp and client ID generation

### Step 3: Configure Formulas

#### In Client Dashboard Sheet:
- Add formulas in columns for service calculations
- Set up conditional formatting for contract status
- Create data validation for dropdown fields

#### In Payment Schedule Sheet:
- Implement payment calculation formulas
- Set up conditional formatting for payment status
- Add automatic due date calculations

#### In Tax & Fees Sheet:
- Configure tax rate lookups by location
- Set up fee calculations
- Implement total calculations

### Step 4: Data Validation Rules

#### Client Dashboard Validation:
```excel
Service selections: ={"Yes", "No"}
Package types: =Service_Pricing!C:C
Payment plans: ={"Monthly", "Bi-weekly", "Lump Sum"}
Contract status: ={"Draft", "Sent", "Signed", "Completed"}
```

#### Payment Schedule Validation:
```excel
Payment status: ={"Pending", "Paid", "Overdue", "Scheduled"}
Payment method: ={"Credit Card", "Check", "Bank Transfer", "Cash"}
```

### Step 5: Conditional Formatting

#### Client Dashboard:
- Contract Status: Green for "Signed", Yellow for "Sent", Red for "Draft"
- Payment Status: Red for overdue, Yellow for due soon, Green for paid

#### Payment Schedule:
- Due dates: Red for overdue, Yellow for due within 7 days
- Payment amounts: Bold for deposits, italic for final payments

### Step 6: Advanced Features

#### VLOOKUP for Service Pricing:
```excel
=VLOOKUP(Service_Type&Package_Name, 
    Service_Pricing!B:D, 3, FALSE)
```

#### INDEX-MATCH for Complex Lookups:
```excel
=INDEX(Service_Pricing!D:D, 
    MATCH(1, 
        (Service_Pricing!A:A=Service_Category) * 
        (Service_Pricing!C:C=Package_Name), 0))
```

#### Dynamic Pricing with Multipliers:
```excel
=Base_Price * 
 IF(WEEKDAY(Wedding_Date)>=6, Weekend_Multiplier, 1) * 
 IF(MONTH(Wedding_Date) IN {5,6,7,8,9,10}, Seasonal_Multiplier, 1)
```

## Contract Integration Formulas

### For Google Docs Mail Merge:
```excel
Client_Full_Name: =First_Name&" "&Last_Name&" & "&Partner_First_Name&" "&Partner_Last_Name
Wedding_Date_Formatted: =TEXT(Wedding_Date, "mmmm dd, yyyy")
Services_List: =IF(DJ_Service="Yes", "DJ Services, ", "")&IF(Photography_Service="Yes", "Photography, ", "")&IF(Videography_Service="Yes", "Videography", "")
Total_Amount_Words: =PROPER(SUBSTITUTE(FIXED(Final_Total, 2), ".00", ""))&" Dollars"
```

## Error Handling

### Common Error Checks:
```excel
=IFERROR(VLOOKUP(...), "Service not found")
=IF(ISBLANK(Wedding_Date), "Date required", Payment_Calculation)
=IF(Final_Total<=0, "Check pricing", Final_Total)
```

### Data Validation Messages:
- "Please select a valid service package"
- "Wedding date must be in the future"
- "Guest count must be a positive number"

## Maintenance and Updates

### Monthly Tasks:
1. Update seasonal multipliers in Service Pricing sheet
2. Review and adjust base pricing as needed
3. Update tax rates for different locations
4. Generate monthly reports and analytics

### Quarterly Tasks:
1. Analyze booking trends and adjust pricing strategy
2. Review payment plan effectiveness
3. Update service packages based on demand
4. Backup all data and formulas

## Security and Access

### Recommended Permissions:
- Owner: Full access to all sheets and formulas
- Staff: Edit access to Form Responses and Client Dashboard
- Clients: View-only access to their specific payment schedule

### Data Protection:
- Regular backups of the entire workbook
- Version history tracking enabled
- Restricted sharing settings
- Audit trail for all changes

## Troubleshooting

### Common Issues:
1. **Form not updating**: Check Google Forms connection
2. **Calculation errors**: Verify VLOOKUP ranges and criteria
3. **Date formatting**: Ensure consistent date formats across sheets
4. **Tax calculations**: Verify tax rates and location data

### Support Resources:
- Google Sheets function reference
- Wedding industry pricing guides
- Tax rate databases by location
- Payment processing integration guides

This system provides a complete solution for managing wedding services from initial inquiry through final payment, with automated calculations and comprehensive reporting capabilities.

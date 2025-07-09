# Wedding Sheets - Complete Formulas Reference

## Client Dashboard Sheet Formulas

### Row-by-Row Formula Implementation

#### Column A: Client_ID
```excel
=IF(ISBLANK(Form_Responses!A2), "", Form_Responses!B2)
```

#### Column B: Client_Name
```excel
=IF(ISBLANK(A2), "", Form_Responses!C2&" "&Form_Responses!D2&" & "&Form_Responses!G2&" "&Form_Responses!H2)
```

#### Column C: Wedding_Date
```excel
=IF(ISBLANK(A2), "", Form_Responses!K2)
```

#### Column D: Venue
```excel
=IF(ISBLANK(A2), "", Form_Responses!L2)
```

#### Column E: Guest_Count
```excel
=IF(ISBLANK(A2), "", Form_Responses!Q2)
```

#### Column F: DJ_Service
```excel
=IF(ISBLANK(A2), "", Form_Responses!U2)
```

#### Column G: DJ_Package
```excel
=IF(F2="Yes", Form_Responses!V2, "")
```

#### Column H: DJ_Base_Price
```excel
=IF(G2="", 0, IFERROR(VLOOKUP(G2, Service_Pricing!C:D, 2, FALSE), 0))
```

#### Column I: DJ_Hours
```excel
=IF(F2="Yes", Form_Responses!W2, 0)
```

#### Column J: DJ_Hourly_Rate
```excel
=IF(G2="", 0, IFERROR(VLOOKUP(G2, Service_Pricing!C:E, 3, FALSE), 0))
```

#### Column K: DJ_Add_Ons
```excel
=IF(F2="Yes", 
    SUMIF(Service_Pricing!A:A, "DJ", Service_Pricing!J:J) * 
    IF(ISNUMBER(SEARCH("microphone", LOWER(Form_Responses!X2))), 1, 0) + 
    IF(ISNUMBER(SEARCH("lighting", LOWER(Form_Responses!X2))), 200, 0), 0)
```

#### Column L: DJ_Subtotal
```excel
=IF(F2="No", 0, 
    (H2 + (I2 * J2) + K2) * 
    IF(WEEKDAY(C2, 2) >= 6, 1.2, 1) * 
    IF(MONTH(C2) >= 5 AND MONTH(C2) <= 10, 1.1, 1))
```

#### Column M: Photography_Service
```excel
=IF(ISBLANK(A2), "", Form_Responses!Y2)
```

#### Column N: Photography_Package
```excel
=IF(M2="Yes", Form_Responses!Z2, "")
```

#### Column O: Photography_Base_Price
```excel
=IF(N2="", 0, IFERROR(VLOOKUP(N2, Service_Pricing!C:D, 2, FALSE), 0))
```

#### Column P: Photography_Hours
```excel
=IF(M2="Yes", Form_Responses!AA2, 0)
```

#### Column Q: Photography_Hourly_Rate
```excel
=IF(N2="", 0, IFERROR(VLOOKUP(N2, Service_Pricing!C:E, 3, FALSE), 0))
```

#### Column R: Photography_Add_Ons
```excel
=IF(M2="Yes", 
    IF(ISNUMBER(SEARCH("engagement", LOWER(Form_Responses!AC2))), 500, 0) + 
    IF(ISNUMBER(SEARCH("drone", LOWER(Form_Responses!AC2))), 800, 0) + 
    IF(ISNUMBER(SEARCH("second photographer", LOWER(Form_Responses!AC2))), 600, 0), 0)
```

#### Column S: Photography_Subtotal
```excel
=IF(M2="No", 0, 
    (O2 + (P2 * Q2) + R2) * 
    IF(WEEKDAY(C2, 2) >= 6, 1.15, 1) * 
    IF(MONTH(C2) >= 5 AND MONTH(C2) <= 10, 1.1, 1) * 
    (1 + (E2 * 0.001)))
```

#### Column T: Videography_Service
```excel
=IF(ISBLANK(A2), "", Form_Responses!AD2)
```

#### Column U: Videography_Package
```excel
=IF(T2="Yes", Form_Responses!AE2, "")
```

#### Column V: Videography_Base_Price
```excel
=IF(U2="", 0, IFERROR(VLOOKUP(U2, Service_Pricing!C:D, 2, FALSE), 0))
```

#### Column W: Videography_Hours
```excel
=IF(T2="Yes", Form_Responses!AF2, 0)
```

#### Column X: Videography_Hourly_Rate
```excel
=IF(U2="", 0, IFERROR(VLOOKUP(U2, Service_Pricing!C:E, 3, FALSE), 0))
```

#### Column Y: Videography_Add_Ons
```excel
=IF(T2="Yes", 
    IF(ISNUMBER(SEARCH("highlight", LOWER(Form_Responses!AH2))), 800, 0) + 
    IF(ISNUMBER(SEARCH("drone", LOWER(Form_Responses!AH2))), 600, 0) + 
    IF(ISNUMBER(SEARCH("live stream", LOWER(Form_Responses!AH2))), 1200, 0), 0)
```

#### Column Z: Videography_Subtotal
```excel
=IF(T2="No", 0, 
    (V2 + (W2 * X2) + Y2) * 
    IF(WEEKDAY(C2, 2) >= 6, 1.2, 1) * 
    IF(MONTH(C2) >= 5 AND MONTH(C2) <= 10, 1.15, 1))
```

#### Column AA: Travel_Fees
```excel
=IF(ISNUMBER(SEARCH("destination", LOWER(Form_Responses!AK2))), 500, 
    IF(ISNUMBER(SEARCH("regional", LOWER(Form_Responses!AK2))), 200, 0))
```

#### Column AB: Equipment_Fees
```excel
=IF(ISNUMBER(SEARCH("outdoor", LOWER(Form_Responses!AK2))), 100, 0) + 
 IF(ISNUMBER(SEARCH("backup", LOWER(Form_Responses!AK2))), 150, 0)
```

#### Column AC: Services_Subtotal
```excel
=L2 + S2 + Z2 + AA2 + AB2
```

#### Column AD: Discount_Applied
```excel
=IF(AC2 > 15000, 0.1, IF(AC2 > 10000, 0.05, 0))
```

#### Column AE: Discount_Amount
```excel
=AC2 * AD2
```

#### Column AF: Pre_Tax_Total
```excel
=AC2 - AE2
```

#### Column AG: Tax_Rate
```excel
=IFERROR(VLOOKUP(Form_Responses!N2, Tax_Fees!B:H, 7, FALSE), 0.0875)
```

#### Column AH: Tax_Amount
```excel
=AF2 * AG2
```

#### Column AI: Final_Total
```excel
=AF2 + AH2
```

#### Column AJ: Deposit_Required
```excel
=IF(Form_Responses!AN2="Lump Sum", 1, 0.25)
```

#### Column AK: Deposit_Amount
```excel
=AI2 * AJ2
```

#### Column AL: Balance_Due
```excel
=AI2 - AK2
```

#### Column AM: Payment_Plan
```excel
=Form_Responses!AN2
```

#### Column AN: Contract_Status
```excel
="Draft"
```

## Payment Schedule Sheet Formulas

#### Column A: Client_ID
```excel
=Client_Dashboard!A2
```

#### Column B: Payment_Number
```excel
=IF(Client_Dashboard!AM2="Monthly", ROW()-1, 
    IF(Client_Dashboard!AM2="Bi-weekly", ROW()-1, 1))
```

#### Column C: Payment_Type
```excel
=IF(B2=1, "Deposit", 
    IF(B2=COUNTIFS(Payment_Schedule!A:A, A2), "Final Payment", "Progress Payment"))
```

#### Column D: Due_Date
```excel
=IF(B2=1, TODAY(), 
    IF(Client_Dashboard!AM2="Monthly", 
        Client_Dashboard!C2 - (120 - (B2-1)*30), 
        Client_Dashboard!C2 - (120 - (B2-1)*14)))
```

#### Column E: Amount_Due
```excel
=IF(Client_Dashboard!AM2="Lump Sum", Client_Dashboard!AI2, 
    IF(Client_Dashboard!AM2="Monthly", Client_Dashboard!AI2/4, 
        Client_Dashboard!AI2/8))
```

#### Column F: Amount_Paid
```excel
=0
```

#### Column G: Payment_Status
```excel
=IF(F2>=E2, "Paid", 
    IF(D2<TODAY(), "Overdue", 
        IF(D2<=TODAY()+7, "Due Soon", "Scheduled")))
```

#### Column H: Payment_Method
```excel
=""
```

#### Column I: Transaction_ID
```excel
=""
```

#### Column J: Notes
```excel
=IF(B2=1, "Initial deposit", 
    IF(C2="Final Payment", "Final payment due 1 week before", 
        "Progress payment "&B2))
```

#### Column K: Days_Until_Wedding
```excel
=Client_Dashboard!C2 - TODAY()
```

#### Column L: Percentage_of_Total
```excel
=E2/Client_Dashboard!AI2*100
```

#### Column M: Late_Fee_Applied
```excel
=IF(AND(G2="Overdue", TODAY()-D2>7), "Yes", "No")
```

#### Column N: Late_Fee_Amount
```excel
=IF(M2="Yes", E2*0.05, 0)
```

## Tax & Fees Sheet Formulas

#### Column A: Client_ID
```excel
=Client_Dashboard!A2
```

#### Column B: State
```excel
=MID(Form_Responses!N2, FIND(",", Form_Responses!N2)+2, 2)
```

#### Column C: County
```excel
=VLOOKUP(B2, Tax_Rates!A:C, 3, FALSE)
```

#### Column D: City
```excel
=LEFT(Form_Responses!N2, FIND(",", Form_Responses!N2)-1)
```

#### Column E: Base_Tax_Rate
```excel
=VLOOKUP(B2, Tax_Rates!A:B, 2, FALSE)
```

#### Column F: County_Tax_Rate
```excel
=VLOOKUP(C2, Tax_Rates!C:D, 2, FALSE)
```

#### Column G: City_Tax_Rate
```excel
=VLOOKUP(D2, Tax_Rates!E:F, 2, FALSE)
```

#### Column H: Total_Tax_Rate
```excel
=E2+F2+G2
```

#### Column I: Services_Subtotal
```excel
=Client_Dashboard!AC2
```

#### Column J: Taxable_Amount
```excel
=I2
```

#### Column K: Tax_Exempt_Amount
```excel
=0
```

#### Column L: Sales_Tax
```excel
=J2*H2
```

#### Column M: Processing_Fee_Rate
```excel
=0.025
```

#### Column N: Processing_Fee
```excel
=I2*M2
```

#### Column O: Late_Fee_Rate
```excel
=0.05
```

#### Column P: Late_Fee_Applied
```excel
=IF(COUNTIFS(Payment_Schedule!A:A, A2, Payment_Schedule!G:G, "Overdue")>0, "Yes", "No")
```

#### Column Q: Late_Fee_Amount
```excel
=IF(P2="Yes", Client_Dashboard!AL2*O2, 0)
```

#### Column R: Convenience_Fee
```excel
=IF(Client_Dashboard!AM2<>"Lump Sum", 25, 0)
```

#### Column S: Total_Fees
```excel
=N2+Q2+R2
```

#### Column T: Grand_Total
```excel
=I2+L2+S2
```

## Reports Sheet Formulas

### Revenue Calculations
```excel
=SUMIFS(Client_Dashboard!AI:AI, 
    Client_Dashboard!C:C, ">="&DATE(YEAR(TODAY()), MONTH(TODAY()), 1), 
    Client_Dashboard!C:C, "<"&DATE(YEAR(TODAY()), MONTH(TODAY())+1, 1))
```

### Service-Specific Revenue
```excel
=SUMIFS(Client_Dashboard!L:L, 
    Client_Dashboard!C:C, ">="&DATE(YEAR(TODAY()), MONTH(TODAY()), 1), 
    Client_Dashboard!F:F, "Yes")
```

### Booking Analytics
```excel
=COUNTIFS(Client_Dashboard!C:C, 
    ">="&DATE(YEAR(TODAY()), MONTH(TODAY()), 1), 
    Client_Dashboard!C:C, 
    "<"&DATE(YEAR(TODAY()), MONTH(TODAY())+1, 1))
```

### Growth Rate Calculation
```excel
=(Current_Period_Value - Previous_Period_Value) / Previous_Period_Value * 100
```

### Average Deal Size
```excel
=AVERAGEIFS(Client_Dashboard!AI:AI, 
    Client_Dashboard!C:C, ">="&DATE(YEAR(TODAY()), MONTH(TODAY()), 1))
```

### Conversion Rate
```excel
=COUNTIFS(Client_Dashboard!AN:AN, "Signed") / 
 COUNTA(Client_Dashboard!A:A) - 1
```

## Conditional Formatting Rules

### Client Dashboard
- Contract Status: Green for "Signed", Yellow for "Sent", Red for "Draft"
- Final Total: Color scale from red (low) to green (high)
- Wedding Date: Red if past, yellow if within 30 days

### Payment Schedule
- Payment Status: Red for "Overdue", Yellow for "Due Soon", Green for "Paid"
- Due Date: Red if overdue, yellow if due within 7 days
- Amount Due: Bold formatting for deposits

### Data Validation Rules
```excel
Service_Selection: ={"Yes", "No"}
Package_Types: =Service_Pricing!C:C
Payment_Plans: ={"Monthly", "Bi-weekly", "Lump Sum"}
Contract_Status: ={"Draft", "Sent", "Signed", "Completed"}
Payment_Status: ={"Pending", "Paid", "Overdue", "Scheduled"}
```

This comprehensive formula reference ensures accurate calculations across all sheets and maintains data integrity throughout the system.

# Wedding Services Workflow Test Report

**Generated:** 2025-07-09 17:26:18

## Test Summary

- **Total Tests:** 85
- **Passed:** 77
- **Failed:** 8
- **Success Rate:** 90.6%

## Form Validation

```json
[
  {
    "client_id": "WED2025001",
    "scenario": "Full Package Premium Wedding",
    "tests": [
      {
        "field": "client_information.primary_contact_name",
        "value": "Alexandra Victoria Thompson",
        "status": "PASS",
        "message": "Required field present"
      },
      {
        "field": "client_information.primary_contact_email",
        "value": "alexandra.thompson@email.com",
        "status": "PASS",
        "message": "Required field present"
      },
      {
        "field": "wedding_details.wedding_date",
        "value": "2025-06-21",
        "status": "PASS",
        "message": "Required field present"
      },
      {
        "field": "venue_information.ceremony_venue_name",
        "value": "Ritz-Carlton Laguna Niguel",
        "status": "PASS",
        "message": "Required field present"
      },
      {
        "field": "email_validation",
        "value": "alexandra.thompson@email.com",
        "status": "PASS",
        "message": "Email format valid"
      },
      {
        "field": "date_validation",
        "value": "2025-06-21",
        "status": "FAIL",
        "message": "Wedding date is in past"
      }
    ]
  },
  {
    "client_id": "WED2025002",
    "scenario": "Photography-Only Destination Wedding",
    "tests": [
      {
        "field": "client_information.primary_contact_name",
        "value": "Emma Rose Martinez",
        "status": "PASS",
        "message": "Required field present"
      },
      {
        "field": "client_information.primary_contact_email",
        "value": "emma.martinez@email.com",
        "status": "PASS",
        "message": "Required field present"
      },
      {
        "field": "wedding_details.wedding_date",
        "value": "2025-08-14",
        "status": "PASS",
        "message": "Required field present"
      },
      {
        "field": "venue_information.ceremony_venue_name",
        "value": "Scripps Seaside Forum",
        "status": "PASS",
        "message": "Required field present"
      },
      {
        "field": "email_validation",
        "value": "emma.martinez@email.com",
        "status": "PASS",
        "message": "Email format valid"
      },
      {
        "field": "date_validation",
        "value": "2025-08-14",
        "status": "PASS",
        "message": "Wedding date is in future"
      }
    ]
  },
  {
    "client_id": "WED2025003",
    "scenario": "DJ-Only Budget Wedding",
    "tests": [
      {
        "field": "client_information.primary_contact_name",
        "value": "Jessica Lynn Parker",
        "status": "PASS",
        "message": "Required field present"
      },
      {
        "field": "client_information.primary_contact_email",
        "value": "jessica.parker@email.com",
        "status": "PASS",
        "message": "Required field present"
      },
      {
        "field": "wedding_details.wedding_date",
        "value": "2025-05-17",
        "status": "PASS",
        "message": "Required field present"
      },
      {
        "field": "venue_information.ceremony_venue_name",
        "value": "Riverside Community Center",
        "status": "PASS",
        "message": "Required field present"
      },
      {
        "field": "email_validation",
        "value": "jessica.parker@email.com",
        "status": "PASS",
        "message": "Email format valid"
      },
      {
        "field": "date_validation",
        "value": "2025-05-17",
        "status": "FAIL",
        "message": "Wedding date is in past"
      }
    ]
  },
  {
    "client_id": "WED2025004",
    "scenario": "Photography + Videography (No DJ)",
    "tests": [
      {
        "field": "client_information.primary_contact_name",
        "value": "Sophia Grace Williams",
        "status": "PASS",
        "message": "Required field present"
      },
      {
        "field": "client_information.primary_contact_email",
        "value": "sophia.williams@email.com",
        "status": "PASS",
        "message": "Required field present"
      },
      {
        "field": "wedding_details.wedding_date",
        "value": "2025-09-06",
        "status": "PASS",
        "message": "Required field present"
      },
      {
        "field": "venue_information.ceremony_venue_name",
        "value": "Descanso Gardens",
        "status": "PASS",
        "message": "Required field present"
      },
      {
        "field": "email_validation",
        "value": "sophia.williams@email.com",
        "status": "PASS",
        "message": "Email format valid"
      },
      {
        "field": "date_validation",
        "value": "2025-09-06",
        "status": "PASS",
        "message": "Wedding date is in future"
      }
    ]
  },
  {
    "client_id": "WED2025005",
    "scenario": "Last-Minute Wedding (Edge Case)",
    "tests": [
      {
        "field": "client_information.primary_contact_name",
        "value": "Ashley Nicole Davis",
        "status": "PASS",
        "message": "Required field present"
      },
      {
        "field": "client_information.primary_contact_email",
        "value": "ashley.davis@email.com",
        "status": "PASS",
        "message": "Required field present"
      },
      {
        "field": "wedding_details.wedding_date",
        "value": "2025-02-14",
        "status": "PASS",
        "message": "Required field present"
      },
      {
        "field": "venue_information.ceremony_venue_name",
        "value": "Santa Monica Pier",
        "status": "PASS",
        "message": "Required field present"
      },
      {
        "field": "email_validation",
        "value": "ashley.davis@email.com",
        "status": "PASS",
        "message": "Email format valid"
      },
      {
        "field": "date_validation",
        "value": "2025-02-14",
        "status": "FAIL",
        "message": "Wedding date is in past"
      }
    ]
  }
]
```

## Pricing Calculations

```json
[
  {
    "client_id": "WED2025001",
    "scenario": "Full Package Premium Wedding",
    "calculations": [
      {
        "service": "DJ",
        "test": "base_calculation",
        "expected": 3000,
        "actual": 3000,
        "status": "PASS"
      },
      {
        "service": "Photography",
        "test": "base_calculation",
        "expected": 7600,
        "actual": 7600,
        "status": "PASS"
      },
      {
        "service": "Videography",
        "test": "base_calculation",
        "expected": 6500,
        "actual": 6500,
        "status": "PASS"
      },
      {
        "service": "Travel",
        "test": "base_calculation",
        "expected": 200,
        "actual": 200,
        "status": "PASS"
      }
    ]
  },
  {
    "client_id": "WED2025002",
    "scenario": "Photography-Only Destination Wedding",
    "calculations": [
      {
        "service": "Photography",
        "test": "base_calculation",
        "expected": 9500,
        "actual": 9500,
        "status": "PASS"
      },
      {
        "service": "Travel",
        "test": "base_calculation",
        "expected": 200,
        "actual": 200,
        "status": "PASS"
      }
    ]
  },
  {
    "client_id": "WED2025003",
    "scenario": "DJ-Only Budget Wedding",
    "calculations": [
      {
        "service": "DJ",
        "test": "base_calculation",
        "expected": 2075,
        "actual": 2075,
        "status": "PASS"
      }
    ]
  },
  {
    "client_id": "WED2025004",
    "scenario": "Photography + Videography (No DJ)",
    "calculations": [
      {
        "service": "Photography",
        "test": "base_calculation",
        "expected": 4500,
        "actual": 4500,
        "status": "PASS"
      },
      {
        "service": "Videography",
        "test": "base_calculation",
        "expected": 3500,
        "actual": 3500,
        "status": "PASS"
      }
    ]
  },
  {
    "client_id": "WED2025005",
    "scenario": "Last-Minute Wedding (Edge Case)",
    "calculations": [
      {
        "service": "DJ",
        "test": "base_calculation",
        "expected": 1300,
        "actual": 1300,
        "status": "PASS"
      },
      {
        "service": "Photography",
        "test": "base_calculation",
        "expected": 2700,
        "actual": 2700,
        "status": "PASS"
      }
    ]
  }
]
```

## Payment Schedules

```json
[
  {
    "client_id": "WED2025001",
    "scenario": "Full Package Premium Wedding",
    "payment_tests": [
      {
        "test": "payment_count",
        "preference": "Monthly installments",
        "expected": 3,
        "actual": 3,
        "status": "PASS"
      }
    ]
  },
  {
    "client_id": "WED2025002",
    "scenario": "Photography-Only Destination Wedding",
    "payment_tests": [
      {
        "test": "payment_count",
        "preference": "Two payments",
        "expected": 2,
        "actual": 2,
        "status": "PASS"
      }
    ]
  },
  {
    "client_id": "WED2025003",
    "scenario": "DJ-Only Budget Wedding",
    "payment_tests": [
      {
        "test": "payment_count",
        "preference": "Two payments",
        "expected": 2,
        "actual": 2,
        "status": "PASS"
      }
    ]
  },
  {
    "client_id": "WED2025004",
    "scenario": "Photography + Videography (No DJ)",
    "payment_tests": [
      {
        "test": "payment_count",
        "preference": "Three payments",
        "expected": 3,
        "actual": 3,
        "status": "PASS"
      }
    ]
  },
  {
    "client_id": "WED2025005",
    "scenario": "Last-Minute Wedding (Edge Case)",
    "payment_tests": [
      {
        "test": "payment_count",
        "preference": "Lump sum",
        "expected": 1,
        "actual": 1,
        "status": "PASS"
      }
    ]
  }
]
```

## Contract Generation

```json
[
  {
    "client_id": "WED2025001",
    "scenario": "Full Package Premium Wedding",
    "contract_tests": [
      {
        "test": "contract_file_exists",
        "status": "PASS",
        "file": "/home/ubuntu/wedding_workflow_test/contracts/WED2025001_Contract_Thompson_Richardson.md"
      },
      {
        "test": "merge_field_Client_Primary_Name",
        "expected": "Alexandra Victoria Thompson",
        "status": "PASS"
      },
      {
        "test": "merge_field_Wedding_Date",
        "expected": "2025-06-21",
        "status": "PASS"
      },
      {
        "test": "merge_field_Ceremony_Venue_Name",
        "expected": "Ritz-Carlton Laguna Niguel",
        "status": "PASS"
      }
    ]
  },
  {
    "client_id": "WED2025002",
    "scenario": "Photography-Only Destination Wedding",
    "contract_tests": [
      {
        "test": "contract_file_exists",
        "status": "PASS",
        "file": "/home/ubuntu/wedding_workflow_test/contracts/WED2025002_Contract_Martinez_Chen.md"
      },
      {
        "test": "merge_field_Client_Primary_Name",
        "expected": "Emma Rose Martinez",
        "status": "PASS"
      },
      {
        "test": "merge_field_Wedding_Date",
        "expected": "2025-08-14",
        "status": "PASS"
      },
      {
        "test": "merge_field_Ceremony_Venue_Name",
        "expected": "Scripps Seaside Forum",
        "status": "PASS"
      }
    ]
  },
  {
    "client_id": "WED2025003",
    "scenario": "DJ-Only Budget Wedding",
    "contract_tests": [
      {
        "test": "contract_file_exists",
        "status": "PASS",
        "file": "/home/ubuntu/wedding_workflow_test/contracts/WED2025003_Contract_Parker_Mitchell.md"
      },
      {
        "test": "merge_field_Client_Primary_Name",
        "expected": "Jessica Lynn Parker",
        "status": "PASS"
      },
      {
        "test": "merge_field_Wedding_Date",
        "expected": "2025-05-17",
        "status": "PASS"
      },
      {
        "test": "merge_field_Ceremony_Venue_Name",
        "expected": "Riverside Community Center",
        "status": "PASS"
      }
    ]
  },
  {
    "client_id": "WED2025004",
    "scenario": "Photography + Videography (No DJ)",
    "contract_tests": [
      {
        "test": "contract_file_exists",
        "status": "PASS",
        "file": "/home/ubuntu/wedding_workflow_test/contracts/WED2025004_Contract_Williams_Johnson.md"
      },
      {
        "test": "merge_field_Client_Primary_Name",
        "expected": "Sophia Grace Williams",
        "status": "PASS"
      },
      {
        "test": "merge_field_Wedding_Date",
        "expected": "2025-09-06",
        "status": "PASS"
      },
      {
        "test": "merge_field_Ceremony_Venue_Name",
        "expected": "Descanso Gardens",
        "status": "PASS"
      }
    ]
  },
  {
    "client_id": "WED2025005",
    "scenario": "Last-Minute Wedding (Edge Case)",
    "contract_tests": [
      {
        "test": "contract_file_exists",
        "status": "PASS",
        "file": "/home/ubuntu/wedding_workflow_test/contracts/WED2025005_Contract_Davis_Brown.md"
      },
      {
        "test": "merge_field_Client_Primary_Name",
        "expected": "Ashley Nicole Davis",
        "status": "PASS"
      },
      {
        "test": "merge_field_Wedding_Date",
        "expected": "2025-02-14",
        "status": "PASS"
      },
      {
        "test": "merge_field_Ceremony_Venue_Name",
        "expected": "Santa Monica Pier",
        "status": "PASS"
      }
    ]
  }
]
```

## Integration Tests

```json
[
  {
    "client_id": "WED2025001",
    "scenario": "Full Package Premium Wedding",
    "workflow_tests": [
      {
        "test": "form_to_sheet_integration",
        "status": "PASS"
      },
      {
        "test": "pricing_calculation_integration",
        "status": "PASS"
      },
      {
        "test": "dashboard_integration",
        "status": "PASS"
      }
    ]
  },
  {
    "client_id": "WED2025002",
    "scenario": "Photography-Only Destination Wedding",
    "workflow_tests": [
      {
        "test": "form_to_sheet_integration",
        "status": "PASS"
      },
      {
        "test": "pricing_calculation_integration",
        "status": "PASS"
      },
      {
        "test": "dashboard_integration",
        "status": "PASS"
      }
    ]
  },
  {
    "client_id": "WED2025003",
    "scenario": "DJ-Only Budget Wedding",
    "workflow_tests": [
      {
        "test": "form_to_sheet_integration",
        "status": "PASS"
      },
      {
        "test": "pricing_calculation_integration",
        "status": "PASS"
      },
      {
        "test": "dashboard_integration",
        "status": "PASS"
      }
    ]
  },
  {
    "client_id": "WED2025004",
    "scenario": "Photography + Videography (No DJ)",
    "workflow_tests": [
      {
        "test": "form_to_sheet_integration",
        "status": "PASS"
      },
      {
        "test": "pricing_calculation_integration",
        "status": "PASS"
      },
      {
        "test": "dashboard_integration",
        "status": "PASS"
      }
    ]
  },
  {
    "client_id": "WED2025005",
    "scenario": "Last-Minute Wedding (Edge Case)",
    "workflow_tests": [
      {
        "test": "form_to_sheet_integration",
        "status": "PASS"
      },
      {
        "test": "pricing_calculation_integration",
        "status": "PASS"
      },
      {
        "test": "dashboard_integration",
        "status": "PASS"
      }
    ]
  }
]
```

## Error Handling

```json
[
  {
    "case": "invalid_email",
    "test": "Email without @ symbol",
    "expected": "FAIL",
    "status": "PASS"
  },
  {
    "case": "past_wedding_date",
    "test": "Wedding date in the past",
    "expected": "FAIL",
    "status": "PASS"
  },
  {
    "case": "zero_guest_count",
    "test": "Zero guest count",
    "expected": "FAIL",
    "status": "PASS"
  },
  {
    "case": "negative_budget",
    "test": "Negative budget amount",
    "expected": "FAIL",
    "status": "PASS"
  }
]
```


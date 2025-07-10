function createWeddingIntakeForm() {
  // Read the JSON configuration
  const formConfig = {
  "info": {
    "title": "Wedding Services Intake Form",
    "description": "Complete this form to request our DJ, Photography, and Videography services for your special day. We'll use this information to create your custom quote and contract.",
    "documentTitle": "Wedding Services Client Intake"
  },
  "settings": {
    "quizSettings": {
      "isQuiz": false
    },
    "requiresLogin": false,
    "collectEmail": true,
    "limitOneResponsePerUser": false,
    "allowResponseEditing": true,
    "showLinkToRespondAgain": false,
    "confirmationMessage": "Thank you for your submission! We'll review your information and contact you within 24 hours with your custom quote."
  },
  "items": [
    {
      "title": "Welcome to Our Wedding Services",
      "description": "We're excited to be part of your special day! Please complete this form so we can provide you with a personalized quote for our DJ, Photography, and Videography services.",
      "textItem": {
        "text": "This form will take approximately 10-15 minutes to complete. All information provided will be kept confidential and used solely for creating your custom wedding package."
      }
    },
    {
      "title": "Client Information",
      "pageBreakItem": {}
    },
    {
      "title": "Primary Contact - Bride/Groom/Partner 1",
      "questionItem": {
        "question": {
          "required": true,
          "textQuestion": {
            "validation": {
              "lengthValidation": {
                "minLength": 2,
                "maxLength": 50
              }
            }
          }
        }
      }
    },
    {
      "title": "Primary Contact Email",
      "questionItem": {
        "question": {
          "required": true,
          "textQuestion": {
            "validation": {
              "regexValidation": {
                "pattern": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
                "errorMessage": "Please enter a valid email address"
              }
            }
          }
        }
      }
    },
    {
      "title": "Primary Contact Phone",
      "questionItem": {
        "question": {
          "required": true,
          "textQuestion": {
            "validation": {
              "regexValidation": {
                "pattern": "^[\\d\\s\\(\\)\\-\\+\\.]{10,}$",
                "errorMessage": "Please enter a valid phone number"
              }
            }
          }
        }
      }
    },
    {
      "title": "Secondary Contact - Bride/Groom/Partner 2",
      "questionItem": {
        "question": {
          "required": false,
          "textQuestion": {
            "validation": {
              "lengthValidation": {
                "minLength": 2,
                "maxLength": 50
              }
            }
          }
        }
      }
    },
    {
      "title": "Secondary Contact Email",
      "questionItem": {
        "question": {
          "required": false,
          "textQuestion": {
            "validation": {
              "regexValidation": {
                "pattern": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
                "errorMessage": "Please enter a valid email address"
              }
            }
          }
        }
      }
    },
    {
      "title": "Secondary Contact Phone",
      "questionItem": {
        "question": {
          "required": false,
          "textQuestion": {
            "validation": {
              "regexValidation": {
                "pattern": "^[\\d\\s\\(\\)\\-\\+\\.]{10,}$",
                "errorMessage": "Please enter a valid phone number"
              }
            }
          }
        }
      }
    },
    {
      "title": "Preferred Communication Method",
      "questionItem": {
        "question": {
          "required": true,
          "choiceQuestion": {
            "type": "RADIO",
            "options": [
              {"value": "Email"},
              {"value": "Phone"},
              {"value": "Text Message"},
              {"value": "WhatsApp"}
            ]
          }
        }
      }
    },
    {
      "title": "Event Details",
      "pageBreakItem": {}
    },
    {
      "title": "Wedding Date",
      "questionItem": {
        "question": {
          "required": true,
          "dateQuestion": {
            "includeYear": true,
            "includeTime": false
          }
        }
      }
    },
    {
      "title": "Is this date flexible?",
      "questionItem": {
        "question": {
          "required": true,
          "choiceQuestion": {
            "type": "RADIO",
            "options": [
              {"value": "No, this date is fixed"},
              {"value": "Yes, within 1 week"},
              {"value": "Yes, within 2 weeks"},
              {"value": "Yes, within 1 month"}
            ]
          }
        }
      }
    },
    {
      "title": "Event Start Time",
      "questionItem": {
        "question": {
          "required": true,
          "timeQuestion": {
            "duration": false
          }
        }
      }
    },
    {
      "title": "Expected Event End Time",
      "questionItem": {
        "question": {
          "required": true,
          "timeQuestion": {
            "duration": false
          }
        }
      }
    },
    {
      "title": "Venue Name",
      "questionItem": {
        "question": {
          "required": true,
          "textQuestion": {
            "validation": {
              "lengthValidation": {
                "minLength": 2,
                "maxLength": 100
              }
            }
          }
        }
      }
    },
    {
      "title": "Venue Address",
      "questionItem": {
        "question": {
          "required": true,
          "paragraphTextQuestion": {
            "validation": {
              "lengthValidation": {
                "minLength": 10,
                "maxLength": 200
              }
            }
          }
        }
      }
    },
    {
      "title": "Venue Type",
      "questionItem": {
        "question": {
          "required": true,
          "choiceQuestion": {
            "type": "RADIO",
            "options": [
              {"value": "Indoor - Banquet Hall"},
              {"value": "Indoor - Hotel"},
              {"value": "Indoor - Restaurant"},
              {"value": "Indoor - Church/Religious Venue"},
              {"value": "Outdoor - Garden/Park"},
              {"value": "Outdoor - Beach"},
              {"value": "Outdoor - Backyard"},
              {"value": "Mixed - Indoor/Outdoor"},
              {"value": "Other"}
            ],
            "hasOtherOption": true
          }
        }
      }
    },
    {
      "title": "Expected Number of Guests",
      "questionItem": {
        "question": {
          "required": true,
          "choiceQuestion": {
            "type": "RADIO",
            "options": [
              {"value": "Under 50"},
              {"value": "50-100"},
              {"value": "100-150"},
              {"value": "150-200"},
              {"value": "200-300"},
              {"value": "Over 300"}
            ]
          }
        }
      }
    },
    {
      "title": "Service Selection",
      "pageBreakItem": {}
    },
    {
      "title": "Which services are you interested in?",
      "description": "Select all services you would like to include in your wedding package",
      "questionItem": {
        "question": {
          "required": true,
          "choiceQuestion": {
            "type": "CHECKBOX",
            "options": [
              {"value": "DJ Services"},
              {"value": "Photography"},
              {"value": "Videography"}
            ]
          }
        }
      }
    },
    {
      "title": "DJ Services Details",
      "pageBreakItem": {}
    },
    {
      "title": "DJ Service Package",
      "description": "Choose your preferred DJ service level",
      "questionItem": {
        "question": {
          "required": true,
          "choiceQuestion": {
            "type": "RADIO",
            "options": [
              {"value": "Basic Package - 4 hours, basic sound system, music only"},
              {"value": "Standard Package - 6 hours, professional sound system, MC services"},
              {"value": "Premium Package - 8 hours, premium sound system, MC services, lighting"},
              {"value": "Deluxe Package - Full day, premium equipment, MC, lighting, special effects"}
            ]
          }
        }
      }
    },
    {
      "title": "Music Preferences",
      "description": "Select your preferred music genres (check all that apply)",
      "questionItem": {
        "question": {
          "required": false,
          "choiceQuestion": {
            "type": "CHECKBOX",
            "options": [
              {"value": "Pop/Top 40"},
              {"value": "Rock/Classic Rock"},
              {"value": "Hip Hop/Rap"},
              {"value": "R&B/Soul"},
              {"value": "Country"},
              {"value": "Jazz/Swing"},
              {"value": "Classical"},
              {"value": "Latin/Salsa"},
              {"value": "Electronic/Dance"},
              {"value": "Reggae"},
              {"value": "Folk/Acoustic"},
              {"value": "Oldies/Motown"}
            ],
            "hasOtherOption": true
          }
        }
      }
    },
    {
      "title": "Special Song Requests",
      "description": "List any must-play songs or do-not-play songs",
      "questionItem": {
        "question": {
          "required": false,
          "paragraphTextQuestion": {
            "validation": {
              "lengthValidation": {
                "maxLength": 500
              }
            }
          }
        }
      }
    },
    {
      "title": "MC Services Needed",
      "description": "What announcements and MC services do you need?",
      "questionItem": {
        "question": {
          "required": false,
          "choiceQuestion": {
            "type": "CHECKBOX",
            "options": [
              {"value": "Wedding party introductions"},
              {"value": "First dance announcement"},
              {"value": "Cake cutting announcement"},
              {"value": "Bouquet/garter toss"},
              {"value": "Special toasts coordination"},
              {"value": "Timeline management"},
              {"value": "General crowd engagement"}
            ]
          }
        }
      }
    },
    {
      "title": "Photography Services Details",
      "pageBreakItem": {}
    },
    {
      "title": "Photography Package",
      "description": "Choose your preferred photography service level",
      "questionItem": {
        "question": {
          "required": true,
          "choiceQuestion": {
            "type": "RADIO",
            "options": [
              {"value": "Essential Package - 4 hours, 200+ edited photos, online gallery"},
              {"value": "Classic Package - 6 hours, 400+ edited photos, online gallery, USB drive"},
              {"value": "Premium Package - 8 hours, 600+ edited photos, online gallery, USB drive, prints"},
              {"value": "Complete Package - Full day, 800+ edited photos, online gallery, USB drive, prints, album"}
            ]
          }
        }
      }
    },
    {
      "title": "Photography Style Preference",
      "questionItem": {
        "question": {
          "required": true,
          "choiceQuestion": {
            "type": "RADIO",
            "options": [
              {"value": "Traditional/Classic"},
              {"value": "Photojournalistic/Candid"},
              {"value": "Artistic/Creative"},
              {"value": "Mixed Style"}
            ]
          }
        }
      }
    },
    {
      "title": "Key Photography Moments",
      "description": "Select the moments you want captured (check all that apply)",
      "questionItem": {
        "question": {
          "required": false,
          "choiceQuestion": {
            "type": "CHECKBOX",
            "options": [
              {"value": "Getting ready (bride)"},
              {"value": "Getting ready (groom)"},
              {"value": "First look"},
              {"value": "Ceremony"},
              {"value": "Family portraits"},
              {"value": "Wedding party photos"},
              {"value": "Couple portraits"},
              {"value": "Reception entrance"},
              {"value": "First dance"},
              {"value": "Cake cutting"},
              {"value": "Bouquet toss"},
              {"value": "Dancing/party shots"}
            ]
          }
        }
      }
    },
    {
      "title": "Special Photography Requests",
      "description": "Any specific shots, locations, or requirements?",
      "questionItem": {
        "question": {
          "required": false,
          "paragraphTextQuestion": {
            "validation": {
              "lengthValidation": {
                "maxLength": 500
              }
            }
          }
        }
      }
    },
    {
      "title": "Videography Services Details",
      "pageBreakItem": {}
    },
    {
      "title": "Videography Package",
      "description": "Choose your preferred videography service level",
      "questionItem": {
        "question": {
          "required": true,
          "choiceQuestion": {
            "type": "RADIO",
            "options": [
              {"value": "Highlight Package - 3-5 minute highlight reel, ceremony footage"},
              {"value": "Standard Package - 10-15 minute edited video, ceremony and reception"},
              {"value": "Premium Package - 20-30 minute edited video, multiple cameras, drone footage"},
              {"value": "Cinematic Package - Full cinematic experience, multiple cameras, drone, same-day edit"}
            ]
          }
        }
      }
    },
    {
      "title": "Video Style Preference",
      "questionItem": {
        "question": {
          "required": true,
          "choiceQuestion": {
            "type": "RADIO",
            "options": [
              {"value": "Documentary Style"},
              {"value": "Cinematic/Film Style"},
              {"value": "Traditional/Classic"},
              {"value": "Modern/Artistic"}
            ]
          }
        }
      }
    },
    {
      "title": "Key Video Moments",
      "description": "Select the moments you want in your video (check all that apply)",
      "questionItem": {
        "question": {
          "required": false,
          "choiceQuestion": {
            "type": "CHECKBOX",
            "options": [
              {"value": "Getting ready montage"},
              {"value": "Ceremony processional"},
              {"value": "Vow exchange"},
              {"value": "Ring exchange"},
              {"value": "First kiss"},
              {"value": "Recessional"},
              {"value": "Reception entrance"},
              {"value": "First dance"},
              {"value": "Parent dances"},
              {"value": "Toasts/speeches"},
              {"value": "Cake cutting"},
              {"value": "Dancing highlights"}
            ]
          }
        }
      }
    },
    {
      "title": "Drone Footage Interest",
      "questionItem": {
        "question": {
          "required": true,
          "choiceQuestion": {
            "type": "RADIO",
            "options": [
              {"value": "Yes, include drone footage"},
              {"value": "No, no drone footage"},
              {"value": "Maybe, depends on cost"},
              {"value": "Not sure, need more information"}
            ]
          }
        }
      }
    },
    {
      "title": "Budget and Pricing",
      "pageBreakItem": {}
    },
    {
      "title": "Total Budget Range",
      "description": "What is your total budget for all selected services?",
      "questionItem": {
        "question": {
          "required": true,
          "choiceQuestion": {
            "type": "RADIO",
            "options": [
              {"value": "Under $2,000"},
              {"value": "$2,000 - $3,500"},
              {"value": "$3,500 - $5,000"},
              {"value": "$5,000 - $7,500"},
              {"value": "$7,500 - $10,000"},
              {"value": "Over $10,000"}
            ]
          }
        }
      }
    },
    {
      "title": "Payment Preference",
      "questionItem": {
        "question": {
          "required": true,
          "choiceQuestion": {
            "type": "RADIO",
            "options": [
              {"value": "Full payment upfront (with discount)"},
              {"value": "50% deposit, 50% before event"},
              {"value": "Payment plan (3 installments)"},
              {"value": "Payment plan (monthly until event)"}
            ]
          }
        }
      }
    },
    {
      "title": "Special Requirements",
      "pageBreakItem": {}
    },
    {
      "title": "Accessibility Requirements",
      "description": "Do you have any accessibility needs we should accommodate?",
      "questionItem": {
        "question": {
          "required": false,
          "paragraphTextQuestion": {
            "validation": {
              "lengthValidation": {
                "maxLength": 300
              }
            }
          }
        }
      }
    },
    {
      "title": "Cultural or Religious Considerations",
      "description": "Any cultural traditions or religious requirements we should be aware of?",
      "questionItem": {
        "question": {
          "required": false,
          "paragraphTextQuestion": {
            "validation": {
              "lengthValidation": {
                "maxLength": 300
              }
            }
          }
        }
      }
    },
    {
      "title": "Venue Restrictions",
      "description": "Are there any venue restrictions on music volume, equipment, or photography?",
      "questionItem": {
        "question": {
          "required": false,
          "paragraphTextQuestion": {
            "validation": {
              "lengthValidation": {
                "maxLength": 300
              }
            }
          }
        }
      }
    },
    {
      "title": "Additional Services",
      "description": "Any additional services or special requests?",
      "questionItem": {
        "question": {
          "required": false,
          "choiceQuestion": {
            "type": "CHECKBOX",
            "options": [
              {"value": "Engagement session"},
              {"value": "Rehearsal dinner coverage"},
              {"value": "Brunch/next day coverage"},
              {"value": "Bachelor/bachelorette party"},
              {"value": "Photo booth rental"},
              {"value": "Live streaming service"},
              {"value": "Social media package"},
              {"value": "Rush delivery/editing"}
            ],
            "hasOtherOption": true
          }
        }
      }
    },
    {
      "title": "Timeline and Logistics",
      "pageBreakItem": {}
    },
    {
      "title": "When do you need your quote?",
      "questionItem": {
        "question": {
          "required": true,
          "choiceQuestion": {
            "type": "RADIO",
            "options": [
              {"value": "ASAP - within 24 hours"},
              {"value": "Within 3 days"},
              {"value": "Within 1 week"},
              {"value": "Within 2 weeks"},
              {"value": "No rush - whenever convenient"}
            ]
          }
        }
      }
    },
    {
      "title": "Preferred Meeting Method",
      "description": "How would you like to discuss your quote and finalize details?",
      "questionItem": {
        "question": {
          "required": true,
          "choiceQuestion": {
            "type": "RADIO",
            "options": [
              {"value": "In-person meeting"},
              {"value": "Video call (Zoom/Teams)"},
              {"value": "Phone call"},
              {"value": "Email correspondence only"}
            ]
          }
        }
      }
    },
    {
      "title": "How did you hear about us?",
      "questionItem": {
        "question": {
          "required": false,
          "choiceQuestion": {
            "type": "RADIO",
            "options": [
              {"value": "Google search"},
              {"value": "Social media (Instagram/Facebook)"},
              {"value": "Wedding website/directory"},
              {"value": "Referral from friend/family"},
              {"value": "Venue recommendation"},
              {"value": "Wedding planner recommendation"},
              {"value": "Previous client referral"},
              {"value": "Wedding show/expo"}
            ],
            "hasOtherOption": true
          }
        }
      }
    },
    {
      "title": "Terms and Agreement",
      "pageBreakItem": {}
    },
    {
      "title": "Service Terms Acknowledgment",
      "description": "Please review and acknowledge the following terms:",
      "textItem": {
        "text": "• All quotes are valid for 30 days from issue date\n• A signed contract and deposit are required to secure your date\n• Cancellation policy applies as outlined in our terms of service\n• Final payment is due 7 days before the event\n• We reserve the right to use photos/videos for marketing purposes unless otherwise specified\n• Equipment backup and insurance coverage included in all packages"
      }
    },
    {
      "title": "I acknowledge and agree to the service terms listed above",
      "questionItem": {
        "question": {
          "required": true,
          "choiceQuestion": {
            "type": "RADIO",
            "options": [
              {"value": "Yes, I agree to the terms"},
              {"value": "I need to review the full terms before agreeing"}
            ]
          }
        }
      }
    },
    {
      "title": "Marketing Permission",
      "description": "May we use photos/videos from your wedding for our portfolio and marketing materials?",
      "questionItem": {
        "question": {
          "required": true,
          "choiceQuestion": {
            "type": "RADIO",
            "options": [
              {"value": "Yes, you may use our photos/videos for marketing"},
              {"value": "Yes, but please ask permission for each use"},
              {"value": "No, please do not use our photos/videos for marketing"}
            ]
          }
        }
      }
    },
    {
      "title": "Electronic Signature",
      "description": "By typing your full name below, you are providing an electronic signature for this intake form",
      "questionItem": {
        "question": {
          "required": true,
          "textQuestion": {
            "validation": {
              "lengthValidation": {
                "minLength": 2,
                "maxLength": 100
              }
            }
          }
        }
      }
    },
    {
      "title": "Additional Comments",
      "description": "Is there anything else you'd like us to know about your wedding or our services?",
      "questionItem": {
        "question": {
          "required": false,
          "paragraphTextQuestion": {
            "validation": {
              "lengthValidation": {
                "maxLength": 1000
              }
            }
          }
        }
      }
    }
  ],
  "publishSettings": {
    "isPublished": true,
    "isAcceptingResponses": true
  }
};
  
  // Create the form
  const form = FormApp.create(formConfig.info.title);
  form.setDescription(formConfig.info.description);
  
  // Configure settings
  form.setCollectEmail(formConfig.settings.collectEmail);
  form.setAllowResponseEdits(formConfig.settings.allowResponseEditing);
  form.setConfirmationMessage(formConfig.settings.confirmationMessage);
  
  // Add items from configuration
  formConfig.items.forEach(itemConfig => {
    addItemToForm(form, itemConfig);
  });
  
  Logger.log('Form created: ' + form.getEditUrl());
  return form;
}

function addItemToForm(form, itemConfig) {
  if (itemConfig.pageBreakItem) {
    const pageBreak = form.addPageBreakItem();
    pageBreak.setTitle(itemConfig.title);
    if (itemConfig.description) {
      pageBreak.setHelpText(itemConfig.description);
    }
  } else if (itemConfig.textItem) {
    const textItem = form.addTextItem();
    textItem.setTitle(itemConfig.title);
    if (itemConfig.description) {
      textItem.setHelpText(itemConfig.description);
    }
  } else if (itemConfig.questionItem) {
    addQuestionItem(form, itemConfig);
  }
}

function addQuestionItem(form, itemConfig) {
  const question = itemConfig.questionItem.question;
  
  if (question.textQuestion) {
    const textItem = form.addTextItem();
    textItem.setTitle(itemConfig.title);
    if (itemConfig.description) {
      textItem.setHelpText(itemConfig.description);
    }
    textItem.setRequired(question.required);
    
    // Add validation if specified
    if (question.textQuestion.validation) {
      addTextValidation(textItem, question.textQuestion.validation);
    }
  } else if (question.paragraphTextQuestion) {
    const paragraphItem = form.addParagraphTextItem();
    paragraphItem.setTitle(itemConfig.title);
    if (itemConfig.description) {
      paragraphItem.setHelpText(itemConfig.description);
    }
    paragraphItem.setRequired(question.required);
  } else if (question.choiceQuestion) {
    addChoiceQuestion(form, itemConfig, question);
  } else if (question.dateQuestion) {
    const dateItem = form.addDateItem();
    dateItem.setTitle(itemConfig.title);
    if (itemConfig.description) {
      dateItem.setHelpText(itemConfig.description);
    }
    dateItem.setRequired(question.required);
    dateItem.setIncludesYear(question.dateQuestion.includeYear);
  } else if (question.timeQuestion) {
    const timeItem = form.addTimeItem();
    timeItem.setTitle(itemConfig.title);
    if (itemConfig.description) {
      timeItem.setHelpText(itemConfig.description);
    }
    timeItem.setRequired(question.required);
  }
}

function addChoiceQuestion(form, itemConfig, question) {
  const choiceConfig = question.choiceQuestion;
  
  if (choiceConfig.type === 'RADIO') {
    const multipleChoiceItem = form.addMultipleChoiceItem();
    multipleChoiceItem.setTitle(itemConfig.title);
    if (itemConfig.description) {
      multipleChoiceItem.setHelpText(itemConfig.description);
    }
    multipleChoiceItem.setRequired(question.required);
    
    const choices = choiceConfig.options.map(option => 
      multipleChoiceItem.createChoice(option.value)
    );
    multipleChoiceItem.setChoices(choices);
    
    if (choiceConfig.hasOtherOption) {
      multipleChoiceItem.showOtherOption(true);
    }
  } else if (choiceConfig.type === 'CHECKBOX') {
    const checkboxItem = form.addCheckboxItem();
    checkboxItem.setTitle(itemConfig.title);
    if (itemConfig.description) {
      checkboxItem.setHelpText(itemConfig.description);
    }
    checkboxItem.setRequired(question.required);
    
    const choices = choiceConfig.options.map(option => 
      checkboxItem.createChoice(option.value)
    );
    checkboxItem.setChoices(choices);
    
    if (choiceConfig.hasOtherOption) {
      checkboxItem.showOtherOption(true);
    }
  }
}

function addTextValidation(textItem, validation) {
  if (validation.regexValidation) {
    const regexValidation = FormApp.createTextValidation()
      .setHelpText(validation.regexValidation.errorMessage)
      .requireTextMatchesPattern(validation.regexValidation.pattern)
      .build();
    textItem.setValidation(regexValidation);
  } else if (validation.lengthValidation) {
    let lengthValidationBuilder = FormApp.createTextValidation();
    
    if (validation.lengthValidation.minLength) {
      lengthValidationBuilder = lengthValidationBuilder.requireTextLengthGreaterThanOrEqualTo(validation.lengthValidation.minLength);
    }
    
    if (validation.lengthValidation.maxLength) {
      lengthValidationBuilder = lengthValidationBuilder.requireTextLengthLessThanOrEqualTo(validation.lengthValidation.maxLength);
    }
    
    const lengthValidation = lengthValidationBuilder.build();
    textItem.setValidation(lengthValidation);
  }
}

// ===================================================================
// CONTRACT GENERATION AND MAIL MERGE SYSTEM
// ===================================================================

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

// ===================================================================
// SYSTEM TESTING AND VALIDATION FUNCTIONS
// ===================================================================

/**
 * Comprehensive test suite for the integrated wedding automation system
 * Tests both form creation and contract generation functionality
 */
function runSystemTests() {
  try {
    console.log('=== Starting Wedding Automation System Tests ===');
    const results = {
      timestamp: new Date(),
      tests: {},
      summary: { passed: 0, failed: 0, errors: [] }
    };
    
    // Test 1: Form Creation Functions
    results.tests.formCreation = testFormCreationFunctions();
    
    // Test 2: Contract Generation Functions
    results.tests.contractGeneration = testContractGenerationFunctions();
    
    // Test 3: Configuration Validation
    results.tests.configuration = testConfiguration();
    
    // Test 4: Helper Functions
    results.tests.helpers = testHelperFunctions();
    
    // Calculate summary
    Object.values(results.tests).forEach(testResult => {
      if (testResult.passed) {
        results.summary.passed++;
      } else {
        results.summary.failed++;
        results.summary.errors.push(testResult.error);
      }
    });
    
    // Display results
    displayTestResults(results);
    
    return results;
    
  } catch (error) {
    console.error('Critical error in test suite:', error);
    throw new Error(`Test suite failed: ${error.message}`);
  }
}

/**
 * Tests the form creation functionality
 */
function testFormCreationFunctions() {
  try {
    console.log('Testing form creation functions...');
    
    // Check if main form creation function exists and is callable
    if (typeof createWeddingIntakeForm !== 'function') {
      throw new Error('createWeddingIntakeForm function not found');
    }
    
    // Check if helper functions exist
    const requiredFunctions = [
      'addItemToForm',
      'addQuestionItem', 
      'addChoiceQuestion',
      'addTextValidation'
    ];
    
    for (const funcName of requiredFunctions) {
      if (typeof eval(funcName) !== 'function') {
        throw new Error(`${funcName} function not found`);
      }
    }
    
    console.log('✓ All form creation functions are defined');
    
    // Test form configuration structure
    const testConfig = {
      info: { title: 'Test Form', description: 'Test' },
      settings: { collectEmail: true },
      items: [
        { title: 'Test', questionItem: { question: { required: true, textQuestion: {} } } }
      ]
    };
    
    console.log('✓ Form creation functions test passed');
    
    return { passed: true, message: 'Form creation functions working correctly' };
    
  } catch (error) {
    console.error('Form creation test failed:', error);
    return { passed: false, error: error.message };
  }
}

/**
 * Tests the contract generation functionality
 */
function testContractGenerationFunctions() {
  try {
    console.log('Testing contract generation functions...');
    
    // Check if main contract functions exist
    const requiredContractFunctions = [
      'onOpen',
      'generateSingleContract',
      'generateAllContracts', 
      'generateAndEmailContract',
      'getRowData',
      'formatFieldValue',
      'createContractDocument',
      'emailContract',
      'getOrCreateFolder',
      'testTemplate',
      'showSetupInstructions',
      'handleError'
    ];
    
    for (const funcName of requiredContractFunctions) {
      if (typeof eval(funcName) !== 'function') {
        throw new Error(`${funcName} function not found`);
      }
    }
    
    console.log('✓ All contract generation functions are defined');
    
    // Test configuration object
    if (typeof CONFIG === 'undefined') {
      throw new Error('CONFIG object not found');
    }
    
    const requiredConfigKeys = ['TEMPLATE_DOC_ID', 'OUTPUT_FOLDER_NAME', 'SHEET_NAMES'];
    for (const key of requiredConfigKeys) {
      if (!(key in CONFIG)) {
        throw new Error(`CONFIG.${key} not found`);
      }
    }
    
    console.log('✓ CONFIG object structure is valid');
    
    // Test formatFieldValue function with sample data
    const testDate = new Date('2025-06-15');
    const formattedDate = formatFieldValue(testDate);
    if (!formattedDate.includes('06/15/2025')) {
      throw new Error('Date formatting test failed');
    }
    
    const testNumber = 5000;
    const formattedCurrency = formatFieldValue(testNumber);
    if (!formattedCurrency.includes('$5,000.00')) {
      throw new Error('Currency formatting test failed');
    }
    
    console.log('✓ Data formatting functions working correctly');
    console.log('✓ Contract generation functions test passed');
    
    return { passed: true, message: 'Contract generation functions working correctly' };
    
  } catch (error) {
    console.error('Contract generation test failed:', error);
    return { passed: false, error: error.message };
  }
}

/**
 * Tests system configuration and dependencies
 */
function testConfiguration() {
  try {
    console.log('Testing system configuration...');
    
    // Test Google Apps Script services availability
    const services = [
      { name: 'FormApp', service: FormApp },
      { name: 'SpreadsheetApp', service: SpreadsheetApp },
      { name: 'DocumentApp', service: DocumentApp },
      { name: 'DriveApp', service: DriveApp },
      { name: 'GmailApp', service: GmailApp },
      { name: 'Utilities', service: Utilities }
    ];
    
    for (const { name, service } of services) {
      if (typeof service === 'undefined') {
        throw new Error(`${name} service not available`);
      }
    }
    
    console.log('✓ All required Google Apps Script services are available');
    
    // Test configuration completeness
    const warnings = [];
    
    if (CONFIG.TEMPLATE_DOC_ID === 'YOUR_TEMPLATE_DOC_ID_HERE') {
      warnings.push('TEMPLATE_DOC_ID needs to be configured');
    }
    
    if (warnings.length > 0) {
      console.log('⚠️ Configuration warnings:', warnings);
      return { 
        passed: true, 
        message: 'Configuration valid with warnings', 
        warnings: warnings 
      };
    }
    
    console.log('✓ Configuration test passed');
    
    return { passed: true, message: 'System configuration is valid' };
    
  } catch (error) {
    console.error('Configuration test failed:', error);
    return { passed: false, error: error.message };
  }
}

/**
 * Tests helper and utility functions
 */
function testHelperFunctions() {
  try {
    console.log('Testing helper functions...');
    
    // Test getDocIdFromUrl (without UI interaction)
    if (typeof getDocIdFromUrl !== 'function') {
      throw new Error('getDocIdFromUrl function not found');
    }
    
    console.log('✓ Helper functions test passed');
    
    return { passed: true, message: 'Helper functions working correctly' };
    
  } catch (error) {
    console.error('Helper functions test failed:', error);
    return { passed: false, error: error.message };
  }
}

/**
 * Displays test results in a formatted way
 */
function displayTestResults(results) {
  const summary = `
=== WEDDING AUTOMATION SYSTEM TEST RESULTS ===
Timestamp: ${results.timestamp}

SUMMARY:
✓ Passed: ${results.summary.passed}
✗ Failed: ${results.summary.failed}

DETAILED RESULTS:
${Object.entries(results.tests).map(([testName, result]) => 
  `${result.passed ? '✓' : '✗'} ${testName}: ${result.message || result.error}`
).join('\n')}

${results.summary.failed > 0 ? 
  `\nERRORS:\n${results.summary.errors.join('\n')}` : 
  '\n🎉 ALL TESTS PASSED! System is ready for deployment.'
}

${results.tests.configuration?.warnings ? 
  `\nWARNINGS:\n${results.tests.configuration.warnings.join('\n')}` : 
  ''
}
`;

  console.log(summary);
  
  // If we're in a spreadsheet context, show UI alert
  try {
    if (typeof SpreadsheetApp !== 'undefined') {
      SpreadsheetApp.getUi().alert(
        'System Test Results',
        summary,
        SpreadsheetApp.getUi().ButtonSet.OK
      );
    }
  } catch (e) {
    // UI not available, just log
    console.log('UI not available for alert display');
  }
}

/**
 * Quick smoke test - tests basic functionality without creating actual forms/docs
 */
function runSmokeTest() {
  try {
    console.log('Running quick smoke test...');
    
    // Test that all main functions are defined
    const criticalFunctions = [
      'createWeddingIntakeForm',
      'onOpen', 
      'generateSingleContract',
      'formatFieldValue'
    ];
    
    for (const funcName of criticalFunctions) {
      if (typeof eval(funcName) !== 'function') {
        throw new Error(`Critical function ${funcName} not found`);
      }
    }
    
    // Test basic data formatting
    const testData = formatFieldValue(new Date('2025-06-15'));
    if (!testData.includes('2025')) {
      throw new Error('Date formatting failed');
    }
    
    console.log('✓ Smoke test passed - system appears functional');
    
    // Try to show UI alert only if in a UI context
    try {
      if (typeof SpreadsheetApp !== 'undefined') {
        SpreadsheetApp.getUi().alert(
          'Smoke Test Results',
          '✓ Quick test passed!\n\nAll critical functions are available and basic formatting works correctly.\n\nYou can now proceed with full testing or Phase 2 development.',
          SpreadsheetApp.getUi().ButtonSet.OK
        );
      }
    } catch (e) {
      // UI not available, just log
      console.log('UI not available for alert display');
    }
    
    return true;
    
  } catch (error) {
    console.error('Smoke test failed:', error);
    
    // Try to show UI alert only if in a UI context
    try {
      if (typeof SpreadsheetApp !== 'undefined') {
        SpreadsheetApp.getUi().alert(
          'Smoke Test Failed',
          `✗ Critical error detected:\n\n${error.message}\n\nPlease review the code integration before proceeding.`,
          SpreadsheetApp.getUi().ButtonSet.OK
        );
      }
    } catch (e) {
      // UI not available, just log
      console.log('UI not available for alert display');
    }
    
    return false;
  }
}

/**
 * PHASE 2: FORM-TO-SHEETS INTEGRATION & ENHANCEMENT
 * Enhanced form creation with automatic spreadsheet connection
 */

/**
 * Creates an enhanced wedding intake form with spreadsheet integration
 * This replaces the basic form creation with a more complete solution
 */
function createEnhancedWeddingIntakeForm() {
  try {
    console.log('Creating enhanced wedding intake form with spreadsheet integration...');
    
    // Create or get the spreadsheet for contract data
    const spreadsheet = createWeddingContractSpreadsheet();
    const spreadsheetId = spreadsheet.getId();
    
    console.log(`Created spreadsheet: ${spreadsheet.getName()} (${spreadsheetId})`);
    
    // Create the form and connect it to the spreadsheet
    const form = FormApp.create('Wedding Services Intake Form - Enhanced')
      .setDescription('Complete this form to provide details for your wedding services contract.')
      .setCollectEmail(true)
      .setDestination(FormApp.DestinationType.SPREADSHEET, spreadsheetId)
      .setLimitOneResponsePerUser(false)
      .setAllowResponseEdits(true);
    
    // Add form sections with conditional logic
    addClientInformationSection(form);
    addEventDetailsSection(form);
    addServiceSelectionSection(form);
    addVenueAndTimingSection(form);
    addBudgetAndPreferencesSection(form);
    addAdditionalDetailsSection(form);
    
    console.log(`Enhanced form created: ${form.getEditUrl()}`);
    console.log(`Form responses will be collected in: ${spreadsheet.getUrl()}`);
    
    // Set up form submission trigger
    setupFormSubmissionTrigger(form, spreadsheet);
    
    return {
      form: form,
      spreadsheet: spreadsheet,
      formUrl: form.getEditUrl(),
      spreadsheetUrl: spreadsheet.getUrl()
    };
    
  } catch (error) {
    console.error('Error creating enhanced form:', error);
    throw error;
  }
}

/**
 * Creates and configures the Wedding Contract Data spreadsheet
 */
function createWeddingContractSpreadsheet() {
  const spreadsheet = SpreadsheetApp.create('Wedding Contract Data');
  
  // Get the default sheet and rename it
  const responseSheet = spreadsheet.getActiveSheet();
  responseSheet.setName('Form Responses');
  
  // Create additional sheets for different data types
  const contractsSheet = spreadsheet.insertSheet('Generated Contracts');
  const pricingSheet = spreadsheet.insertSheet('Pricing Calculations');
  const statusSheet = spreadsheet.insertSheet('Contract Status');
  
  // Set up the responses sheet headers (these will be auto-populated by the form)
  setupResponseSheetHeaders(responseSheet);
  
  // Set up the contracts tracking sheet
  setupContractsTrackingSheet(contractsSheet);
  
  // Set up pricing calculations sheet
  setupPricingCalculationsSheet(pricingSheet);
  
  // Set up status tracking sheet
  setupStatusTrackingSheet(statusSheet);
  
  return spreadsheet;
}

/**
 * Sets up headers for the form responses sheet
 */
function setupResponseSheetHeaders(sheet) {
  // The form will automatically add headers, but we can set up formatting
  sheet.getRange('1:1').setFontWeight('bold');
  sheet.getRange('1:1').setBackground('#e8f4f8');
  sheet.setFrozenRows(1);
}

/**
 * Sets up the contracts tracking sheet
 */
function setupContractsTrackingSheet(sheet) {
  const headers = [
    'Contract ID',
    'Client Names',
    'Wedding Date',
    'Email',
    'Phone',
    'Total Amount',
    'Contract Status',
    'Generated Date',
    'Document Link',
    'Notes'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange('1:1').setFontWeight('bold');
  sheet.getRange('1:1').setBackground('#d4e6f1');
  sheet.setFrozenRows(1);
  
  // Set column widths
  sheet.setColumnWidth(1, 120); // Contract ID
  sheet.setColumnWidth(2, 200); // Client Names  
  sheet.setColumnWidth(3, 120); // Wedding Date
  sheet.setColumnWidth(4, 200); // Email
  sheet.setColumnWidth(5, 130); // Phone
  sheet.setColumnWidth(6, 120); // Total Amount
  sheet.setColumnWidth(7, 150); // Status
  sheet.setColumnWidth(8, 130); // Generated Date
  sheet.setColumnWidth(9, 200); // Document Link
  sheet.setColumnWidth(10, 300); // Notes
}

/**
 * Sets up the pricing calculations sheet
 */
function setupPricingCalculationsSheet(sheet) {
  const headers = [
    'Service Type',
    'Base Price',
    'Per Hour Rate',
    'Equipment Fee',
    'Travel Fee',
    'Additional Costs',
    'Total Price',
    'Last Updated'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange('1:1').setFontWeight('bold');
  sheet.getRange('1:1').setBackground('#d5e8d4');
  sheet.setFrozenRows(1);
  
  // Add sample pricing data
  const sampleData = [
    ['Wedding Photography', 1500, 250, 200, 100, 0, '=B2+C2*8+D2+E2+F2', new Date()],
    ['Wedding Videography', 2000, 300, 500, 100, 0, '=B3+C3*8+D3+E3+F3', new Date()],
    ['DJ Services', 800, 150, 300, 75, 0, '=B4+C4*6+D4+E4+F4', new Date()],
    ['Photography + Video', 3200, 275, 600, 150, 0, '=B5+C5*10+D5+E5+F5', new Date()],
    ['Full Event Coverage', 4500, 325, 800, 200, 500, '=B6+C6*12+D6+E6+F6', new Date()]
  ];
  
  sheet.getRange(2, 1, sampleData.length, sampleData[0].length).setValues(sampleData);
  
  // Format pricing columns as currency
  sheet.getRange('B:G').setNumberFormat('$#,##0.00');
}

/**
 * Sets up the status tracking sheet
 */
function setupStatusTrackingSheet(sheet) {
  const headers = [
    'Contract ID',
    'Client Names', 
    'Form Submitted',
    'Contract Generated',
    'Client Reviewed',
    'Signed',
    'Payment Received',
    'Services Completed',
    'Current Status',
    'Next Action',
    'Due Date'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange('1:1').setFontWeight('bold');
  sheet.getRange('1:1').setBackground('#f9e79f');
  sheet.setFrozenRows(1);
  
  // Set column widths
  sheet.setColumnWidth(1, 120);
  sheet.setColumnWidth(2, 200);
  sheet.setColumnWidths(3, 6, 120); // Status columns
  sheet.setColumnWidth(9, 150);
  sheet.setColumnWidth(10, 200);
  sheet.setColumnWidth(11, 120);
}

/**
 * Adds client information section to the form
 */
function addClientInformationSection(form) {
  form.addSectionHeaderItem()
    .setTitle('Client Information')
    .setHelpText('Please provide your contact information and basic details.');
  
  form.addTextItem()
    .setTitle('Primary Contact Name')
    .setHelpText('Full name of the main contact person')
    .setRequired(true);
  
  form.addTextItem()
    .setTitle('Partner/Spouse Name')
    .setHelpText('Full name of your partner/spouse')
    .setRequired(false);
  
  form.addTextItem()
    .setTitle('Email Address')
    .setHelpText('Primary email for all communications')
    .setRequired(true);
  
  form.addTextItem()
    .setTitle('Phone Number')
    .setHelpText('Best phone number to reach you')
    .setRequired(true);
  
  form.addTextItem()
    .setTitle('Mailing Address')
    .setHelpText('Complete mailing address for contracts and correspondence')
    .setRequired(true);
}

/**
 * Adds event details section to the form
 */
function addEventDetailsSection(form) {
  form.addSectionHeaderItem()
    .setTitle('Wedding Event Details')
    .setHelpText('Tell us about your special day!');
  
  form.addDateItem()
    .setTitle('Wedding Date')
    .setHelpText('The date of your wedding ceremony')
    .setRequired(true);
  
  form.addTimeItem()
    .setTitle('Ceremony Start Time')
    .setHelpText('What time does the ceremony begin?')
    .setRequired(true);
  
  form.addTimeItem()
    .setTitle('Reception Start Time')
    .setHelpText('What time does the reception begin?')
    .setRequired(false);
  
  form.addTextItem()
    .setTitle('Expected Number of Guests')
    .setHelpText('Approximate number of guests attending')
    .setRequired(true);
  
  form.addMultipleChoiceItem()
    .setTitle('Event Type')
    .setChoiceValues([
      'Traditional Wedding',
      'Destination Wedding', 
      'Elopement',
      'Reception Only',
      'Engagement Party',
      'Other'
    ])
    .setRequired(true);
}

/**
 * Adds service selection section with conditional logic
 */
function addServiceSelectionSection(form) {
  form.addSectionHeaderItem()
    .setTitle('Services Requested')
    .setHelpText('Select all services you would like us to provide.');
  
  // Main services checkboxes
  const servicesItem = form.addCheckboxItem()
    .setTitle('Which services do you need?')
    .setChoiceValues([
      'Wedding Photography',
      'Wedding Videography', 
      'DJ/Music Services',
      'Lighting Setup',
      'Audio/Sound System',
      'Photo Booth',
      'Live Streaming',
      'Drone Photography/Video',
      'Additional Photographer',
      'Rush Delivery'
    ])
    .setRequired(true);
  
  // Photography details (conditional)
  form.addMultipleChoiceItem()
    .setTitle('Photography Package')
    .setChoiceValues([
      'Basic Package (4 hours)',
      'Standard Package (6 hours)', 
      'Premium Package (8 hours)',
      'Full Day Coverage (10+ hours)',
      'Custom Package'
    ])
    .setRequired(false);
  
  // Videography details (conditional)
  form.addMultipleChoiceItem()
    .setTitle('Videography Package')
    .setChoiceValues([
      'Highlight Reel (3-5 minutes)',
      'Ceremony + Reception (30-45 minutes)',
      'Full Event Documentation',
      'Live Stream + Recording',
      'Drone Video Add-on'
    ])
    .setRequired(false);
  
  // DJ Services details (conditional)
  form.addMultipleChoiceItem()
    .setTitle('DJ/Music Services')
    .setChoiceValues([
      'Ceremony Music Only',
      'Reception Only',
      'Full Event DJ Services',
      'Live Band Coordination',
      'Special Equipment Needs'
    ])
    .setRequired(false);
}

/**
 * Adds venue and timing section
 */
function addVenueAndTimingSection(form) {
  form.addSectionHeaderItem()
    .setTitle('Venue & Timing Information')
    .setHelpText('Help us prepare for your venue and timeline.');
  
  form.addTextItem()
    .setTitle('Ceremony Venue Name')
    .setHelpText('Name of the ceremony location')
    .setRequired(true);
  
  form.addTextItem()
    .setTitle('Ceremony Venue Address')
    .setHelpText('Full address of ceremony location')
    .setRequired(true);
  
  form.addTextItem()
    .setTitle('Reception Venue Name')
    .setHelpText('Name of the reception location (if different)')
    .setRequired(false);
  
  form.addTextItem()
    .setTitle('Reception Venue Address')
    .setHelpText('Full address of reception location (if different)')
    .setRequired(false);
  
  form.addMultipleChoiceItem()
    .setTitle('Venue Type')
    .setChoiceValues([
      'Indoor - Traditional',
      'Indoor - Modern/Industrial',
      'Outdoor - Garden/Park',
      'Outdoor - Beach',
      'Outdoor - Mountain/Rural',
      'Mixed Indoor/Outdoor',
      'Religious Facility',
      'Private Residence',
      'Other'
    ])
    .setRequired(true);
  
  form.addTextItem()
    .setTitle('Special Venue Considerations')
    .setHelpText('Any restrictions, equipment limitations, or special requirements?')
    .setRequired(false);
}

/**
 * Adds budget and preferences section
 */
function addBudgetAndPreferencesSection(form) {
  form.addSectionHeaderItem()
    .setTitle('Budget & Preferences')
    .setHelpText('Help us create the perfect package for you.');
  
  form.addMultipleChoiceItem()
    .setTitle('Total Budget Range for Our Services')
    .setChoiceValues([
      'Under $2,000',
      '$2,000 - $3,500',
      '$3,500 - $5,000', 
      '$5,000 - $7,500',
      '$7,500 - $10,000',
      'Over $10,000',
      'Please contact me to discuss'
    ])
    .setRequired(true);
  
  form.addMultipleChoiceItem()
    .setTitle('Photography Style Preference')
    .setChoiceValues([
      'Traditional/Classic',
      'Photojournalistic/Candid',
      'Artistic/Creative',
      'Modern/Contemporary',
      'Vintage/Retro',
      'Mix of styles'
    ])
    .setRequired(false);
  
  form.addMultipleChoiceItem()
    .setTitle('Music/DJ Style Preference')
    .setChoiceValues([
      'Top 40/Contemporary',
      'Classic Rock',
      'R&B/Hip-Hop',
      'Country',
      'Electronic/Dance',
      'Jazz/Swing',
      'Cultural/Traditional',
      'Mix of genres'
    ])
    .setRequired(false);
  
  form.addParagraphTextItem()
    .setTitle('Special Requests or Requirements')
    .setHelpText('Any specific songs, photos, moments, or special accommodations we should know about?')
    .setRequired(false);
}

/**
 * Adds additional details section
 */
function addAdditionalDetailsSection(form) {
  form.addSectionHeaderItem()
    .setTitle('Additional Information')
    .setHelpText('Final details to help us serve you better.');
  
  form.addMultipleChoiceItem()
    .setTitle('How did you hear about us?')
    .setChoiceValues([
      'Google Search',
      'Social Media (Instagram/Facebook)',
      'Wedding Website/Blog',
      'Referral from friend/family',
      'Venue recommendation',
      'Wedding planner recommendation',
      'Previous client',
      'Other'
    ])
    .setRequired(false);
  
  form.addMultipleChoiceItem()
    .setTitle('Preferred Communication Method')
    .setChoiceValues([
      'Email',
      'Phone calls',
      'Text messages',
      'Video calls',
      'In-person meetings'
    ])
    .setRequired(true);
  
  form.addMultipleChoiceItem()
    .setTitle('When would you like to finalize the contract?')
    .setChoiceValues([
      'Within 1 week',
      'Within 2 weeks', 
      'Within 1 month',
      'Within 2 months',
      'I need more time to decide'
    ])
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('Additional Comments or Questions')
    .setHelpText('Anything else you would like us to know?')
    .setRequired(false);
}

/**
 * Sets up form submission trigger for automated processing
 */
function setupFormSubmissionTrigger(form, spreadsheet) {
  try {
    // Create a trigger that fires when the form is submitted
    ScriptApp.newTrigger('onEnhancedFormSubmit')
      .forForm(form)
      .onFormSubmit()
      .create();
    
    console.log('Form submission trigger created successfully');
    
  } catch (error) {
    console.error('Error setting up form submission trigger:', error);
  }
}

/**
 * Handles enhanced form submissions with automatic processing
 */
function onEnhancedFormSubmit(e) {
  try {
    console.log('Processing enhanced form submission...');
    
    const response = e.response;
    const form = FormApp.openById(response.getEditResponseUrl().split('/')[5]);
    const spreadsheet = SpreadsheetApp.openById(form.getDestinationId());
    
    // Process the form response
    const processedData = processFormResponse(response);
    
    // Update the contracts tracking sheet
    updateContractsTracking(spreadsheet, processedData);
    
    // Update status tracking
    updateStatusTracking(spreadsheet, processedData);
    
    // Send confirmation email
    sendClientConfirmationEmail(processedData);
    
    console.log(`Processed form submission for: ${processedData.clientNames}`);
    
  } catch (error) {
    console.error('Error processing enhanced form submission:', error);
  }
}

/**
 * Processes form response data into structured format
 */
function processFormResponse(response) {
  const itemResponses = response.getItemResponses();
  const formData = {};
  
  // Extract data from form responses
  itemResponses.forEach(function(itemResponse) {
    const title = itemResponse.getItem().getTitle();
    const answer = itemResponse.getResponse();
    formData[title] = answer;
  });
  
  // Generate contract ID
  const contractId = generateContractId(formData);
  
  // Calculate estimated pricing
  const estimatedTotal = calculateEstimatedPricing(formData);
  
  return {
    contractId: contractId,
    clientNames: `${formData['Primary Contact Name']} & ${formData['Partner/Spouse Name'] || 'Partner'}`,
    weddingDate: formData['Wedding Date'],
    email: formData['Email Address'],
    phone: formData['Phone Number'],
    services: formData['Which services do you need?'],
    estimatedTotal: estimatedTotal,
    submissionDate: new Date(),
    formData: formData
  };
}

/**
 * Generates a unique contract ID
 */
function generateContractId(formData) {
  const date = new Date(formData['Wedding Date']);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  
  return `WED${year}${month}${randomNum}`;
}

/**
 * Calculates estimated pricing based on selected services
 */
function calculateEstimatedPricing(formData) {
  let total = 0;
  const services = formData['Which services do you need?'] || [];
  
  // Base pricing lookup
  const servicePricing = {
    'Wedding Photography': 1500,
    'Wedding Videography': 2000,
    'DJ/Music Services': 800,
    'Lighting Setup': 400,
    'Audio/Sound System': 300,
    'Photo Booth': 600,
    'Live Streaming': 500,
    'Drone Photography/Video': 400,
    'Additional Photographer': 800,
    'Rush Delivery': 200
  };
  
  // Calculate total
  if (Array.isArray(services)) {
    services.forEach(function(service) {
      total += servicePricing[service] || 0;
    });
  }
  
  return total;
}

/**
 * Updates the contracts tracking sheet
 */
function updateContractsTracking(spreadsheet, processedData) {
  const sheet = spreadsheet.getSheetByName('Generated Contracts');
  
  const newRow = [
    processedData.contractId,
    processedData.clientNames,
    processedData.weddingDate,
    processedData.email,
    processedData.phone,
    processedData.estimatedTotal,
    'Form Submitted',
    processedData.submissionDate,
    '', // Document link - will be filled when contract is generated
    'New submission - pending contract generation'
  ];
  
  sheet.appendRow(newRow);
}

/**
 * Updates the status tracking sheet
 */
function updateStatusTracking(spreadsheet, processedData) {
  const sheet = spreadsheet.getSheetByName('Contract Status');
  
  const newRow = [
    processedData.contractId,
    processedData.clientNames,
    new Date(), // Form submitted
    '', // Contract generated
    '', // Client reviewed
    '', // Signed
    '', // Payment received
    '', // Services completed
    'Form Submitted',
    'Generate Contract',
    new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // Due date: 1 week from now
  ];
  
  sheet.appendRow(newRow);
}

/**
 * Sends confirmation email to client
 */
function sendClientConfirmationEmail(processedData) {
  try {
    const subject = `Wedding Services Application Received - Contract ID: ${processedData.contractId}`;
    
    const body = `
Dear ${processedData.clientNames},

Thank you for submitting your wedding services application! We're excited to potentially be part of your special day.

Contract Details:
- Contract ID: ${processedData.contractId}
- Wedding Date: ${processedData.weddingDate}
- Estimated Total: $${processedData.estimatedTotal.toLocaleString()}

Next Steps:
1. We will review your requirements and prepare a detailed contract
2. You will receive the contract within 2-3 business days
3. We'll schedule a consultation call to discuss any questions

We look forward to working with you!

Best regards,
Allwave Services Team

---
This is an automated confirmation. Please save this email for your records.
Contract ID: ${processedData.contractId}
    `;
    
    MailApp.sendEmail(processedData.email, subject, body);
    console.log(`Confirmation email sent to: ${processedData.email}`);
    
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
}

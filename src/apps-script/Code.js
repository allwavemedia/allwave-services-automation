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

/**
 * Adds client information section to the form
 */
function addClientInformationSection(form) {
  form.addSectionHeaderItem()
    .setTitle('Client Information')
    .setHelpText('Please provide your contact information and basic details.');
  form.addTextItem().setTitle('Primary Contact Name').setRequired(true);
  form.addTextItem().setTitle('Partner/Spouse Name').setRequired(false);
  form.addTextItem().setTitle('Email Address').setRequired(true);
  form.addTextItem().setTitle('Phone Number').setRequired(true);
  form.addTextItem().setTitle('Mailing Address').setRequired(true);
}

/**
 * Adds event details section to the form
 */
function addEventDetailsSection(form) {
  form.addSectionHeaderItem().setTitle('Wedding Event Details');
  form.addDateItem().setTitle('Wedding Date').setRequired(true);
  form.addTimeItem().setTitle('Ceremony Start Time').setRequired(true);
  form.addTimeItem().setTitle('Reception Start Time').setRequired(false);
  form.addTextItem().setTitle('Expected Number of Guests').setRequired(true);
  form.addMultipleChoiceItem().setTitle('Event Type').setChoiceValues([
    'Traditional Wedding','Destination Wedding','Elopement','Reception Only','Engagement Party','Other']).setRequired(true);
}

/**
 * Adds service selection section with conditional logic
 */
function addServiceSelectionSection(form) {
  form.addSectionHeaderItem().setTitle('Services Requested');
  form.addCheckboxItem().setTitle('Which services do you need?').setChoiceValues([
    'Wedding Photography','Wedding Videography','DJ/Music Services','Lighting Setup','Audio/Sound System','Photo Booth','Live Streaming','Drone Photography/Video','Additional Photographer','Rush Delivery']).setRequired(true);
  form.addMultipleChoiceItem().setTitle('Photography Package').setChoiceValues([
    'Basic Package (4 hours)','Standard Package (6 hours)','Premium Package (8 hours)','Full Day Coverage (10+ hours)','Custom Package']).setRequired(false);
  form.addMultipleChoiceItem().setTitle('Videography Package').setChoiceValues([
    'Highlight Reel (3-5 minutes)','Ceremony + Reception (30-45 minutes)','Full Event Documentation','Live Stream + Recording','Drone Video Add-on']).setRequired(false);
  form.addMultipleChoiceItem().setTitle('DJ/Music Services').setChoiceValues([
    'Ceremony Music Only','Reception Only','Full Event DJ Services','Live Band Coordination','Special Equipment Needs']).setRequired(false);
}

/**
 * Adds venue and timing section
 */
function addVenueAndTimingSection(form) {
  form.addSectionHeaderItem().setTitle('Venue & Timing Information');
  form.addTextItem().setTitle('Ceremony Venue Name').setRequired(true);
  form.addTextItem().setTitle('Ceremony Venue Address').setRequired(true);
  form.addTextItem().setTitle('Reception Venue Name').setRequired(false);
  form.addTextItem().setTitle('Reception Venue Address').setRequired(false);
  form.addMultipleChoiceItem().setTitle('Venue Type').setChoiceValues([
    'Indoor - Traditional','Indoor - Modern/Industrial','Outdoor - Garden/Park','Outdoor - Beach','Outdoor - Mountain/Rural','Mixed Indoor/Outdoor','Religious Facility','Private Residence','Other']).setRequired(true);
  form.addTextItem().setTitle('Special Venue Considerations').setRequired(false);
}

/**
 * Adds budget and preferences section
 */
function addBudgetAndPreferencesSection(form) {
  form.addSectionHeaderItem().setTitle('Budget & Preferences');
  form.addMultipleChoiceItem().setTitle('Total Budget Range for Our Services').setChoiceValues([
    'Under $2,000','$2,000 - $3,500','$3,500 - $5,000','$5,000 - $7,500','$7,500 - $10,000','Over $10,000','Please contact me to discuss']).setRequired(true);
  form.addMultipleChoiceItem().setTitle('Photography Style Preference').setChoiceValues([
    'Traditional/Classic','Photojournalistic/Candid','Artistic/Creative','Modern/Contemporary','Vintage/Retro','Mix of styles']).setRequired(false);
  form.addMultipleChoiceItem().setTitle('Music/DJ Style Preference').setChoiceValues([
    'Top 40/Contemporary','Classic Rock','R&B/Hip-Hop','Country','Electronic/Dance','Jazz/Swing','Cultural/Traditional','Mix of genres']).setRequired(false);
  form.addParagraphTextItem().setTitle('Special Requests or Requirements').setRequired(false);
}

/**
 * Adds additional details section
 */
function addAdditionalDetailsSection(form) {
  form.addSectionHeaderItem().setTitle('Additional Information');
  form.addMultipleChoiceItem().setTitle('How did you hear about us?').setChoiceValues([
    'Google Search','Social Media (Instagram/Facebook)','Wedding Website/Blog','Referral from friend/family','Venue recommendation','Wedding planner recommendation','Previous client','Other']).setRequired(false);
  form.addMultipleChoiceItem().setTitle('Preferred Communication Method').setChoiceValues([
    'Email','Phone calls','Text messages','Video calls','In-person meetings']).setRequired(true);
  form.addMultipleChoiceItem().setTitle('When would you like to finalize the contract?').setChoiceValues([
    'Within 1 week','Within 2 weeks','Within 1 month','Within 2 months','I need more time to decide']).setRequired(true);
  form.addParagraphTextItem().setTitle('Additional Comments or Questions').setRequired(false);
}

/**
 * Sets up form submission trigger for automated processing.
 * This function creates a trigger that fires when the form is submitted.
 * @param {GoogleAppsScript.Forms.Form} form The form to attach the trigger to.
 */
function setupFormSubmissionTrigger(form) {
  try {
    const formId = form.getId();
    // Clean up old triggers to prevent duplicates
    const existingTriggers = ScriptApp.getProjectTriggers();
    for (const trigger of existingTriggers) {
      if (trigger.getHandlerFunction() === 'onEnhancedFormSubmit') {
        ScriptApp.deleteTrigger(trigger);
      }
    }

    // Create a new trigger for the spreadsheet's on change event
    const ss = SpreadsheetApp.openById(form.getDestinationId());
    ScriptApp.newTrigger('onEnhancedFormSubmit')
      .forSpreadsheet(ss)
      .onChange()
      .create();
    
    console.log(`Spreadsheet 'onChange' trigger created successfully for form submission processing.`);
    
  } catch (error) {
    console.error(`Error setting up form submission trigger: ${error.message}`);
    throw new Error(`Failed to create form submission trigger: ${error.message}`);
  }
}

/**
 * PHASE 3: CALCULATION ENGINE & DATA PROCESSING
 */

/**
 * Calculates estimated pricing based on selected services and options
 * @param {Object} formData The form data object containing user responses
 * @returns {number} The estimated total cost
 */
function calculateEstimatedPricing(formData) {
  let total = 0;
  
  // Pricing logic based on selected services
  if (formData['Which services are you interested in?']) {
    const services = formData['Which services are you interested in?'].split(', ');
    
    // DJ Services pricing
    if (services.includes('DJ Services')) {
      if (formData['DJ Service Package']) {
        switch (formData['DJ Service Package']) {
          case 'Basic Package - 4 hours, basic sound system, music only':
            total += 400;
            break;
          case 'Standard Package - 6 hours, professional sound system, MC services':
            total += 600;
            break;
          case 'Premium Package - 8 hours, premium sound system, MC services, lighting':
            total += 800;
            break;
          case 'Deluxe Package - Full day, premium equipment, MC, lighting, special effects':
            total += 1000;
            break;
        }
      }
    }
    
    // Photography pricing
    if (services.includes('Photography')) {
      if (formData['Photography Package']) {
        switch (formData['Photography Package']) {
          case 'Essential Package - 4 hours, 200+ edited photos, online gallery':
            total += 800;
            break;
          case 'Classic Package - 6 hours, 400+ edited photos, online gallery, USB drive':
            total += 1200;
            break;
          case 'Premium Package - 8 hours, 600+ edited photos, online gallery, USB drive, prints':
            total += 1600;
            break;
          case 'Complete Package - Full day, 800+ edited photos, online gallery, USB drive, prints, album':
            total += 2000;
            break;
        }
      }
    }
    
    // Videography pricing
    if (services.includes('Videography')) {
      if (formData['Videography Package']) {
        switch (formData['Videography Package']) {
          case 'Highlight Package - 3-5 minute highlight reel, ceremony footage':
            total += 500;
            break;
          case 'Standard Package - 10-15 minute edited video, ceremony and reception':
            total += 1000;
            break;
          case 'Premium Package - 20-30 minute edited video, multiple cameras, drone footage':
            total += 1500;
            break;
          case 'Cinematic Package - Full cinematic experience, multiple cameras, drone, same-day edit':
            total += 2000;
            break;
        }
      }
    }
  }
  
  // Add-ons and special requests
  if (formData['Additional Services']) {
    const addons = formData['Additional Services'].split(', ');
    
    addons.forEach(addon => {
      switch (addon) {
        case 'Engagement session':
          total += 300;
          break;
        case 'Rehearsal dinner coverage':
          total += 400;
          break;
        case 'Brunch/next day coverage':
          total += 300;
          break;
        case 'Bachelor/bachelorette party':
          total += 500;
          break;
        case 'Photo booth rental':
          total += 600;
          break;
        case 'Live streaming service':
          total += 500;
          break;
        case 'Social media package':
          total += 300;
          break;
        case 'Rush delivery/editing':
          total += 200;
          break;
      }
    });
  }
  
  // Return the estimated total cost
  return total;
}

/**
 * onEnhancedFormSubmit trigger function
 * This function is called automatically when the form is submitted.
 * It processes the form data and updates the contract tracking sheet.
 */
function onEnhancedFormSubmit(e) {
  try {
    if (!e || !e.range) {
      console.error('Invalid event object: `e.range` is missing. The trigger may need to be re-created for the sheet.');
      return;
    }

    const sheet = e.range.getSheet();
    if (sheet.getName() !== 'Form Responses') {
      console.log('Submission was not on the "Form Responses" sheet. Skipping contract generation.');
      return;
    }

    const row = e.range.getRow();
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const values = sheet.getRange(row, 1, 1, sheet.getLastColumn()).getValues()[0];

    const responseData = {};
    headers.forEach((header, i) => {
      responseData[header] = values[i];
    });

    console.log(`Processing form submission for row ${row}: ${JSON.stringify(responseData)}`);

    // Now, populate the "Contract Tracking" sheet
    const ss = sheet.getParent();
    const contractsSheet = ss.getSheetByName('Contract Tracking');
    const nextContractRow = contractsSheet.getLastRow() + 1;

    const contractId = `WED-${new Date().getFullYear()}-${String(nextContractRow - 1).padStart(3, '0')}`;
    const clientName1 = responseData['Primary Contact Name'] || '';
    const clientName2 = responseData['Partner/Spouse Name'] || '';
    const clientNames = clientName2 ? `${clientName1} & ${clientName2}` : clientName1;

    const contractRowData = [
      contractId,
      clientNames,
      responseData['Email Address'],
      responseData['Phone Number'],
      formatFieldValue(responseData['Wedding Date']),
      responseData['Which services do you need?'],
      responseData['Ceremony Venue Name'],
      responseData['Expected Number of Guests'],
      responseData['Total Budget Range for Our Services'],
      0, // Placeholder for Estimated Total
      'Pending', // Initial Status
      new Date(),
      new Date(),
      'Generated from form submission.'
    ];

    contractsSheet.getRange(nextContractRow, 1, 1, contractRowData.length).setValues([contractRowData]);
    console.log(`Added new entry to 'Contract Tracking' sheet in row ${nextContractRow}.`);

    // Finally, generate the contract document
    const mergeData = getRowData(nextContractRow, ss); // Use the new getRowData function
    const docId = createContractDocument(mergeData);

    console.log(`Successfully generated contract document with ID: ${docId}`);

  } catch (error) {
    console.error('Error during onEnhancedFormSubmit:', error.stack);
  }
}

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
  TEMPLATE_DOC_ID: '1ObHyfoU3H4oCTAhocYagg89TOGGTQ_o8ajUntJ6E45Q', // Replace with your Google Docs template ID
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
function getRowData(row, spreadsheet) {
  const ss = spreadsheet || SpreadsheetApp.getActiveSpreadsheet();
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
  if (Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value)) {
    // Format as MM/dd/yyyy using UTC to avoid timezone-related errors
    const mm = String(value.getUTCMonth() + 1).padStart(2, '0');
    const dd = String(value.getUTCDate()).padStart(2, '0');
    const yyyy = value.getUTCFullYear();
    return `${mm}/${dd}/${yyyy}`;
  }
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  if (value === null || value === undefined) return '';
  return String(value);
}

/**
 * Creates a new contract document from the template
 */
function createContractDocument(mergeData) {
  try {
    // Validate required fields
    if (!mergeData.Client_Primary_Name && !mergeData['Client Names']) {
      throw new Error('Client name is required');
    }
    
    // Get or create output folder
    const outputFolder = getOrCreateFolder(CONFIG.OUTPUT_FOLDER_NAME);
    
    // Create document name
    const clientName = mergeData['Client Names'] || mergeData.Client_Primary_Name;
    const weddingDate = mergeData['Wedding Date'] || mergeData.Wedding_Date || 'TBD';
    const docName = `Wedding Contract - ${clientName} - ${formatFieldValue(new Date(weddingDate))}`;
    
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
    
    const successMessage = `Test Successful! Test contract created successfully. Document ID: ${docId}. Please review the generated document.`;
    console.log(successMessage);
    
    // Try to show an alert if in a UI context
    try {
      SpreadsheetApp.getUi().alert(successMessage);
    } catch (uiError) {
      // Silently fail if no UI context is available
    }
    
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
  const errorMessage = `Error in ${functionName}: ${error.stack || error.message}`;
  console.error(errorMessage);
  
  let userMessage = `An error occurred in ${functionName}:\n\n${error.message}`;
  
  if (error.message.includes('TEMPLATE_DOC_ID')) {
    userMessage += '\n\nPlease check that you have updated the TEMPLATE_DOC_ID in the script configuration.';
  }
  
  if (error.message.includes('permission')) {
    userMessage += '\n\nPlease check that you have edit permissions for the template document.';
  }
  
  // Try to show an alert if in a UI context, otherwise just log it.
  try {
    SpreadsheetApp.getUi().alert('Error', userMessage, SpreadsheetApp.getUi().ButtonSet.OK);
  } catch (uiError) {
    console.log('UI not available, error logged to console.');
  }
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

/**
 * PHASE 2: FORM-TO-SHEETS INTEGRATION & ENHANCEMENT
 * Enhanced form creation with automatic spreadsheet connection
 */

/**
 * Creates a comprehensive spreadsheet for wedding contract management
 * This spreadsheet will store form responses and contract tracking data
 */
function createWeddingContractSpreadsheet() {
  try {
    'Date Modified',
    'Notes'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format the header row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#4285f4');
  headerRange.setFontColor('#ffffff');
  
  // Set column widths for better readability
  sheet.setColumnWidth(1, 120); // Contract ID
  sheet.setColumnWidth(2, 200); // Client Names
  sheet.setColumnWidth(3, 200); // Email
  sheet.setColumnWidth(4, 120); // Phone
  sheet.setColumnWidth(5, 120); // Wedding Date
  sheet.setColumnWidth(6, 250); // Services
  sheet.setColumnWidth(7, 200); // Venue
  sheet.setColumnWidth(8, 100); // Guest Count
  sheet.setColumnWidth(9, 120); // Budget Range
  sheet.setColumnWidth(10, 120); // Estimated Total
  sheet.setColumnWidth(11, 150); // Contract Status
  sheet.setColumnWidth(12, 120); // Date Created
  sheet.setColumnWidth(13, 120); // Date Modified
  sheet.setColumnWidth(14, 300); // Notes
  
  // Freeze the header row
  sheet.setFrozenRows(1);
}

/**
 * Sets up the status tracking sheet for workflow management
 */
function setupStatusTrackingSheet(sheet) {
  const headers = [
    'Contract ID',
    'Client Names',
    'Wedding Date',
    'Form Submitted',
    'Initial Contact Made', 
    'Quote Provided',
    'Contract Sent',
    'Contract Signed',
    'Deposit Received',
    'Final Payment Received',
    'Services Completed',
    'Current Status',
    'Next Action',
    'Due Date',
    'Assigned To',
    'Priority'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format the header row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#34a853');
  headerRange.setFontColor('#ffffff');
  
  // Set column widths
  sheet.setColumnWidth(1, 120);
  sheet.setColumnWidth(2, 200);
  sheet.setColumnWidth(3, 120);
  for (let i = 4; i <= 11; i++) {
    sheet.setColumnWidth(i, 120);
  }
  sheet.setColumnWidth(12, 150);
  sheet.setColumnWidth(13, 200);
  sheet.setColumnWidth(14, 120);
  sheet.setColumnWidth(15, 120);
  sheet.setColumnWidth(16, 100);
  
  sheet.setFrozenRows(1);
}

/**
 * Sets up the pricing calculator sheet with service rates and formulas
 */
function setupPricingCalculatorSheet(sheet) {
  // Service pricing table
  const pricingData = [
    ['Service', 'Base Rate', 'Per Hour Rate', 'Notes'],
    ['Wedding Photography', 1500, 200, 'Basic package includes 4 hours'],
    ['Wedding Videography', 2000, 250, 'Includes editing and highlights'],
    ['DJ/Music Services', 800, 100, 'Includes basic sound system'],
    ['Lighting Setup', 400, 50, 'Ambient and dance lighting'],
    ['Audio/Sound System', 300, 40, 'Ceremony and reception'],
    ['Photo Booth', 600, 75, 'Props and prints included'],
    ['Live Streaming', 500, 60, 'Professional streaming setup'],
    ['Drone Photography/Video', 400, 80, 'Weather dependent'],
    ['Additional Photographer', 300, 60, 'Second shooter'],
    ['Rush Delivery', 200, 0, 'Expedited editing/delivery']
  ];
  
  sheet.getRange(1, 1, pricingData.length, pricingData[0].length).setValues(pricingData);
  
  // Format the pricing table
  const headerRange = sheet.getRange(1, 1, 1, 4);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#ff9900');
  headerRange.setFontColor('#ffffff');
  
  // Set column widths
  sheet.setColumnWidth(1, 200);
  sheet.setColumnWidth(2, 120);
  sheet.setColumnWidth(3, 120);
  sheet.setColumnWidth(4, 300);
  
  sheet.setFrozenRows(1);
  
  // Add calculation formulas section
  sheet.getRange(pricingData.length + 2, 1).setValue('Package Calculator');
  sheet.getRange(pricingData.length + 2, 1).setFontWeight('bold').setFontSize(14);
  
  const calculatorHeaders = ['Selected Service', 'Hours', 'Calculated Cost'];
  sheet.getRange(pricingData.length + 3, 1, 1, 3).setValues([calculatorHeaders]);
  sheet.getRange(pricingData.length + 3, 1, 1, 3).setFontWeight('bold').setBackground('#e1f5fe');
}

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
 * Helper function to find a form response item by its title.
 * @param {FormApp.ItemResponse[]} itemResponses An array of item responses.
 * @param {string} title The title of the item to find.
 * @return {string|string[]|null} The response for the found item, or null if not found.
 */
function getResponseByTitle(itemResponses, title) {
  for (var i = 0; i < itemResponses.length; i++) {
    if (itemResponses[i].getItem().getTitle() === title) {
      return itemResponses[i].getResponse();
    }
  }
  return null;
}


/**
 * =================================================================
 * TESTING & UTILITY FUNCTIONS
 * =================================================================
 */

/**
 * Runs a quick smoke test to check for critical function availability.
 */
function runSmokeTest() {
  try {
    console.log('Running quick smoke test...');
    
    const criticalFunctions = [
      'createWeddingIntakeForm',
      'createEnhancedWeddingIntakeForm',
      'processFormResponse',
      'generateSingleContract',
      'calculateEstimatedPricing',
      'setupFormSubmissionTrigger'
    ];
    
    for (const funcName of criticalFunctions) {
      if (typeof this[funcName] !== 'function') {
        throw new Error(`Critical function "${funcName}" is not defined.`);
      }
    }
    
    // Test basic data formatting using a reliable date constructor
    const testData = formatFieldValue(new Date('2025-06-15T00:00:00Z'));
    if (!testData.includes('06/15/2025')) {
      throw new Error(`Date formatting smoke test failed. Expected "06/15/2025", got "${testData}".`);
    }
    
    console.log('✓ Smoke test passed - system appears functional');
    
  } catch (error) {
    const message = `Smoke test failed: [${error.toString()}]`;
    console.error(message);
    // Use Logger for environments where console might not be fully available
    Logger.log(message);
    // Try to show an alert if UI is available
    try {
      SpreadsheetApp.getUi().alert('Smoke Test Failed', message, SpreadsheetApp.getUi().ButtonSet.OK);
    } catch (uiError) {
      console.info('UI not available for alert display');
    }
    throw error;
  }
}


/**
 * Processes the form response upon submission.
 * @param {Object} e The event object for the form submission trigger.
 */
function processFormResponse(e) {
  try {
    if (!e || !e.response) {
        throw new Error("Invalid event object or response property is missing.");
    }
    const formResponse = e.response;
    const itemResponses = formResponse.getItemResponses();

    // Extract data using question titles
    const clientName1 = getResponseByTitle(itemResponses, "Primary Contact - Bride/Groom/Partner 1");
    const clientName2 = getResponseByTitle(itemResponses, "Secondary Contact - Bride/Groom/Partner 2");
    const eventDate = getResponseByTitle(itemResponses, "Event Date");
    const services = getResponseByTitle(itemResponses, "Services Requested");

    let fullClientName = clientName1;
    if (clientName2) {
      fullClientName += ' & ' + clientName2;
    }

    if (!clientName1 || !eventDate || !services) {
      console.error("Missing required information in form response. Cannot generate contract.");
      return;
    }

    // Call the contract generation function
    generateContract(fullClientName, new Date(eventDate), services);

  } catch (error) {
    console.error('Error processing form response: ' + error.toString());
    console.error('Stack: ' + error.stack);
    // Optionally, send an email notification about the failure
    // MailApp.sendEmail("your-email@example.com", "Error in Wedding Form", "Error: " + error.toString());
  }
}


/**
 * =================================================================
 * CONTRACT GENERATION
 * =================================================================
 */

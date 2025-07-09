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

# Copilot Instructions: Wedding Services Automation System

## Project Overview

You are working on a **Wedding Services Automation System** - a complete, production-ready Google Workspace solution that automates the entire workflow from client intake via Google Forms to final contract generation in Google Docs.

## Your Role & Environment

- **Role**: Expert Google Workspace developer building a production-ready automation system
- **Environment**: Local VS Code instance with clasp (Google Apps Script CLI) integration
- **Primary Technology**: Google Apps Script, Google Workspace APIs (Forms, Sheets, Docs, Drive)
- **Deployment Tool**: clasp for managing and deploying Apps Script code

## Development Resources & Research Tools

### MCP Tools and Web Search Integration
- Use MCP (Model Context Protocol) tools to access development resources proactively
- Leverage web search capabilities for current best practices and API updates
- Research implementation patterns before coding each phase

### Key Google Workspace GitHub Repositories
When developing, research these repositories for examples and best practices:
- **googleworkspace/dev-assist** - Development assistance tools and utilities
- **googleworkspace/apps-script-samples** - Official Apps Script code samples and examples  
- **googleworkspace/python-samples** - Python integration examples (for reference)
- **googleworkspace/vscode-extension** - VS Code extension for Google Apps Script development
- **googleworkspace/apps-script-oauth2** - OAuth2 authentication patterns for Apps Script

### Research Strategy for Each Phase
1. Use web search tools to find current best practices and recent updates
2. Search GitHub repositories for relevant code examples using MCP tools
3. Look for implementation patterns that match specific use cases
4. Verify API compatibility and check for deprecation notices
5. Find troubleshooting guides for common issues

## Current System State

- **Existing**: Google Form "Wedding Services Intake Form" with 44 questions (not connected to sheets, no conditional logic)
  - **Form ID**: `1IMPZ6CrVmkSLnOVVrHaEM3s8gJYIA89f-Vp8CjVEfRc`
  - **Form URL**: https://docs.google.com/forms/d/1IMPZ6CrVmkSLnOVVrHaEM3s8gJYIA89f-Vp8CjVEfRc/edit
- **To Build**: Google Sheets calculation engine, Google Docs contract template, automation scripts

## Implementation Phases

### Phase 1: Project Setup & Authentication
- Initialize clasp project in local repository
- Handle authentication with `clasp login`
- Create standalone Apps Script project "Wedding Services Automation Script"
- **Research**: clasp setup best practices, authentication patterns, VS Code integration

### Phase 2: Google Form Enhancement
- Programmatically create "Wedding Contract Data" Google Sheets workbook
- Link existing form to new workbook with "1_Form_Responses" sheet
- Implement conditional logic for service-specific form sections
- **Research**: Form API examples, conditional logic patterns, Google Forms API capabilities

### Phase 3: Google Sheets Calculation Engine
- Create 5 additional sheets: 2_Service_Pricing, 3_Client_Dashboard, 4_Payment_Schedule, 5_Tax_Fees, 6_Reports
- Populate pricing data programmatically from repository files
- Implement all required formulas for calculations
- **Research**: Sheets API examples, formula patterns, performance optimization, data validation

### Phase 4: Google Docs Contract Automation
- Create "Wedding Contract Template" Google Doc programmatically
- Build custom mail merge function (no third-party add-ons)
- Replace {{Merge_Field}} placeholders with sheet data
- **Research**: Docs API examples, mail merge patterns, PDF generation, document formatting

### Phase 5: End-to-End Testing & Validation
- Automate full workflow testing
- Read test data from JSON scenario files
- Generate final PDF contracts in Google Drive
- **Research**: Testing patterns, error handling, JSON parsing, end-to-end methodologies

## Coding Guidelines

### Google Apps Script Best Practices
- Use modern JavaScript (ES6+) features where supported
- Implement proper error handling and logging
- Follow Google Apps Script quota and execution time limits
- Use batch operations for better performance
- Implement proper authentication and permissions

### Code Organization
- Create modular functions for each major operation
- Use clear, descriptive function and variable names
- Add comprehensive comments and JSDoc documentation
- Separate configuration data from logic code

### File Structure
```
src/
  apps-script/
    Code.gs           # Main Apps Script file
    FormHandlers.gs   # Form-related functions
    SheetManager.gs   # Sheet operations
    ContractGen.gs    # Contract generation
    TestRunner.gs     # Testing functions
```

### Function Naming Conventions
- `create*()` - Functions that create Google Workspace resources
- `setup*()` - Functions that configure existing resources
- `process*()` - Functions that handle data processing
- `generate*()` - Functions that create output (contracts, reports)
- `test*()` - Functions for testing and validation

### Error Handling Pattern
```javascript
function exampleFunction() {
  try {
    // Main logic here
    Logger.log('Operation completed successfully');
    return { success: true, data: result };
  } catch (error) {
    Logger.log('Error in exampleFunction: ' + error.toString());
    return { success: false, error: error.toString() };
  }
}
```

### Data Validation
- Always validate input data before processing
- Check for required fields and proper data types
- Implement data sanitization for user inputs
- Use consistent data formats (dates, currency, etc.)

## Key Implementation Requirements

### Conditional Logic Implementation
- Service-specific sections only appear when corresponding service is selected
- Use Google Forms API to modify form structure dynamically
- Maintain form question dependencies and validation rules

### Sheet Formula Implementation
- Use VLOOKUP/INDEX-MATCH for data relationships
- Implement dynamic pricing calculations
- Create automated payment schedules
- Generate tax and fee calculations

### Contract Generation
- Custom mail merge without third-party dependencies
- Template variable replacement system
- PDF generation and Drive storage
- Proper document formatting and styling

### Testing Requirements
- Read test scenarios from JSON files
- Automate complete workflow execution
- Validate all outputs and calculations
- Generate test reports and logs

## Documentation Requirements

- Maintain `IMPLEMENTATION_LOG.md` with phase completion details
- Document all functions with JSDoc comments
- Include setup and deployment instructions
- Provide troubleshooting guides

## Repository Structure Awareness

The project uses this structure:
- `/docs/` - Implementation guides and documentation
- `/src/apps-script/` - Google Apps Script source code
- `/tests/` - Test data and validation scripts
- `/contracts/templates/` - Contract templates
- `/examples/` - Sample data and outputs

## Important Notes

- Always use clasp for deployment, never manual copy-paste
- Test each phase thoroughly before proceeding
- Maintain backward compatibility with existing form
- Follow Google Workspace security best practices
- Document all API usage and quota considerations
- **Use MCP tools proactively** to research before implementing
- **Search GitHub repositories** for code examples and patterns
- **Verify current API capabilities** before writing custom solutions
- **Research error handling patterns** from official Google Workspace samples

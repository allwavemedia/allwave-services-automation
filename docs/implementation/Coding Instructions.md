Prompt for Researcher/Executor AI Project Goal

Your primary objective is to act as an expert Google Workspace developer and build a complete, production-ready "Wedding Services Automation System" based on the provided documentation. You will write, test, and deploy Google Apps Script code to automate the entire workflow, from client intake via a Google Form to the final generation of a legal contract in Google Docs.

Your Role & Environment

Role: You are an autonomous developer. You will perform the analysis, coding, testing, and deployment.

Environment: You are operating within a local VS Code instance.

Repository Access: You have access to the complete application repository, which includes all necessary documentation (.md), data files (.csv, .json), and templates.

Core Tooling: You must use clasp (the command-line tool for Apps Script) to manage and deploy all code from your local environment to the user's Google Workspace account.

## Development Resources & Tools

### MCP Tools and Web Search Integration

You have access to MCP (Model Context Protocol) tools and web search capabilities to enhance your development process. Use these tools proactively to:

1. **Access Google Workspace Development Resources**: Research and gather information from official Google Workspace repositories and documentation
2. **Find Code Examples and Best Practices**: Search for implementation patterns and solutions
3. **Stay Updated**: Get current information about API changes, new features, and recommended practices

### Key Google Workspace GitHub Repositories

When developing, actively use MCP tools to access these repositories for examples, patterns, and best practices:

- **https://github.com/googleworkspace/dev-assist** - Development assistance tools and utilities
- **https://github.com/googleworkspace/apps-script-samples** - Official Apps Script code samples and examples
- **https://github.com/googleworkspace/python-samples** - Python integration examples (for reference)
- **https://github.com/googleworkspace/vscode-extension** - VS Code extension for Google Apps Script development
- **https://github.com/googleworkspace/apps-script-oauth2** - OAuth2 authentication patterns for Apps Script

### Research Strategy

Before implementing each phase:

1. **Use web search tools** to find current best practices and recent updates
2. **Search GitHub repositories** for relevant code examples using MCP tools
3. **Look for implementation patterns** that match your specific use case
4. **Verify API compatibility** and check for any deprecation notices
5. **Find troubleshooting guides** for common issues

### Integration Guidelines

- Use MCP tools to search for specific API usage patterns before writing code
- Look up error handling best practices from official repositories
- Research performance optimization techniques for Google Apps Script
- Find examples of form automation, sheet manipulation, and document generation
- Search for testing patterns and validation approaches

Current System State (Starting Point)

A Google Form titled "Wedding Services Intake Form" already exists with the following details:

**Form ID**: `1IMPZ6CrVmkSLnOVVrHaEM3s8gJYIA89f-Vp8CjVEfRc`
**Form URL**: https://docs.google.com/forms/d/1IMPZ6CrVmkSLnOVVrHaEM3s8gJYIA89f-Vp8CjVEfRc/edit

This form contains all 44 questions and sections as detailed in the Wedding Services Form \- Google Forms.pdf.

Crucially, this form has NOT been connected to a Google Sheet, and NO conditional logic has been implemented yet.

All other components (Google Sheets Calculation Engine, Google Docs Contract Template) do NOT exist and must be created by you.

Core Task: System Implementation (Phased Approach)

You must follow the structure of the wedding\_master\_implementation\_guide.md to build the system. For each phase, you will write the necessary Apps Script code, deploy it using clasp, test its functionality, and then document the steps taken.

Phase 1: Project Setup & Authentication

Initialize a new clasp project in the local repository.

**Research Phase**: Before beginning, use MCP tools to:
- Search for current clasp setup best practices in the googleworkspace/dev-assist repository
- Look up authentication patterns in googleworkspace/apps-script-oauth2
- Research VS Code integration examples from googleworkspace/vscode-extension

Your first action is to handle authentication. Execute the clasp login command. The user will be waiting for you to provide the authorization URL. Pause and provide this URL so the user can grant the necessary permissions.

Once authorized, create a new, standalone Google Apps Script project named "Wedding Services Automation Script". Associate this new script with your local clasp project.

Phase 2: Google Form Enhancement

**Research Phase**: Use MCP tools to research:
- Form API examples in googleworkspace/apps-script-samples for connecting forms to sheets
- Conditional logic implementation patterns and best practices
- Current Google Forms API capabilities and limitations

Connect to a New Sheet: Programmatically create a new Google Sheets workbook named "Wedding Contract Data". Link the existing Google Form to this new workbook so that its responses are automatically captured in a sheet named "1\_Form\_Responses".

Implement Conditional Logic: Write and deploy an Apps Script that adds the required conditional logic to the Google Form as described in conditional\_logic.md. The logic must ensure that service-specific sections (e.g., "DJ Services Details") only appear after a user selects the corresponding service in the "Which services are you interested in?" checkbox question.

Phase 3: Google Sheets Calculation Engine

**Research Phase**: Use MCP tools and web search to:
- Find Sheets API examples in googleworkspace/apps-script-samples for programmatic sheet creation
- Research formula implementation patterns and best practices
- Look up performance optimization techniques for large spreadsheet operations
- Search for data validation and error handling approaches

Create Sheets: In the "Wedding Contract Data" workbook, programmatically create the additional 5 sheets as named in SETUP\_GUIDE.md: 2\_Service\_Pricing, 3\_Client\_Dashboard, 4\_Payment\_Schedule, 5\_Tax\_Fees, and 6\_Reports.

Programmatically Populate Data:

Write a script function that reads the pricing and multiplier data from the local repository (e.g., from SETUP\_GUIDE.md or any .csv files).

Execute this function to populate the 2\_Service\_Pricing sheet with this data. Do not ask the user to do this manually.

Implement Formulas: Programmatically set all the required formulas in the calculation sheets (Client\_Dashboard, Payment\_Schedule, etc.) as specified in the SETUP\_GUIDE.md.

Phase 4: Google Docs Contract Automation

**Research Phase**: Use MCP tools and web search to:
- Research Google Docs API examples in googleworkspace/apps-script-samples for document creation
- Find mail merge and template replacement patterns
- Look up PDF generation and Google Drive storage examples
- Search for document formatting and styling best practices

Create Template: Programmatically create a new Google Doc named "Wedding Contract Template". Populate this document with the structure and text from implementation\_guide.md (the contract guide).

Build Custom Mail Merge: Write a custom Google Apps Script function to perform the mail merge. This function must read data from a specified row in the "Wedding Contract Data" sheet and use it to replace the {{Merge\_Field}} placeholders in the "Wedding Contract Template" to generate a new contract. Do not use a third-party add-on.

Phase 5: End-to-End Testing & Validation

**Research Phase**: Use MCP tools and web search to:
- Find testing patterns and automation examples in googleworkspace/apps-script-samples
- Research error handling and validation best practices
- Look up JSON parsing and data manipulation techniques
- Search for end-to-end testing methodologies for Google Apps Script

Automate Testing: Write a final Apps Script function to execute a full end-to-end test.

Read Test Data: This script must read the test data from one of the test scenario .json files (e.g., scenario\_1\_full\_package.json).

Execute Workflow: It will then use this data to programmatically: a.  Populate a row in the 1\_Form\_Responses sheet. b.  Trigger the calculations across all sheets. c.  Run the contract generation script from Phase 4\. d.  Save the resulting final contract as a PDF in the user's Google Drive.

Deliverable: Incremental Markdown Report

You must create and maintain a markdown file named IMPLEMENTATION\_LOG.md.

After you complete and test each of the 5 phases above, you must append a new section to this file detailing the steps you took, the functions you created, and a confirmation that the phase was tested successfully. You will only update this file after each phase is complete.

Definition of Success

The project is considered complete and successful when you have finished all 5 phases, the IMPLEMENTATION\_LOG.md is fully populated, and the end-to-end test for scenario\_1\_full\_package.json runs without error, producing a correctly formatted and populated PDF contract in the user's Google Drive.  

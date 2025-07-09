
# Wedding Services Automation System

[![License: MIT](https://i.pinimg.com/736x/6c/dc/a2/6cdca2c18a4e6f744334d6e515a79e07.jpg)
[![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-4285F4?logo=google&logoColor=white)](https://script.google.com/)
[![Google Workspace](https://img.shields.io/badge/Google%20Workspace-4285F4?logo=google&logoColor=white)](https://workspace.google.com/)
[![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)](https://python.org/)

A comprehensive automation system for wedding service providers built on Google Workspace (Forms, Sheets, Docs) that streamlines client intake, pricing calculations, contract generation, and workflow management.

## 🌟 Features

### 📋 Client Intake System
- **Smart Google Forms** with conditional logic and validation
- Automated data collection for wedding details, services, and preferences
- Professional branding and user experience optimization
- Real-time form response processing

### 💰 Dynamic Pricing Engine
- **Intelligent Google Sheets** calculations for complex pricing scenarios
- Service-based pricing with customizable packages
- Automatic tax and fee calculations
- Payment schedule generation
- Client dashboard with transparent pricing breakdown

### 📄 Contract Generation
- **Automated Google Docs** contract creation from form responses
- Professional contract templates with dynamic content insertion
- PDF generation and client delivery
- Version control and contract tracking

### 📊 Business Intelligence
- Comprehensive reporting and analytics
- Client management dashboard
- Revenue tracking and forecasting
- Performance metrics and insights

## 🚀 Quick Start

### Prerequisites
- Google Workspace account (Business or Enterprise recommended)
- Google Apps Script access
- Basic understanding of Google Forms, Sheets, and Docs

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AllWaveMedia/wedding-services-automation.git
   cd wedding-services-automation
   ```

2. **Set up Google Forms**
   - Import the form template from `forms/templates/intake_form.json`
   - Follow the setup guide in `docs/forms/setup_instructions.md`
   - Configure branding as outlined in `docs/forms/branding.md`

3. **Configure Google Sheets**
   - Create new Google Sheets using templates in `sheets/sample-data/`
   - Import formulas and validation rules from `docs/sheets/`
   - Follow the implementation checklist in `docs/sheets/IMPLEMENTATION_CHECKLIST.md`

4. **Deploy Apps Script**
   - Copy code from `src/apps-script/apps_script_code.js`
   - Deploy as web app following `docs/contracts/implementation_guide.md`
   - Configure triggers and permissions

5. **Test the workflow**
   - Use sample scenarios from `tests/sample-data/`
   - Run validation tests with `src/python/workflow_test.py`
   - Verify end-to-end functionality

## 📁 Repository Structure

```
wedding-services-automation/
├── docs/                          # Documentation
│   ├── forms/                     # Google Forms documentation
│   ├── sheets/                    # Google Sheets guides
│   ├── contracts/                 # Contract system docs
│   └── implementation/            # Implementation guides
├── src/                           # Source code
│   ├── apps-script/               # Google Apps Script code
│   └── python/                    # Python utilities and tests
├── forms/                         # Form templates and configs
│   └── templates/                 # Google Forms JSON templates
├── sheets/                        # Spreadsheet templates
│   ├── templates/                 # Sheet templates
│   └── sample-data/               # Sample CSV data
├── contracts/                     # Contract templates
│   └── templates/                 # Document templates
├── tests/                         # Testing framework
│   ├── sample-data/               # Test scenarios
│   └── results/                   # Test outputs
└── examples/                      # Example implementations
    ├── scenarios/                 # Usage scenarios
    └── contracts/                 # Sample contracts
```

## 📖 Documentation

### Core Components
- **[Forms Setup Guide](docs/forms/setup_instructions.md)** - Complete Google Forms configuration
- **[Sheets Implementation](docs/sheets/SETUP_GUIDE.md)** - Spreadsheet setup and formulas
- **[Contract System](docs/contracts/implementation_guide.md)** - Automated contract generation
- **[Master Implementation Guide](docs/implementation/wedding_master_implementation_guide.md)** - Complete system setup

### Advanced Features
- **[Conditional Logic](docs/forms/conditional_logic.md)** - Smart form behavior
- **[Formula Reference](docs/sheets/FORMULAS_REFERENCE.md)** - Spreadsheet calculations
- **[Data Validation](docs/sheets/DATA_VALIDATION_GUIDE.md)** - Input validation rules
- **[Contract Integration](docs/sheets/CONTRACT_INTEGRATION_GUIDE.md)** - Connecting sheets to contracts

## 🧪 Testing

The system includes comprehensive testing capabilities:

```bash
# Run workflow tests
cd src/python
python workflow_test.py
```

Test scenarios include:
- Full wedding packages
- Photography-only services
- DJ-only bookings
- Photo + video combinations
- Last-minute bookings

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on:
- Code standards
- Pull request process
- Issue reporting
- Development setup

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏢 About AllWave Media

This automation system was developed by [AllWave Media](https://allwavemedia.com) to streamline wedding service operations and improve client experience. We specialize in business automation solutions for creative professionals.

## 📞 Support

- **Documentation**: Check the `docs/` directory for comprehensive guides
- **Issues**: Report bugs and feature requests via GitHub Issues
- **Discussions**: Join community discussions in GitHub Discussions

## 🔄 Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history and updates.

---

**Made with ❤️ by AllWave Media**

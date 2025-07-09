
# Contributing to Wedding Services Automation System

Thank you for your interest in contributing to the Wedding Services Automation System! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues

Before creating an issue, please:
1. Check existing issues to avoid duplicates
2. Use the issue templates when available
3. Provide clear, detailed descriptions
4. Include steps to reproduce bugs
5. Specify your environment (Google Workspace version, browser, etc.)

### Suggesting Features

We welcome feature suggestions! Please:
1. Check if the feature already exists or is planned
2. Describe the use case and benefits
3. Consider implementation complexity
4. Provide mockups or examples if helpful

### Code Contributions

#### Getting Started

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/wedding-services-automation.git
   cd wedding-services-automation
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Set up development environment**
   - Google Workspace account for testing
   - Access to Google Apps Script
   - Python 3.7+ for testing utilities

#### Development Guidelines

**Code Style**
- Follow existing code formatting
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions focused and modular

**Google Apps Script**
- Use modern JavaScript (ES6+) features when possible
- Follow Google Apps Script best practices
- Include error handling and logging
- Test with different data scenarios

**Documentation**
- Update relevant documentation for changes
- Include inline code comments
- Update README if adding new features
- Provide examples for new functionality

**Testing**
- Test changes with sample data
- Verify end-to-end workflow functionality
- Include test scenarios for new features
- Update test documentation

#### Pull Request Process

1. **Before submitting**
   - Ensure code follows style guidelines
   - Test thoroughly with sample data
   - Update documentation as needed
   - Verify no breaking changes

2. **Pull request requirements**
   - Clear, descriptive title
   - Detailed description of changes
   - Link to related issues
   - Screenshots/examples if applicable

3. **Review process**
   - Maintainers will review within 48 hours
   - Address feedback promptly
   - Be open to suggestions and changes
   - Maintain professional communication

## 📋 Development Setup

### Prerequisites
- Google Workspace account (Business/Enterprise recommended)
- Google Apps Script access
- Python 3.7+ for testing utilities
- Git for version control

### Local Development

1. **Clone and setup**
   ```bash
   git clone https://github.com/AllWaveMedia/wedding-services-automation.git
   cd wedding-services-automation
   ```

2. **Google Apps Script development**
   - Use Google Apps Script editor or clasp CLI
   - Test with development Google Workspace
   - Follow deployment guidelines in docs

3. **Python testing setup**
   ```bash
   cd src/python
   pip install -r requirements.txt  # if requirements file exists
   ```

### Testing Guidelines

**Manual Testing**
- Use sample scenarios from `tests/sample-data/`
- Test all form validation rules
- Verify pricing calculations
- Check contract generation
- Validate end-to-end workflow

**Automated Testing**
- Run existing Python tests
- Add tests for new functionality
- Verify test data integrity
- Document test procedures

## 📝 Documentation Standards

### Code Documentation
- Clear function/method descriptions
- Parameter and return value documentation
- Usage examples where helpful
- Error handling documentation

### User Documentation
- Step-by-step instructions
- Screenshots for complex procedures
- Troubleshooting sections
- FAQ updates

### Technical Documentation
- Architecture decisions
- Integration points
- Configuration options
- Deployment procedures

## 🏷️ Issue Labels

We use the following labels to categorize issues:

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested
- `wontfix` - This will not be worked on

## 🔄 Release Process

### Version Numbering
We follow [Semantic Versioning](https://semver.org/):
- MAJOR version for incompatible API changes
- MINOR version for backwards-compatible functionality
- PATCH version for backwards-compatible bug fixes

### Release Checklist
- [ ] Update version numbers
- [ ] Update CHANGELOG.md
- [ ] Test all components thoroughly
- [ ] Update documentation
- [ ] Create release notes
- [ ] Tag release in Git

## 📞 Getting Help

### Community Support
- GitHub Discussions for general questions
- GitHub Issues for bugs and feature requests
- Documentation in `docs/` directory

### Maintainer Contact
- Create GitHub issues for project-related questions
- Use discussions for broader community questions
- Check existing documentation before asking

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- GitHub contributor statistics

## 📄 Code of Conduct

### Our Pledge
We are committed to making participation in this project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards
Examples of behavior that contributes to creating a positive environment include:
- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

### Enforcement
Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project maintainers. All complaints will be reviewed and investigated promptly and fairly.

---

Thank you for contributing to the Wedding Services Automation System! Your efforts help make wedding service management more efficient for professionals worldwide.

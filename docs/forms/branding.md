
# Wedding Services Form Branding Guidelines

## Visual Identity

### Color Scheme
- **Primary Color**: #8B4B8C (Elegant Purple)
- **Secondary Color**: #D4AF37 (Gold Accent)
- **Background**: #FEFEFE (Off-white)
- **Text**: #2C2C2C (Dark Gray)
- **Accent**: #F5F5F5 (Light Gray for sections)

### Typography
- **Headers**: Playfair Display (elegant serif)
- **Body Text**: Source Sans Pro (clean sans-serif)
- **Form Labels**: Montserrat (modern sans-serif)

### Logo and Header
- Company logo should be placed at the top of the form
- Recommended size: 300px width, maintain aspect ratio
- Include tagline: "Capturing Your Perfect Day"

## Form Styling

### Header Section
```css
.form-header {
  background: linear-gradient(135deg, #8B4B8C 0%, #D4AF37 100%);
  color: white;
  padding: 40px 20px;
  text-align: center;
  border-radius: 8px 8px 0 0;
}

.form-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.5em;
  font-weight: 700;
  margin-bottom: 10px;
}

.form-description {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.1em;
  opacity: 0.9;
}
```

### Section Headers
```css
.section-header {
  background-color: #F5F5F5;
  border-left: 4px solid #8B4B8C;
  padding: 15px 20px;
  margin: 20px 0 10px 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #2C2C2C;
}
```

### Form Fields
```css
.form-field {
  margin-bottom: 20px;
  font-family: 'Source Sans Pro', sans-serif;
}

.field-label {
  color: #2C2C2C;
  font-weight: 500;
  margin-bottom: 5px;
}

.field-description {
  color: #666;
  font-size: 0.9em;
  font-style: italic;
  margin-bottom: 8px;
}

.required-field::after {
  content: " *";
  color: #D4AF37;
  font-weight: bold;
}
```

### Buttons and Interactive Elements
```css
.submit-button {
  background: linear-gradient(135deg, #8B4B8C 0%, #D4AF37 100%);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1.1em;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(139, 75, 140, 0.3);
}
```

## Google Forms Customization

### Theme Settings
1. **Header Type**: Upload custom image
2. **Theme Color**: #8B4B8C
3. **Background Color**: #FEFEFE
4. **Font**: Use "Playfair Display" for headers, "Source Sans Pro" for body

### Custom CSS (if using Google Sites integration)
```css
/* Custom form styling for Google Sites */
.freebirdFormviewerViewFormCard {
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  overflow: hidden;
}

.freebirdFormviewerViewHeaderHeader {
  background: linear-gradient(135deg, #8B4B8C 0%, #D4AF37 100%);
  color: white;
  padding: 30px;
}

.freebirdFormviewerViewItemList {
  padding: 20px;
}
```

## Professional Touches

### Welcome Message
"Welcome to [Company Name] Wedding Services! We're honored that you're considering us for your special day. This form helps us understand your vision and create a personalized experience just for you."

### Section Dividers
Use elegant divider graphics between major sections:
- Decorative flourishes
- Subtle wedding-themed icons (rings, flowers, hearts)
- Gradient lines matching brand colors

### Progress Indicators
- Use a elegant progress bar with gold accents
- Show completion percentage
- Include motivational text: "You're almost done!"

### Confirmation Page
```html
<div class="confirmation-message">
  <h2>Thank You!</h2>
  <p>Your wedding intake form has been submitted successfully.</p>
  <p>We'll review your information and contact you within 24 hours with your personalized quote.</p>
  <p>In the meantime, feel free to browse our portfolio at [website] or follow us on social media.</p>
</div>
```

## Mobile Responsiveness

### Mobile-First Design
- Ensure all elements scale properly on mobile devices
- Use larger touch targets (minimum 44px)
- Optimize form field spacing for thumb navigation
- Test on various screen sizes

### Mobile-Specific Styling
```css
@media (max-width: 768px) {
  .form-title {
    font-size: 2em;
  }
  
  .section-header {
    padding: 12px 15px;
    margin: 15px 0 8px 0;
  }
  
  .submit-button {
    width: 100%;
    padding: 18px;
  }
}
```

## Accessibility Guidelines

### Color Contrast
- Ensure minimum 4.5:1 contrast ratio for normal text
- Use 3:1 contrast ratio for large text
- Test with color blindness simulators

### Form Labels
- All form fields must have clear, descriptive labels
- Use placeholder text sparingly
- Provide clear error messages

### Navigation
- Ensure form can be navigated using keyboard only
- Provide skip links for screen readers
- Use semantic HTML structure

## Brand Voice and Tone

### Writing Style
- **Warm and Professional**: Friendly but expert
- **Inclusive**: Use gender-neutral language where appropriate
- **Clear and Concise**: Avoid jargon, explain technical terms
- **Encouraging**: Make the process feel exciting, not overwhelming

### Example Copy
- Instead of: "Fill out this form"
- Use: "Share your wedding vision with us"

- Instead of: "Required field"
- Use: "Help us serve you better"

- Instead of: "Submit"
- Use: "Get My Custom Quote"

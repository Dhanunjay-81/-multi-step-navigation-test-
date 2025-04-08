# Multi-Step Navigation Test Site

This repository contains a simple test website that demonstrates multi-step navigation through a series of URLs. It's designed for testing navigation paths, URL changes, and data retrieval after a sequence of clicks.

## Features

- 5-step navigation with URL hash changes at each step
- Final step displays test data
- Responsive design
- Works with browser navigation (back/forward buttons)
- No server requirements - pure HTML, CSS, and JavaScript

## How It Works

1. Start at Step 1
2. Click through each step (Step 1 → Step 2 → Step 3 → Step 4 → Step 5)
3. Each click updates the URL hash fragment (#step1, #step2, etc.)
4. After 5 steps, test data is displayed
5. Can be reset to start over

## Usage

### Local Testing

1. Clone this repository
2. Open `index.html` in any web browser

### GitHub Pages Deployment

1. Go to Settings > Pages
2. Select the main branch
3. Save to deploy to GitHub Pages

## Test Data Provided

- User ID
- Session Token
- Timestamp (generated at runtime)
- Navigation Path
- Test Status

## File Structure

- `index.html` - The main HTML structure
- `styles.css` - All styling rules
- `script.js` - Navigation and functionality logic

## License

MIT License

## Author

[Your Name]

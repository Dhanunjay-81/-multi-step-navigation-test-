// script.js
// Show the correct step based on URL or default to step1
function initializeStep() {
    const hash = window.location.hash;
    if (hash && document.querySelector(hash)) {
        showStep(hash.substring(1));
    } else {
        showStep('step1');
    }
}

// Show the specified step and hide others
function showStep(stepId) {
    // Hide all steps
    const steps = document.querySelectorAll('[id^="step"]');
    steps.forEach(step => {
        step.style.display = 'none';
    });
    
    // Show the requested step
    document.getElementById(stepId).style.display = 'block';
    
    // Update URL hash
    window.location.hash = stepId;
    
    // Update timestamp if on final step
    if (stepId === 'step5') {
        updateTimestamp();
    }
}

// Update the timestamp in the data
function updateTimestamp() {
    const now = new Date();
    document.getElementById('current-time').textContent = now.toLocaleString();
}

// Initialize when the page loads
window.addEventListener('load', initializeStep);

// Handle back/forward browser navigation
window.addEventListener('hashchange', initializeStep);

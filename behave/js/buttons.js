'use strict';

// Add event listener for scroll events
window.addEventListener('scroll', () => {
  const toTopBtn = document.getElementById('toTopBtn');
  // Show the button when scrolled down more than 500 pixels
  if (window.scrollY > 500) {
    toTopBtn.style.display = 'block';
  } else {
    // Hide the button when scrolled up within 500 pixels
    toTopBtn.style.display = 'none';
  }
});

// Add event listener for button click to scroll to top
document.getElementById('toTopBtn').addEventListener('click', () => {
  // Scroll to the top of the page smoothly
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// -------------------------------------------------------------------------------------------

// Function to hide the WhatsApp button and the hide button
function hideElement() {
  document.getElementById('whatsappBtn').style.display = 'none';
  document.getElementById('hideButton').style.display = 'none';
  document.getElementById('toTopBtn').style.right = '16px';
  document.getElementById('toTopBtn').style.left = 'initial';
}

// -------------------------------------------------------------------------------------------






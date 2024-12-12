// Get all navigation buttons
const socialMediaButton = document.querySelector('.button Social Media');
const financialsButton = document.querySelector('.button Financials');
const advertisingLibraryButton = document.querySelector('.button Advertising Library & Analytics');

// Add event listeners to each button
socialMediaButton.addEventListener('click', () => {
  window.location.href = 'https://www.schechtercustoms.com/social-media-dashboard'; // Replace with your actual URL
});

financialsButton.addEventListener('click', () => {
  window.location.href = 'https://www.schechtercustoms.com/financial-dashboard'; // Replace with your actual URL
});

advertisingLibraryButton.addEventListener('click', () => {
  window.location.href = 'https://www.schechtercustoms.com/advertising-library-analytics'; // Replace with your actual URL
});
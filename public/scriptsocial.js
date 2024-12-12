// Get all navigation buttons
const backButton = document.querySelector('.button Back to Dashboard');
const facebookButton = document.querySelector('.widget-button View Facebook Page');
const twitterButton = document.querySelector('.widget-button View Twitter Profile');
const instagramButton = document.querySelector('.widget-button View Instagram Feed');

// Add event listeners to each button
backButton.addEventListener('click', () => {
  window.location.href = 'SocialMediaDashboard.html';
});

facebookButton.addEventListener('click', () => {
  console.log('Facebook button clicked!');
});

twitterButton.addEventListener('click', () => {
  console.log('Twitter button clicked!');
});

instagramButton.addEventListener('click', () => {
  console.log('Instagram button clicked!');
});
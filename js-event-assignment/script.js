// Button click event
const magicButton = document.getElementById('magicButton');
magicButton.addEventListener('click', () => {
  magicButton.textContent = 'You clicked me!';
  magicButton.style.backgroundColor = '#ffc107';
});

// Double-click secret
magicButton.addEventListener('dblclick', () => {
  alert('🎉 Secret double-click detected!');
});

// Image gallery
const galleryImage = document.getElementById('galleryImage');
const nextImage = document.getElementById('nextImage');
const images = [
  'https://images.unsplash.com/photo-1746730341411-03b1f6b8f1f0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1746274394126-466da7ea18f3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1671620314206-03ad720f203e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D'
];
let currentImage = 0;

nextImage.addEventListener('click', () => {
  currentImage = (currentImage + 1) % images.length;
  galleryImage.src = images[currentImage];
});

// Tabs
const tabButtons = document.querySelectorAll('.tab-button');
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    document.getElementById(button.dataset.tab).classList.remove('hidden');
  });
});

// Keypress detection
window.addEventListener('keydown', (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// Form validation with real-time feedback
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const formFeedback = document.getElementById('formFeedback');
const form = document.getElementById('signupForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;
  formFeedback.textContent = '';

  if (!emailInput.value.includes('@')) {
    valid = false;
    formFeedback.textContent += 'Please enter a valid email. ';
  }

  if (passwordInput.value.length < 8) {
    valid = false;
    formFeedback.textContent += 'Password must be at least 8 characters.';
  }

  if (valid) {
    formFeedback.style.color = 'green';
    formFeedback.textContent = 'Form submitted successfully!';
  } else {
    formFeedback.style.color = 'red';
  }
});

// Real-time password feedback
passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length < 8) {
    formFeedback.textContent = 'Password must be at least 8 characters.';
    formFeedback.style.color = 'red';
  } else {
    formFeedback.textContent = 'Password looks good!';
    formFeedback.style.color = 'green';
  }
});

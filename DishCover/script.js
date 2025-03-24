// Handle Sign Up Form
document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  
  if (validateEmail(email)) {
    alert('Sign Up Successful!');
    // Proceed to send data to backend or perform further actions
  } else {
    alert('Please enter a valid email address.');
  }
});

// Email Validation Function
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}

document.querySelector('.footer-subscribe button').addEventListener('click', function () {
  const email = document.querySelector('.footer-subscribe input').value;
  if (email) {
    alert(`Thank you for subscribing with ${email}`);
  } else {
    alert('Please enter a valid email address.');
  }
});


  const toggleBtn = document.getElementById('darkModeToggle');
  const body = document.body;

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Change icon based on mode
    if (body.classList.contains('dark-mode')) {
      toggleBtn.textContent = '☀️';
    } else {
      toggleBtn.textContent = '🌙';
    }
  });


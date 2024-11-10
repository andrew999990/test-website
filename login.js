function handleLogin(event) {
    event.preventDefault(); // Prevent form submission
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value; // Replace with actual password hashing or authentication logic
    const loginError = document.getElementById('loginError');
  
    // Simple username and password check (Replace with backend logic later)
    if (username === 'user' && password === 'password') {
      window.location.href = 'website.HTML'; // Redirect to chat page if login is successful
    } else {
      loginError.style.display = 'block'; // Show error message
    }
  }


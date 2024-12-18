document.getElementById('registrationForm').addEventListener('submit', function(event) {
   
    event.preventDefault();
    
    document.querySelectorAll('.error').forEach(error => error.textContent = '');
    
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    let isValid = true;
    
    if (username.length < 3 || username.length > 20) {
      document.getElementById('usernameError').textContent = 'Username must be between 3 and 20 characters.';
         isValid = false;
       }
    
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if (!emailRegex.test(email)) {
         document.getElementById('emailError').textContent = 'Please enter a valid email address.';
         isValid = false;
       }
    
     if (password.length < 6) {
         document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
         isValid = false;
       }
    
     if (password !== confirmPassword) {
         document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
         isValid = false;
       }
 
     if (isValid) {
         alert('Form submitted successfully!');
         this.submit();
       }
    
    
  })
                                                               
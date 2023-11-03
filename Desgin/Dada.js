document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = doument.getElementById('name').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // You can add code here to handle form submission (e.g., send data to a server).
    console.log('name: ', name);
    console.log('Username: ', username);
    console.log('Email: ', email);
    console.log('Password: ', password);
});

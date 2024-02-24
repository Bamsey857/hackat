document.addEventListener("DOMContentLoaded", function () {
  

    // const fullName = document.getElementById('Fullname').value;
    // const email = document.getElementById('exampleInputEmail1').value;
    // const password = document.getElementById('exampleInputPassword1').value;
    // const confirmPassword = document.getElementById('exampleInputPassword2').value;

    // if (!isValidEmail(email)) {
    //   alert('Please enter a valid email address.');
    //   return;
    // }

    // if (!isValidPassword(password)) {
    //   alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    //   return;
    // }

    // if (password !== confirmPassword) {
    //   alert('Passwords do not match.');
    //   return;
    // }

    // const userData = {
    //   fullName,
    //   email,
    //   password
    // };

    // console.log(userData);
    // Send data using Axios (Example POST request)
    //     axios.post('YOUR_ENDPOINT', userData)
    //         .then(function (response) {
    //             console.log(response);
    //             alert('Data submitted successfully!');
    //         })
    //         .catch(function (error) {
    //             console.error(error);
    //             alert('An error occurred while submitting the data.');
    //         });
  });
});

// Function to validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate password
function isValidPassword(password) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  return passwordRegex.test(password);
};
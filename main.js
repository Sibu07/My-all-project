// Get the modal element and form inputs
const modal = document.getElementById('passwordModal');
const passwordInput = document.getElementById('passwordInput');
const passwordSubmit = document.getElementById('passwordSubmit');

// Set up event listener for first project button
const project1 = document.getElementById('project1');
project1.addEventListener('click', function() {
  modal.style.display = 'block'; // Show the password modal
});

// Set up event listener for second project button
//const project2 = document.getElementById('project2');
//project2.addEventListener('click', function() {
//window.location.href = '/Time-add/time.html'; // Redirect to the second project URL
//});
// Get the project 2 link element
//const project2Link = document.getElementById("project2");

// Add an event listener to the project 2 link
//project2Link.addEventListener("click", function(e) {
  // Prevent the default link behavior
 // e.preventDefault();

  // Display a confirmation pop-up
 // const confirmed = confirm("Are you sure you want to open this project?");

  // If the user confirms, redirect to the project page
 // if (confirmed) {
//    window.location.href = project2Link.href;
//  }
//});
// JavaScript code to display a confirmation dialog when the user clicks on the "First Project" link

const project2Link = document.getElementById("project2-link");

project2Link.addEventListener("click", function(event) {
  event.preventDefault();  // prevent the link from opening the project immediately
  
  if (confirm("Do you want to continue with this project?")) {
    window.location.href = "/Time-add/time.html";  // navigate to the project URL if user confirms
  }
});

// Set up event listener for password submit button
passwordSubmit.addEventListener('click', function() {
  const password = passwordInput.value; // Get the value of the password input field
  if (password === 'mypassword') { // If password is correct
    alert('Correct password!🎉🎉'); // Show success message
    // TODO: Add code to continue with project1
    window.location.href = 'Screenshot-maker/ss/ss-index.html'; // Redirect to the first project URL
  } else { // If password is incorrect
    alert('Incorrect password! Please try again.'); // Show error message
  }
  modal.style.display = 'none'; // Hide the password modal
});

// Set up event listener to close the password modal when user clicks outside of it
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

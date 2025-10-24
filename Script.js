// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault(); // Prevent page reload

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simple alert message
  alert(`Thanks for reaching out, ${name}! I’ll get back to you soon.`);

  // Reset the form
  this.reset();
});

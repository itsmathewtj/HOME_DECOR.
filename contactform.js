function validateForm() {
    let valid = true;
  
    // Name Validation
    let name = document.getElementById("name").value;
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required";
      valid = false;
    } else {
      document.getElementById("nameError").textContent = "";
    }
  
    // Email Validation
    let email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email address";
      valid = false;
    } else {
      document.getElementById("emailError").textContent = "";
    }
  
    // Subject Validation
    let subject = document.getElementById("subject").value;
    if (subject === "") {
      document.getElementById("subjectError").textContent = "Subject is required";
      valid = false;
    } else {
      document.getElementById("subjectError").textContent = "";
    }
  
    // Message Validation
    let message = document.getElementById("message").value;
    if (message === "") {
      document.getElementById("messageError").textContent = "Message is required";
      valid = false;
    } else {
      document.getElementById("messageError").textContent = "";
    }
  
    return valid;
  }
  
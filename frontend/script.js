function submitForm() {
  // Fetch form data
  const formData = {
    name: document.getElementById("name").value,
    mobile: document.getElementById("mobile").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
    courses: document.getElementById("courses").value,
    additionalInfo: document.getElementById("additionalInfo").value,
  };

  // You can perform validation here if needed

  // Send data to the server (you'll implement this in the backend)
  // For now, we'll just log the data to the console
  console.log(formData);

  // Clear the form after submission if needed
  document.getElementById("admissionForm").reset();
}

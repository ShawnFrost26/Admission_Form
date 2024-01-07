async function submitForm() {
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

  try {
    // Send data to the server using Fetch API
    const response = await fetch("http://localhost:3000/api/admission", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // Check if the request was successful (status code 2xx)
    if (response.ok) {
      console.log("Form data sent successfully");
    } else {
      console.error(
        "Failed to send form data:",
        response.status,
        response.statusText
      );
    }
  } catch (error) {
    console.error("Error sending form data:", error);
  }

  // Clear the form after submission if needed
  document.getElementById("admissionForm").reset();
}

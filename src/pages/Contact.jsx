import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [validationMessages, setValidationMessages] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    // Clear validation message when the user types
    setValidationMessages((prevMessages) => ({
      ...prevMessages,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS Service ID, Template ID, and Public Key
    const emailServiceId = "service_q4u27jk";     
    const emailTemplateId = "template_cccqrmi"; 
    const emailPublicKey = "KYasPB8sYpAxIx1lL"; 
    
    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "My Portfolio",
      message: formData.message,
    };

    // Send email using EmailJS
    emailjs
      .send(emailServiceId, emailTemplateId, templateParams, emailPublicKey)
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          alert("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );

    // Validate form fields
    const newValidationMessages = {};
    if (!formData.name) {
      newValidationMessages.name = "Name is required";
    }
    if (!formData.email) {
      newValidationMessages.email = "Email is required";
    }
    if (!formData.message) {
      newValidationMessages.message = "Message is required";
    }

    // If there are validation messages, update the state and return
    if (Object.keys(newValidationMessages).length > 0) {
      setValidationMessages(newValidationMessages);
      return;
    }
  };

  return (
    <main>
      <section>
        <div className="container ">
          <h2>Contact</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {/* Validation message for name */}
                  {validationMessages.name && (
                    <div className="alert alert-danger" role="alert">
                      {validationMessages.name}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {/* Validation message for email */}
                  {validationMessages.email && (
                    <div className="alert alert-danger" role="alert">
                      {validationMessages.email}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message:
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{ height: "200px" }}
                    required
                  ></textarea>
                  {/* Validation message for message */}
                  {validationMessages.message && (
                    <div className="alert alert-danger" role="alert">
                      {validationMessages.message}
                    </div>
                  )}
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;

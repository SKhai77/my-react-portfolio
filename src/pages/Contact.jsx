import React, { useState } from "react";

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
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear validation message when user types
    setValidationMessages((prevMessages) => ({
      ...prevMessages,
      [name]: "", // Clear the validation message for this field
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

    // Add the logic here to handle form submission, and sending data to a server

    // log the form data to the console
    console.log("Form Data:", formData);

    // Reset form fields and validation messages
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setValidationMessages({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <h2>Contact Me</h2>
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
  );
}

export default Contact;

import React, { useState } from 'react';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if(!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage(''); // Clear the error if valid
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) { // Update form state only if there is no error
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for errors before submitting
    if (!errorMessage) {
      // Add logic here to send form data (e.g., using a library like Formspree or EmailJS)
      console.log(formState);
    }
  };

  const validateEmail = (email) => {
    // Basic email validation regex (you can customize this)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
    return (
        <section>
          <h2>Contact Me</h2>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                defaultValue={formState.name} 
                onBlur={handleChange} 
                autoComplete="name"  // Add autocomplete attribute for name
              />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                defaultValue={formState.email} 
                onBlur={handleChange} 
                autoComplete="email" // Add autocomplete attribute for email
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                defaultValue={formState.message} 
                onBlur={handleChange}
              />
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button type="submit">Submit</button>
          </form>
        </section>
      );
}

export default Contact;

import { useState } from 'react';
import './Contact.css';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name, value) => {
    const text = value.trim();

    switch (name) {
      case 'name':
        return text.length < 2
          ? 'Please enter at least 2 characters.'
          : '';

      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)
          ? 'Please enter a valid email address.'
          : '';

      case 'subject':
        return !text ? 'Please select a subject.' : '';

      case 'message':
        return text.length < 10
          ? 'Your message must contain at least 10 characters.'
          : '';

      default:
        return '';
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      newErrors[field] = validateField(
        field,
        formData[field]
      );
    });

    setErrors(newErrors);

    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    const hasErrors = Object.values(newErrors).some(
      (error) => error !== ''
    );

    if (hasErrors) return;

    // Front-end demo: no backend request is sent.
    setSubmitted(true);
    setFormData(initialForm);
    setErrors({});
    setTouched({});
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <span className="contact-label">CONNECT WITH VELORA</span>

        <h1>
          LET'S START
          <br />
          A CONVERSATION.
        </h1>

        <p>
          We'd love to hear from you.
          Share your thoughts, questions, or ideas.
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-info">
          <span className="contact-label">GET IN TOUCH</span>

          <h2>
            WE'RE HERE
            <br />
            TO LISTEN.
          </h2>

          <p>
            Whether you have a question about our
            collections, a collaboration idea, or
            simply want to say hello, reach out.
          </p>

          <div className="contact-detail">
            <span>EMAIL</span>
            <p>hello@velora.example</p>
          </div>

          <div className="contact-detail">
            <span>LOCATION</span>
            <p>Online fashion concept</p>
          </div>

          <div className="contact-image">
            <img
              src="/images/contact.jpg"
              alt="VELORA minimalist fashion showroom"
              loading="lazy"
            />
          </div>
        </div>

        <div className="contact-form-wrapper">
          <span className="contact-label">SEND A MESSAGE</span>

          <h2>CONTACT FORM</h2>

          {submitted && (
            <div className="form-success" role="status">
              Your message passed validation!
              This is a demo, so it has not been sent.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">FULL NAME *</label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={
                  errors.name ? 'name-error' : undefined
                }
              />

              {errors.name && (
                <span id="name-error" className="field-error">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL ADDRESS *</label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? 'email-error' : undefined
                }
              />

              {errors.email && (
                <span id="email-error" className="field-error">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="subject">SUBJECT *</label>

              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={
                  errors.subject ? 'subject-error' : undefined
                }
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="collections">Collections</option>
                <option value="collaboration">Collaboration</option>
                <option value="other">Other</option>
              </select>

              {errors.subject && (
                <span id="subject-error" className="field-error">
                  {errors.subject}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">YOUR MESSAGE *</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? 'message-error' : undefined
                }
              />

              {errors.message && (
                <span id="message-error" className="field-error">
                  {errors.message}
                </span>
              )}
            </div>

            <button type="submit" className="contact-submit">
              SEND MESSAGE
              <span aria-hidden="true">↗</span>
            </button>

            <p className="form-note">
              * Required fields. Demo form — no message is sent.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;

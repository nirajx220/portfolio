
import React, { useState } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    topic: "Tech Discussion",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "", topic: "Tech Discussion" });
  };

  return (
    <section id="contact" className="contact-section">
      <h3 className="contact-title">Contact Me</h3>
      <div className="contact-columns">
        {/* Left: Contact Details */}
        <div className="contact-card">
          <div className="contact-row">
            <MdEmail className="contact-icon" />
            <span className="contact-label">Email:</span>
            <a href="mailto:nirajx220@example.com" className="contact-value">nirajx220@example.com</a>
          </div>
          <div className="contact-row">
            <MdPhone className="contact-icon" />
            <span className="contact-label">Phone:</span>
            <a href="tel:+919876543210" className="contact-value">+91 9876543210</a>
          </div>
          <div className="contact-row">
            <FaGithub className="contact-icon" />
            <span className="contact-label">GitHub:</span>
            <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="contact-value">
              github.com/yourgithub
            </a>
          </div>
          <div className="contact-row">
            <FaLinkedin className="contact-icon" />
            <span className="contact-label">LinkedIn:</span>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="contact-value">
              linkedin.com/in/yourlinkedin
            </a>
          </div>
          <div className="contact-row">
            <FaXTwitter className="contact-icon" />
            <span className="contact-label">X:</span>
            <a href="https://x.com/yourx" target="_blank" rel="noreferrer" className="contact-value">
              x.com/yourx
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h4 className="form-title">Connect with Me</h4>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="form-input"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="form-input"
            value={form.email}
            onChange={handleChange}
            required
          />
          <select
            name="topic"
            className="form-input"
            value={form.topic}
            onChange={handleChange}
            required
          >
            <option>Tech Discussion</option>
            <option>Collaboration</option>
            <option>Freelance Project</option>
            <option>Other</option>
          </select>
          <textarea
            name="message"
            placeholder="Your Message"
            className="form-textarea"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="form-button">Send</button>
          {submitted && <div className="form-success">Thank you! Your message has been sent.</div>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
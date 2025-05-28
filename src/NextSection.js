'use client';
import React, { useState } from 'react';
import './NextSection.css';

const NextSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const handlePrimarySubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    await fetch('https://formspree.io/f/mwpogqwd', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    setShowPopup(true);
    form.reset();
  };

  const handleFollowupSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('mobile', mobile);
    formData.append('message', message);

    await fetch('https://formspree.io/f/mwpogqwd', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    alert('Your message was sent!');
    setMobile('');
    setMessage('');
    setShowPopup(false);
  };

  return (
    <div className="next-section">
      <div className="instagram-follow">
        <a href="https://www.instagram.com/ahmd.rs_" target="_blank" rel="noopener noreferrer">
          Follow me on Instagram
        </a>
      </div>

      <div className="playlist-section">
        <h2>Crank up the energy and boost your productivity with my Work-From-Home Hype-Up Playlist!</h2>
        <p className="sub-heading">
          As a software engineer, I love listening to these tracks to stay focused. 🎧💻
        </p>
        <hr />
        <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DWXRqgorJj26U"
        width="300"
        height="80"
        style={{ border: 'none' }}
        allow="encrypted-media"
        title="Spotify Playlist"
        loading="lazy"
        />

      </div>

        <div className="email-section">
        <h2>Need a website, app, or AI project built?</h2>
        <p>I’m a full-stack software engineer specializing in web apps, eCommerce, and AI chatbot solutions. If you're a business or individual needing a powerful digital product drop your email and let’s build it.</p>
        <form onSubmit={handlePrimarySubmit}>
            <input type="email" name="email" placeholder="Your Email Address" required />
            <button type="submit">Get in Touch</button>
        </form>
        </div>


      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3> Thank you!</h3>
            <p>Ahmad will contact you shortly. You can leave a message below:</p>
            <form onSubmit={handleFollowupSubmit}>
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number (optional)"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <textarea
                name="message"
                placeholder="Your message or question..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <button type="submit">Send Message</button>
              <button type="button" className="close-btn" onClick={() => setShowPopup(false)}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NextSection;

import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <p className="overline">05 / GET IN TOUCH</p>
        <h2>
          Have an idea?
          <br />
          <em>Let’s make it real.</em>
        </h2>
        <div className="contact-methods">
          <a className="email" href={`mailto:${personal.email}`}>
            {personal.email} <span>↗</span>
          </a>
          <a
            className="whatsapp-link"
            href={personal.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
          >
            WhatsApp <span>↗</span>
          </a>
        </div>
        <div className="contact-bottom">
          <p>{personal.location}</p>
          <div>
            {personal.socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
              >
                {social.name}
              </a>
            ))}
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="resume-footer-link"
            >
              RESUME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

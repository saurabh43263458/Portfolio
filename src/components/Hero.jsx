import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenContact }) {
  const { personal } = portfolioData;

  return (
    <section className="hero wrap" id="home">
      <div className="hero-eyebrow">
        <span className="line"></span> {personal.role}
      </div>

      <div className="portrait-wrap">
        <div className="portrait-ring"></div>
        <img
          src={personal.portrait}
          alt={`Portrait of ${personal.name}`}
          onError={(e) => {
            e.currentTarget.src = '/assets/saurabh-mishra.jpg';
          }}
        />
      </div>

      <div className="hero-copy">
        <p className="kicker">Hello, I’m Saurabh.</p>
        <h1>
          {personal.headline.regular1}
          <br />
          <em>{personal.headline.highlight}</em> {personal.headline.regular2}
        </h1>
        <p className="intro">{personal.intro}</p>
        <div className="hero-actions">
          <a className="button" href="#work">
            Explore my work <span>↘</span>
          </a>
          <a
            className="button button-outline"
            href={personal.resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Resume <span>↓</span>
          </a>
          <button
            type="button"
            className="text-link"
            onClick={onOpenContact}
            aria-label="Open contact form"
          >
            Let's talk <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

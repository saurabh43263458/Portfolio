import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const { personal, navLinks } = portfolioData;

  return (
    <header className="nav wrap">
      <a className="brand" href="#home">
        {personal.shortName}<span>®</span>
      </a>
      <nav>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.isExternal ? '_blank' : undefined}
            rel={link.isExternal ? 'noreferrer' : undefined}
            className={link.isExternal ? 'nav-resume-btn' : ''}
          >
            {link.label} {link.isExternal && '↗'}
          </a>
        ))}
      </nav>
      <a className="availability" href={`mailto:${personal.email}`}>
        <i></i> {personal.availability}
      </a>
    </header>
  );
}

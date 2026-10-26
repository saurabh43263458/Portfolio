import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="wrap">
      <a className="brand" href="#home">
        {personal.shortName}<span>®</span>
      </a>
      <p>DESIGNED & BUILT BY {personal.name.toUpperCase()} © {new Date().getFullYear()}</p>
      <a href="#home">BACK TO TOP ↑</a>
    </footer>
  );
}

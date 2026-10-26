import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Expertise() {
  const { expertise } = portfolioData;

  return (
    <section className="expertise wrap section">
      <div className="section-top">
        <p className="overline">03 / EXPERTISE</p>
        <p className="section-note">
          My technical
          <br />
          toolkit.
        </p>
      </div>
      <div className="expertise-list">
        {expertise.map((item) => (
          <div key={item.id}>
            <span>{item.id}</span>
            <h3>{item.title}</h3>
            <p>{item.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

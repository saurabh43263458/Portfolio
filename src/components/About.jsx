import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { stats } = portfolioData;

  return (
    <section className="about wrap section" id="about">
      <div className="about-side">
        <p className="overline">02 / ABOUT ME</p>
        <p className="side-caption">
          Interfaces are not just screens. They are the feeling a product leaves
          behind.
        </p>
      </div>
      <div className="about-main">
        <h2>
          Engineering with a<br />
          <em>human pulse.</em>
        </h2>
        <p>
          I pair a product mindset with strong frontend craft - translating
          complex requirements into clean, intuitive interfaces that are built
          to scale.
        </p>
        <div className="stats-row">
          {stats.map((stat, index) => (
            <div key={index}>
              <strong>
                {stat.value}
                <span>{stat.suffix}</span>
              </strong>
              <small>{stat.label}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

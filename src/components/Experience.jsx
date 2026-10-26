import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section className="experience wrap section" id="experience">
      <div className="section-top">
        <p className="overline">04 / EXPERIENCE</p>
        <p className="section-note">
          Where I’ve learned
          <br />
          by building.
        </p>
      </div>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <article key={index} className="experience-item reveal">
            <div className="experience-date">{exp.date}</div>
            <div>
              <h3>
                {exp.link ? (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="experience-title-link"
                  >
                    {exp.role}
                  </a>
                ) : (
                  exp.role
                )}
              </h3>
              <p className="experience-company">{exp.company}</p>
              <p>{exp.description}</p>
            </div>
            {exp.link ? (
              <a
                href={exp.link}
                target="_blank"
                rel="noreferrer"
                className="experience-arrow"
                aria-label={`Open document for ${exp.role}`}
              >
                ↗
              </a>
            ) : (
              <span className="experience-arrow">↗</span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

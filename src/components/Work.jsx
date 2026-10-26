import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Work() {
  const { projects } = portfolioData;

  const renderVisual = (project) => {
    if (project.image) {
      return (
        <div className="project-visual project-visual-img">
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
          />
        </div>
      );
    }

    return null;
  };

  return (
    <section className="work wrap section" id="work">
      <div className="section-top">
        <p className="overline">01 / SELECTED WORK</p>
        <p className="section-note">
          Products with clarity,
          <br />
          motion and purpose.
        </p>
      </div>

      {projects.map((project) => (
        <article
          key={project.id}
          className={`project project-${project.id} reveal`}
        >
          {renderVisual(project)}
          <div className="project-info">
            <div>
              <p className="project-num">{project.num}</p>
              <h2>
                {project.title}
                <span>—</span>
              </h2>
              <p className="project-desc">{project.desc}</p>
            </div>
            <div className="project-bottom">
              <p>{project.tags}</p>
              <a
                href={project.link}
                target={project.link.startsWith('http') ? '_blank' : undefined}
                rel={project.link.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={project.ariaLabel}
              >
                ↗
              </a>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

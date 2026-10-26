import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Marquee() {
  const { skillsMarquee } = portfolioData;

  const renderTrackText = () =>
    skillsMarquee.map((skill, index) => (
      <React.Fragment key={index}>
        {skill} <b>✦</b>{' '}
      </React.Fragment>
    ));

  return (
    <section className="marquee" aria-label="skills">
      <div className="marquee-track">
        <span>{renderTrackText()}</span>
        <span aria-hidden="true">{renderTrackText()}</span>
      </div>
    </section>
  );
}

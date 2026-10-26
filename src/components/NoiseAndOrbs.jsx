import React from 'react';

export default function NoiseAndOrbs({ orbPosition }) {
  const orbOneStyle = orbPosition
    ? {
        transform: `translate3d(${orbPosition.x}px, ${orbPosition.y}px, 0) translate(-50%, -50%)`
      }
    : undefined;

  return (
    <>
      <div className="noise" aria-hidden="true"></div>
      <div
        className="orb orb-one"
        style={orbOneStyle}
        aria-hidden="true"
      ></div>
      <div className="orb orb-two" aria-hidden="true"></div>
    </>
  );
}

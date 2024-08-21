import gsap from 'gsap';

export const onLoad = () => {
  gsap.fromTo(
    '#background',
    {
      x: 0,
      opacity: 0,
    },
    {
      x: 40,
      opacity: 1,
      duration: 1,
    },
  );

  gsap.fromTo(
    '#bar-graph',
    {
      opacity: 0,
      transformOrigin: 'center',
      scale: 0.8,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
    },
  );

  gsap.fromTo(
    '#development-cost',
    {
      opacity: 0,
      transformOrigin: 'center',
      scale: 0.8,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
    },
  );

  gsap.fromTo(
    '#bar-graph path',
    {
      strokeDashoffset: 1000,
      strokeDasharray: 500,
    },
    {
      strokeDashoffset: 0,
      duration: 10,
    },
  );

  gsap.fromTo(
    '#star-rating',
    {
      opacity: 0,
      transformOrigin: 'center',
      scale: 0.8,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
    },
  );

  gsap.fromTo(
    '#pattern-development',
    {
      opacity: 0,
      transformOrigin: 'center',
      scale: 0.8,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
    },
  );

  gsap.fromTo(
    '#line-graph',
    {
      opacity: 0,
      transformOrigin: 'center',
      scale: 0.8,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
    },
  );
};

export const offLoad = () => {
  gsap.fromTo(
    '#background',
    {
      x: 40,
      opacity: 1,
    },
    {
      x: 0,
      opacity: 0,
      duration: 1,
    },
  );

  gsap.fromTo(
    '#bar-graph',
    {
      opacity: 1,
      scale: 1,
    },
    {
      opacity: 0,
      scale: 0.8,
      duration: 1,
    },
  );

  gsap.fromTo(
    '#development-cost',
    {
      opacity: 1,
      scale: 1,
    },
    {
      opacity: 0,
      scale: 0.8,
      duration: 1,
    },
  );

  gsap.fromTo(
    '#star-rating',
    {
      opacity: 1,
      scale: 1,
    },
    {
      opacity: 0,
      scale: 0.8,
      duration: 1,
    },
  );

  gsap.fromTo(
    '#pattern-development',
    {
      opacity: 1,
      scale: 1,
    },
    {
      opacity: 0,
      scale: 0.8,
      duration: 1,
    },
  );

  gsap.fromTo(
    '#line-graph',
    {
      opacity: 1,
      scale: 1,
    },
    {
      opacity: 0,
      scale: 0.8,
      duration: 1,
    },
  );
};

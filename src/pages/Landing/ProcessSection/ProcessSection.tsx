import gsap from 'gsap';
import { ProcessCard } from './ProcessCard';
import { useEffect } from 'react';
import { processCardsSet } from './data/ProcessCardSet';
import { Title } from '../../../components/typography/Title';

export const ProcessSection = () => {
  useEffect(() => {
    gsap.fromTo(
      '#landing-process',
      {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0,
      },
    );
  }, []);

  return (
    <div
      id='landing-process'
      className='relative my-0 p-6 pb-32 sm:my-64 md:my-0'
    >
      <Title className='text-center sm:mb-4 sm:whitespace-nowrap' size='xl'>
        Create patterns easier <br /> than ever before
      </Title>

      <div className='flex flex-col justify-evenly transition sm:flex-row'>
        <ProcessCard
          title={processCardsSet[0].title}
          description={processCardsSet[0].description}
          Image={processCardsSet[0].Image}
        />
        <Tilda />
        <ProcessCard
          title={processCardsSet[1].title}
          description={processCardsSet[1].description}
          Image={processCardsSet[1].Image}
        />
        <Tilda />
        <ProcessCard
          title={processCardsSet[2].title}
          description={processCardsSet[2].description}
          Image={processCardsSet[2].Image}
        />
      </div>
    </div>
  );
};

const Tilda = () => {
  return (
    <svg
      viewBox='0 0 152 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='m-auto w-1/3 rotate-90 py-10 transition sm:w-1/5 sm:-translate-y-6 sm:rotate-0 sm:py-14'
    >
      <path
        d='M1 14.8897C1 14.8897 32.5273 31.9741 65.7841 9.86112C99.0408 -12.2518 151 14.8896 151 14.8896'
        stroke='#6241D4'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeDasharray='4 8'
      />
    </svg>
  );
};

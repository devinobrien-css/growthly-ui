import { Link } from 'react-router-dom';
import { Title } from '../../components/typography/Title';
import { Paragraph } from '../../components/typography/Paragraph';
import { useEffect } from 'react';
import gsap from 'gsap';

export const Thanks = () => {
  useEffect(() => {
    gsap.fromTo(
      `#thanks-section`,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      },
    );
  }, []);

  return (
    <div
      id='thanks-section'
      className='relative mx-auto mt-12 flex h-screen w-screen max-w-screen-lg overflow-clip md:h-fit'
    >
      <div className='z-10 rounded p-4 sm:w-1/2 sm:p-8'>
        <Title size='xl' className=''>
          Thank you for your interest!
        </Title>
        <br />
        <Paragraph className=''>
          We will be in touch shortly. In the meantime, feel free to{' '}
          <Link to='/' className='text-blue-400'>
            browse our website.
          </Link>
        </Paragraph>
      </div>
      <img
        src='/assets/landing-hero.jpeg'
        alt='Hero'
        className='z-5 absolute -right-24 top-48 w-2/3 object-contain sm:-right-32 sm:top-0 md:relative md:left-0 md:w-1/2'
      />
    </div>
  );
};

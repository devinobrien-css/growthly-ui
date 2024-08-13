import { useEffect } from 'react';
import gsap from 'gsap';
import { Button } from './buttons/Button';

export const Navigation = () => {
  useEffect(() => {
    gsap.to('nav', {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      delay: 0.2,
    });
  });

  return (
    <nav className='mx-auto max-w-screen-xl p-4 opacity-0'>
      <div className='flex justify-between'>
        <div className='flex gap-4 [&>*]:my-auto'>
          <a href='/' className='font-semibold transition hover:scale-105'>
            <img src='/assets/logo.svg' alt='Logo' className='mr-4' />
          </a>
          <a href='#' className='font-semibold transition hover:scale-105'>
            Pricing
          </a>
          <a href='#' className='font-semibold transition hover:scale-105'>
            Resources Center
          </a>
          <a href='#' className='font-semibold transition hover:scale-105'>
            About
          </a>
          <a href='#' className='font-semibold transition hover:scale-105'>
            Contact
          </a>
        </div>

        <div className='flex gap-4'>
          <Button color='clear' onClick={() => alert('placeholder')}>
            Login
          </Button>
          <Button color='blue' onClick={() => alert('placeholder')}>
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

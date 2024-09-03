import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { Button } from './buttons/Button';
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';

export const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  useEffect(() => {
    gsap.to('nav', {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      delay: 0.2,
    });
  });

  return (
    <nav className='relative z-[999] mx-auto max-w-screen-lg p-4 opacity-0'>
      <div className='flex justify-between'>
        <div className='flex gap-8 [&>*]:my-auto'>
          <Link to='/' className='font-semibold transition hover:scale-105 '>
            <img src='/assets/logo.svg' alt='Logo' className='mr-4' />
          </Link>
          <Link
            to='/pricing'
            className='hidden font-semibold transition hover:scale-105 md:block'
          >
            Pricing
          </Link>
          <Link
            to='/pricing'
            className='hidden font-semibold transition hover:scale-105 md:block'
          >
            Contact
          </Link>
        </div>

        <div className='hidden gap-4 md:flex'>
          {/* <Button color='clear' onClick={() => alert('placeholder')}>
            Login
          </Button> */}
          <Button
            color='blue'
            onClick={() => (window.location.href = '/pricing')}
          >
            Sign Up
          </Button>
        </div>
        <button className='block md:hidden' onClick={toggleNav}>
          <Icon
            icon='solar:hamburger-menu-linear'
            width={48}
            className='m-auto transition hover:scale-105'
          />
        </button>
        {isNavOpen && <MobileNavigation closeNav={toggleNav} />}
      </div>
    </nav>
  );
};

interface MobileNavigationProps {
  closeNav: () => void;
}
const MobileNavigation = ({ closeNav }: MobileNavigationProps) => {
  useEffect(() => {
    gsap.to('#mobile-nav', {
      opacity: 1,
      scale: 1,
      duration: 0.1,
      delay: 0,
    });
  });

  const onClose = () => {
    gsap
      .to('#mobile-nav', {
        opacity: 0,
        scale: 0,
        duration: 0.1,
        delay: 0,
      })
      .then(() => {
        closeNav();
      });
  };

  return (
    <div className='fixed left-0 top-0 z-[1000] flex h-screen w-full flex-col bg-gray-200 bg-opacity-30 p-10 backdrop-blur-sm'>
      <div
        id='mobile-nav'
        className='my-auto scale-75 rounded bg-white opacity-0 transition-all ease-in-out'
      >
        <div className='flex justify-between p-4'>
          <Link
            to='/'
            onClick={onClose}
            className='font-semibold transition hover:scale-105'
          >
            <img src='/assets/logo.svg' alt='Logo' className='mr-4' />
          </Link>
          <button onClick={onClose}>
            <Icon
              icon='solar:close-square-broken'
              width={48}
              className='m-auto text-gray-600 transition hover:scale-105'
            />
          </button>
        </div>
        <hr className='mx-auto w-11/12' />
        <div className='mx-auto flex w-11/12 flex-col gap-4 p-4'>
          <Link to='/pricing' onClick={onClose}>
            Pricing
          </Link>
          <Link to='/pricing' onClick={onClose}>
            Contact
          </Link>
        </div>
        <hr className='mx-auto w-11/12' />
        <div className='flex justify-center gap-4 p-4'>
          {/* <Button color='clear' onClick={() => alert('placeholder')}>
            Login
          </Button> */}
          <Button
            color='blue'
            onClick={() => (window.location.href = '/pricing')}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

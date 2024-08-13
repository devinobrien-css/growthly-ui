import gsap from 'gsap';
import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Components = () => {
  useEffect(() => {
    gsap
      .to('#components', {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        delay: 0.5,
      })
      .then(() => {
        gsap.to('#selected', {
          opacity: 1,
          scale: 1,
          duration: 0.5,
        });
      });
  });

  return (
    <div className='mx-auto max-w-screen-xl p-4'>
      <div className='flex'>
        <div
          className='flex scale-95 flex-col border-r pr-8 opacity-0'
          id='components'
        >
          <h1 className='text-3xl font-semibold'>Components</h1>
          <Link to='/docs/typography' className='text-blue-500'>
            Typography
          </Link>
          <Link to='/docs/buttons' className='text-blue-500'>
            Buttons
          </Link>
          <Link to='/docs/inputs' className='text-blue-500'>
            Inputs
          </Link>
        </div>
        <div
          className='max-h-full scale-95 overflow-y-auto px-8 opacity-0'
          id='selected'
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

866 - 331 - 5632;

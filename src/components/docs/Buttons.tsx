import gsap from 'gsap';
import { useEffect } from 'react';
import { AnchorLink } from '../buttons/anchorLink';
import { Button } from '../buttons/button';

export const Buttons = () => {
  useEffect(() => {
    gsap.to('#buttons', {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      delay: 0,
    });
  });

  return (
    <div id='buttons' className='scale-95 opacity-0'>
      <h1 className='text-lg font-semibold'>Buttons</h1>
      <br />
      <div className='flex gap-4'>
        <Button color='blue' onClick={() => alert('Clicked')}>
          Button One
        </Button>

        <Button color='clear' onClick={() => alert('Clicked')}>
          Button Two
        </Button>
      </div>

      <br />
      <h1 className='text-lg font-semibold'>Links</h1>
      <br />
      <div className='flex gap-4'>
        <AnchorLink href='#'>Link One</AnchorLink>
      </div>
    </div>
  );
};

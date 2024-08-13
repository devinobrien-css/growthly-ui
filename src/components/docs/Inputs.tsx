import gsap from 'gsap';
import { useEffect } from 'react';
import { SubmittableInput } from '../inputs/SubmittableInput';

export const Inputs = () => {
  useEffect(() => {
    gsap.to('#inputs', {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      delay: 0,
    });
  });

  return (
    <div id='inputs' className='scale-95 opacity-0'>
      <h1 className='text-lg font-semibold'>Inputs</h1>

      <br />

      <SubmittableInput placeholder='Submit'>Submit</SubmittableInput>
    </div>
  );
};

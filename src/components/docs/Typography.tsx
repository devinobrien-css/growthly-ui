import gsap from 'gsap';
import { useEffect } from 'react';
import { Title } from '../typography/Title';

export const Typography = () => {
  useEffect(() => {
    gsap.to('#Typography', {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      delay: 0,
    });
  });

  return (
    <div id='Typography' className='scale-95 opacity-0'>
      <h1 className='text-lg font-semibold'>Typography</h1>

      <br />

      <Title size='xl'>Title XL</Title>
      <Title size='lg'>Title LG</Title>
      <Title size='md'>Title MD</Title>
      <Title size='sm'>Title SM</Title>
    </div>
  );
};

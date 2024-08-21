import { useEffect, useState } from 'react';
import { Title } from '../../../components/typography/Title';
import { GlobalData } from './assets/GlobalData';
import { InView } from 'react-intersection-observer';
import gsap from 'gsap';
import { GlobalImage } from './assets/GlobalImage';
import { Paragraph } from '../../../components/typography/Paragraph';

export const GlobalSection = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (isInView) {
      gsap.fromTo(
        '#landing-global',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      );
    } else {
      gsap.fromTo('#landing-global', {}, { opacity: 0, y: 50 });
    }
  }, [isInView]);

  return (
    <InView
      as='div'
      id='landing-global'
      threshold={0.3}
      onChange={(inView) => setIsInView(inView)}
      className='relative overflow-clip px-6 py-16 md:px-0'
    >
      <p className='mx-auto text-center text-yellow-300'>Global Scale</p>
      <Title size='xl' className='mb-4 text-center'>
        Tailored specifically for
      </Title>

      <GlobalImage
        isInView={isInView}
        className='my-12 scale-150 transition sm:scale-100'
      />

      <div className='flex flex-wrap gap-y-6'>
        {GlobalData.map((feature) => (
          <div className='w-1/2 pr-4 md:w-1/4' key={feature.title}>
            <Title size='lg'>{feature.title}</Title>
            <Paragraph className='hidden sm:block'>
              {feature.description}
            </Paragraph>
            <Paragraph className='block text-xs sm:hidden'>
              {feature.short_description}
            </Paragraph>
          </div>
        ))}
      </div>
    </InView>
  );
};

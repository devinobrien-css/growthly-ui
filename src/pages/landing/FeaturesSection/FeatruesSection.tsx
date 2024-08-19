import { useEffect, useState } from 'react';
import { Paragraph } from '../../../components/typography/Paragraph';
import { Title } from '../../../components/typography/Title';
import { FeaturesData } from './assets/FeaturesData';
import { FeaturesCard } from './FeaturesCard';
import { InView } from 'react-intersection-observer';
import gsap from 'gsap';

export const FeaturesSection = () => {
  const [isInView, setIsInView] = useState(false);
  const [selectedCard, setSelectedCard] = useState(0);

  useEffect(() => {
    if (isInView) {
      gsap.fromTo(
        '#landing-features',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      );
    } else {
      gsap.set('#landing-features', { opacity: 0, y: 50 });
    }
  }, [isInView]);

  return (
    <InView
      as='div'
      id='landing-features'
      threshold={0.3}
      onChange={(inView) => setIsInView(inView)}
      className='relative flex gap-8 overflow-clip px-6 py-16 md:px-0'
    >
      <div className='md:w-1/2'>
        <Title size='xl' className='mb-4'>
          The power of natural language processing
        </Title>
        <div className='flex flex-col gap-4'>
          {FeaturesData.map((feature, index) => (
            <FeaturesCard
              key={feature.title}
              isInView={isInView}
              isSelected={selectedCard === index}
              setSelectedCard={setSelectedCard}
              index={index}
              {...feature}
            />
          ))}
        </div>
      </div>
      <img
        src='./assets/features-bg.png'
        alt='Features'
        className='hidden md:block md:w-1/2'
      />
    </InView>
  );
};

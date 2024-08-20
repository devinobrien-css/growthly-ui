import { useEffect, useState } from 'react';
import { Paragraph } from '../../components/typography/Paragraph';
import { Title } from '../../components/typography/Title';
import { PricingData } from './assets/PricingData';
import { PricingCard } from './PricingCard';
import { SubmittableInput } from '../../components/inputs/SubmittableInput';
import gsap from 'gsap';

export const Pricing = () => {
  const [selectedCard, setSelectedCard] = useState(2);
  const id = `pricing-section`;
  useEffect(() => {
    gsap.fromTo(
      `#${id}`,
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
      id={id}
      className='mx-auto max-w-screen-lg p-4 opacity-0 transition-all'
    >
      <Title size='xl' className='text-center'>
        Simple, transparent pricing
      </Title>
      <Paragraph className='py-4 text-center'>
        Join the waitlist for 15 credits a month*, FREE.
      </Paragraph>

      <SubmittableInput
        placeholder='Email'
        className='m-auto w-full md:w-1/2'
        onSubmit={() => alert('placeholder')}
      >
        Join Waitlist
      </SubmittableInput>

      <div className='mt-12 flex flex-col gap-y-2 rounded-lg bg-white shadow-lg md:flex-row'>
        {PricingData.map((pricing, index) => (
          <PricingCard
            key={pricing.title}
            isSelected={selectedCard === index}
            isMostPopular={index === 2}
            setSelectedCard={() => setSelectedCard(index)}
            {...pricing}
          />
        ))}
      </div>

      <Paragraph className='mt-4 text-center text-xs'>
        Choose the plan that fits your needs. No hidden fees. Cancel at any
        time.
      </Paragraph>
    </div>
  );
};

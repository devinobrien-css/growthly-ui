import { useState } from 'react';
import { Paragraph } from '../../../components/typography/Paragraph';
import { Title } from '../../../components/typography/Title';
import { BenefitsData } from './assets/BenefitsData';
import { BenefitsImage } from './assets/BenefitsImage';
import { BenefitsCard } from './BenefitsCard';
import { InView } from 'react-intersection-observer';

export const BenefitsSection = () => {
  const [isInView, setIsInView] = useState(false);

  return (
    <InView
      as='div'
      id='landing-process'
      threshold={0.3}
      onChange={(inView) => setIsInView(inView)}
      className='relative flex gap-8 overflow-clip p-8 py-16 md:p-0'
    >
      <BenefitsImage isInView={isInView} className='hidden w-1/2 md:block' />
      <div className='md:w-1/2'>
        <Title size='xl' className='mb-4'>
          The reasons to choose our platform
        </Title>
        <Paragraph>
          Seamless integration into your workflow to test, prototype and
          finalize designs
        </Paragraph>

        <br />

        <div className='flex flex-col flex-wrap gap-y-6 sm:flex-row'>
          {BenefitsData.map((benefit, index) => (
            <BenefitsCard
              key={index}
              index={index}
              isInView={isInView}
              image={benefit.image}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </InView>
  );
};

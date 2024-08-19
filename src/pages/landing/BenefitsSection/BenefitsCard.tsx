import { useEffect } from 'react';
import { Paragraph } from '../../../components/typography/Paragraph';
import { Title } from '../../../components/typography/Title';
import gsap from 'gsap';

export interface BenefitsCardProps {
  isInView?: boolean;
  index?: number;
  image: string;
  title: string;
  description: string;
}
export const BenefitsCard = ({
  isInView,
  index = 0,
  image,
  title,
  description,
}: BenefitsCardProps) => {
  const id = `${title.toLowerCase().split(' ').join('-')}-card`;

  useEffect(() => {
    if (isInView) {
      gsap.fromTo(
        `#${id}`,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.5 * index,
          ease: 'power2.out',
        },
      );
    } else {
      gsap.set(`#${id}`, { opacity: 0, x: 50 });
    }
  }, [isInView]);

  return (
    <div id={id} className='flex gap-4 sm:block sm:w-1/2 sm:pr-8'>
      <img src={image} alt={title} className='my-auto h-8 w-8' />

      <div>
        <Title size='sm'>{title}</Title>
        <Paragraph className='text-sm'>{description}</Paragraph>
      </div>
    </div>
  );
};

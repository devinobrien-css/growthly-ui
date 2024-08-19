import { useEffect } from 'react';
import { Paragraph } from '../../../components/typography/Paragraph';
import { Title } from '../../../components/typography/Title';
import gsap from 'gsap';
import cx from 'classnames';

export interface FeaturesCardProps {
  isInView?: boolean;
  isSelected?: boolean;
  setSelectedCard?: (index: number) => void;
  index?: number;
  image: string;
  title: string;
  description: string;
  url: string;
}
export const FeaturesCard = ({
  isInView,
  isSelected = false,
  setSelectedCard = () => {},
  index = 0,
  image,
  title,
  description,
  url,
}: FeaturesCardProps) => {
  const id = `${title.toLowerCase().split(' ').join('-').replace('&', '')}-card`;

  useEffect(() => {
    if (isInView) {
      gsap.fromTo(
        `#${id}`,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay: 0.5 * index,
        },
      );
    } else {
      gsap.set(`#${id}`, { opacity: 0 });
    }
  }, [isInView]);

  useEffect(() => {
    if (isSelected) {
      gsap.fromTo(
        `#${id}-content`,
        { height: 0, opacity: 0, transformOrigin: 'bottom' },
        {
          height: 80,
          opacity: 1,
          duration: 1,
        },
      );
    } else {
      gsap.fromTo(`#${id}-content`, {}, { opacity: 0, height: 0 });
    }
  }, [isSelected]);

  return (
    <button
      id={id}
      className={cx('rounded-xl p-4 text-left opacity-0', {
        'shadow ': isSelected,
        '': !isSelected,
      })}
      onClick={() => setSelectedCard(index)}
    >
      <div className='flex gap-2'>
        <img src={image} alt={title} className='my-auto h-8 w-8' />
        <Title size='sm'>{title}</Title>
      </div>
      <div id={id + '-content'} className='overflow-y-clip pt-2'>
        <Paragraph className='pb-2 text-sm'>{description}</Paragraph>
        <a href={url} className='text-blue-500 underline'>
          Learn More
        </a>
      </div>
    </button>
  );
};

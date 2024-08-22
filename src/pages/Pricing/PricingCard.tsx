import { useEffect } from 'react';
import { Paragraph } from '../../components/typography/Paragraph';
import { Title } from '../../components/typography/Title';
import {
  SelectedCheckmarkImage,
  UnselecetedCheckmarkImage,
} from './assets/CheckmarkImage';
import { PricingFeatureType } from './assets/PricingData';
import cx from 'classnames';
import gsap from 'gsap';

interface PricingCardProps {
  isMostPopular?: boolean;
  isSelected?: boolean;
  setSelectedCard?: () => void;
  price: number;
  title: string;
  description: string;
  features: PricingFeatureType[];
}
export const PricingCard = ({
  isMostPopular = false,
  isSelected = false,
  setSelectedCard = () => {},
  price,
  title,
  description,
  features,
}: PricingCardProps) => {
  const id = `${title.toLowerCase().split(' ').join('-')}-card`;

  useEffect(() => {
    if (isSelected) {
      gsap.fromTo(
        `#${id}`,
        { y: 0 },
        {
          y: -20,
          duration: 1,
        },
      );
    } else {
      gsap.fromTo(
        `#${id}`,
        {},
        {
          y: 0,
        },
      );
    }
  }, [isSelected]);

  return (
    <button
      id={id}
      className={cx(
        'relative flex flex-col gap-1 overflow-hidden rounded-lg p-6 ease-in-out  md:gap-4',
        {
          'bg-blue-700 text-white': isSelected,
          'hover:bg-gray-50': !isSelected,
        },
      )}
      onClick={() => setSelectedCard()}
    >
      <img
        src='/assets/pricing-bg.svg'
        alt='Pricing'
        className='absolute right-0 top-0 -mt-6'
      />
      {isMostPopular && (
        <div className='absolute right-1 top-1 rounded-lg p-2 text-gray-300'>
          <Paragraph
            className={cx(
              'rounded-full  bg-opacity-70 px-4 py-1 text-xs font-thin uppercase transition-all',
              {
                'bg-blue-900 text-white': isSelected,
              },
            )}
          >
            Most popular
          </Paragraph>
        </div>
      )}

      <div className='flex gap-1 md:my-4'>
        <Title size='xl'>${price}</Title>
        <Paragraph
          className={cx('transition-all', {
            'text-white': isSelected,
          })}
        >
          /month
        </Paragraph>
      </div>

      <Title size='lg'>{title}</Title>
      <Paragraph
        className={cx('hidden text-left text-sm transition-all md:block', {
          'text-white': isSelected,
        })}
      >
        {description}
      </Paragraph>

      <div className='flex flex-col gap-4'>
        {features.map((featureObject) => (
          <Paragraph
            className={cx('flex gap-2 text-left text-sm transition-all', {
              'text-white': isSelected,
              'hidden md:flex': !isSelected,
            })}
            key={featureObject.feature}
          >
            {isSelected ? (
              <SelectedCheckmarkImage />
            ) : (
              <UnselecetedCheckmarkImage />
            )}
            <span>{featureObject.feature}</span>
          </Paragraph>
        ))}
      </div>

      <div
        className={cx(
          'w-full rounded-lg p-2 text-center transition-all ease-in-out',
          {
            'bg-blue-900 text-white': isSelected,
            'bg-blue-100 text-blue-900': !isSelected,
          },
        )}
      >
        Select Plan
      </div>
    </button>
  );
};

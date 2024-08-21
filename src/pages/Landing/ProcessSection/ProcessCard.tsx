import { InView } from 'react-intersection-observer';
import { Paragraph } from '../../../components/typography/Paragraph';
import { Title } from '../../../components/typography/Title';
import { SvgImageProps } from '../../../types/ImageTypes';
import { useState } from 'react';

export interface ProcessCardProps {
  title: string;
  description: string;
  Image: React.JSXElementConstructor<SvgImageProps>;
}
export const ProcessCard = ({
  title,
  description,
  Image,
}: ProcessCardProps) => {
  const [isInView, setIsInView] = useState(false);
  return (
    <InView
      as='div'
      threshold={0.5}
      onChange={(inView) => setIsInView(inView)}
      className='m-auto flex flex-col gap-y-4 sm:w-1/2 md:w-1/4'
    >
      <Image className='mx-auto w-fit' isInView={isInView} />
      <div className='mx-auto flex -translate-y-6 flex-col gap-y-3'>
        <Title className='text-center' size='md'>
          {title}
        </Title>
        <Paragraph className='text-center'>{description}</Paragraph>
      </div>
    </InView>
  );
};

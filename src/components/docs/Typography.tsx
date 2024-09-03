import gsap from 'gsap';
import { useEffect } from 'react';
import { Title } from '../typography/Title';
import { Paragraph } from '../typography/Paragraph';
import { SubParagraph } from '../typography/SubParagraph';

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

      <br />

      <br />

      <Paragraph>
        Paragraph text: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Amet reprehenderit facilis tempora exercitationem. Laboriosam vero aut
        quidem dolorem esse voluptates, velit possimus quia modi, voluptatum
        repudiandae dignissimos vel sunt alias eaque molestiae earum quam
        consequatur sed, placeat dicta? Repellat excepturi voluptatem,
        laudantium similique soluta voluptates! Laborum, exercitationem fuga.
        Commodi, soluta?
      </Paragraph>

      <br />

      <SubParagraph>
        Sub-paragraph text: Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Amet reprehenderit facilis tempora exercitationem. Laboriosam vero
        aut quidem dolorem esse voluptates, velit possimus quia modi, voluptatum
        repudiandae dignissimos vel sunt alias eaque molestiae earum quam
        consequatur sed, placeat dicta? Repellat excepturi voluptatem,
        laudantium similique soluta voluptates! Laborum, exercitationem fuga.
        Commodi, soluta?
      </SubParagraph>
    </div>
  );
};

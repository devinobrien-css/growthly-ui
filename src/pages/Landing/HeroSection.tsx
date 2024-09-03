import { useEffect } from 'react';
import { SubmittableInput } from '../../components/inputs/SubmittableInput';
import { Paragraph } from '../../components/typography/Paragraph';
import { SubParagraph } from '../../components/typography/SubParagraph';
import { Title } from '../../components/typography/Title';
import gsap from 'gsap';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { LoadingModal } from '../../components/LoadingModal';

export const HeroSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      '#landing-hero img',
      {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0,
      },
    );

    gsap.fromTo(
      '#landing-hero .z-10',
      {
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0,
      },
    );
  }, []);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const res = await axios.post(import.meta.env.VITE_GOOGLE_SHEETS_API, null, {
      params: {
        email: e.target.children[0].value,
        subscription: 'Early',
      },
    });
    return res;
  };

  const { mutate, isPending } = useMutation({
    mutationFn: onSubmit,
    onSuccess: () => {
      toast.success('Successfully added to waitlist');
      navigate('/thanks');
    },
  });

  return (
    <>
      {isPending && <LoadingModal />}
      <div
        id='landing-hero'
        className='relative flex overflow-x-clip px-6 py-24'
      >
        <div className='z-10 w-full md:w-1/2'>
          <Title className='mb-4 sm:whitespace-nowrap' size='xl'>
            AI-Powered <br className='block sm:hidden' /> pattern <br />
            generation in <br />
            seconds
          </Title>

          <Paragraph className='hidden md:block'>
            Rapidly bring your design visions to life instantly{' '}
            <br className='hidden md:block' />
            with our AI pattern generator.
          </Paragraph>

          <Paragraph className='hidden sm:block md:hidden'>
            Effortlessly prototype and focus on <br />
            creativity, not complexity.
          </Paragraph>

          <Paragraph className='block w-2/3 sm:hidden'>
            Bring your design visions to life instantly.
          </Paragraph>

          <SubmittableInput
            className='my-2 w-full max-w-[350px] sm:w-1/2 md:w-5/6'
            placeholder='Email'
            onSubmit={mutate}
          >
            Join Waitlist
          </SubmittableInput>

          <SubParagraph className='hidden md:block'>
            *Join the waitlist for <b>5 free patterns</b> on launch.
          </SubParagraph>

          <div className='mt-12 hidden gap-8 md:flex'>
            <div>
              <Title className='mb-4' size='xl'>
                $500+
              </Title>
              <Paragraph>
                Average spent on <br />
                clothing patterns
              </Paragraph>
            </div>
            <div>
              <Title className='mb-4' size='xl'>
                85%
              </Title>
              <Paragraph>
                People rely on <br />
                pre-made patterns
              </Paragraph>
            </div>
          </div>
        </div>
        <img
          src='/assets/landing-hero.jpeg'
          alt='Hero'
          className='z-5 absolute -right-24 w-2/3 object-cover sm:-right-32 sm:top-12 md:relative md:left-0 md:top-0 md:w-1/2'
        />
      </div>
    </>
  );
};

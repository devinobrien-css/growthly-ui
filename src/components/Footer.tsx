import { useEffect } from 'react';
import { SubmittableInput } from './inputs/SubmittableInput';
import { Paragraph } from './typography/Paragraph';
import { Title } from './typography/Title';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LoadingModal } from './LoadingModal';

export const Footer = () => {
  const navigate = useNavigate();

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
      <footer className='bg-blue bg-cover'>
        <div className='bg-footer bg-cover bg-no-repeat p-8  sm:p-14 md:bg-right-top md:p-20'>
          <div className='mx-auto max-w-screen-lg md:p-6'>
            <div className='text-center sm:text-left'>
              <Title size='xl' className='text-white'>
                Ready to get started?
              </Title>

              <p className='my-4 text-sm text-gray-400 md:w-1/3'>
                Seamless integration into your workflow to test, prototype and
                finalize designs.
              </p>
            </div>
            <SubmittableInput
              placeholder='Email'
              className='mx-auto w-fit sm:m-0'
              onSubmit={mutate}
            >
              Join Waitlist
            </SubmittableInput>
          </div>
        </div>
        <div className='p-8'>
          <div className='mx-auto max-w-screen-lg border-y border-gray-400 p-6'>
            <img
              src='/assets/logo.svg'
              alt='logo'
              className='rounded bg-white'
            />
            <div className='flex flex-col justify-between gap-8 py-4 md:flex-row'>
              <p className='text-gray-400 md:w-1/3'>
                Effortlessly prototype and focus on creativity, not complexity.
              </p>

              <div className='flex h-0 flex-row flex-wrap justify-between gap-8 overflow-clip md:flex-nowrap'>
                <div className='flex flex-col gap-4 md:mx-4'>
                  <Title size='sm' className='text-white'>
                    Product
                  </Title>
                  <a
                    href='#'
                    className='block whitespace-nowrap text-gray-400 transition hover:scale-105'
                  >
                    Landing Pages
                  </a>
                  <a
                    href='#'
                    className='block whitespace-nowrap text-gray-400 transition hover:scale-105'
                  >
                    Pricing
                  </a>
                  <a
                    href='#'
                    className='block whitespace-nowrap text-gray-400 transition hover:scale-105'
                  >
                    Benefits
                  </a>
                  <a
                    href='#'
                    className='block whitespace-nowrap text-gray-400 transition hover:scale-105'
                  >
                    Features
                  </a>
                </div>

                <div className='flex flex-col gap-4 md:mx-4'>
                  <Title size='sm' className='text-white'>
                    Company
                  </Title>
                  <a
                    href='#'
                    className='block whitespace-nowrap text-gray-400 transition hover:scale-105'
                  >
                    About
                  </a>
                  <a
                    href='#'
                    className='block whitespace-nowrap text-gray-400 transition hover:scale-105'
                  >
                    Privacy Policy
                  </a>
                  <a
                    href='#'
                    className='block whitespace-nowrap text-gray-400 transition hover:scale-105'
                  >
                    Terms & Conditions
                  </a>
                  <a
                    href='#'
                    className='block whitespace-nowrap text-gray-400 transition hover:scale-105'
                  >
                    Partners
                  </a>
                  <a
                    href='#'
                    className='block whitespace-nowrap text-gray-400 transition hover:scale-105'
                  >
                    Contact
                  </a>
                </div>

                <div className='flex flex-col gap-4 md:mx-4'>
                  <Title size='sm' className='text-white'>
                    Resources
                  </Title>
                  <a
                    href='#'
                    className='block whitespace-nowrap text-gray-400 transition hover:scale-105'
                  >
                    Guides and Resources
                  </a>
                  <a
                    href='#'
                    className='block whitespace-nowrap text-gray-400 transition hover:scale-105'
                  >
                    Blog
                  </a>
                  <a
                    href='#'
                    className='block whitespace-nowrap text-gray-400 transition hover:scale-105'
                  >
                    Tools
                  </a>
                  <a
                    href='#'
                    className='block whitespace-nowrap text-gray-400 transition hover:scale-105'
                  >
                    Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mx-auto flex max-w-screen-lg justify-end gap-6 px-8'>
          <a href='#' className='text-gray-400 transition hover:scale-110'>
            <img src='/assets/instagram.svg' alt='instagram' />
          </a>
          <a href='#' className='text-gray-400 transition hover:scale-110'>
            <img src='/assets/twitter.svg' alt='twitter' />
          </a>
          <a href='#' className='text-gray-400 transition hover:scale-110'>
            <img src='/assets/linkedin.svg' alt='linkedin' />
          </a>
        </div>
        <div className='p-8'>
          <p className='mx-auto max-w-screen-lg border-t border-gray-400 pt-4 text-center font-light text-gray-400'>
            © 2024 GrowthlyAI. All Right Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

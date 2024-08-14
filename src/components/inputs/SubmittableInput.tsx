import gsap from 'gsap';
import { FormHTMLAttributes, useEffect } from 'react';
import cx from 'classnames';

export interface SubmittableInputProps
  extends FormHTMLAttributes<HTMLFormElement> {
  animate?: boolean;
  children?: React.ReactNode | string;
  placeholder?: string;
}
export const SubmittableInput = ({
  animate = true,
  children,
  className,
  placeholder,
  onSubmit,
  ...rest
}: SubmittableInputProps) => {
  const id = `submittable-input-${Math.random().toString(36).slice(2)}`;

  useEffect(() => {
    if (animate) {
      gsap
        .to(`#${id}`, {
          opacity: 1,
          scale: 1.01,
          duration: 0.2,
          delay: 0.5,
        })
        .then(() => {
          gsap.to(`#${id}`, {
            scale: 1,
            duration: 0.2,
          });
        });
    }
  });

  return (
    <form
      {...rest}
      id={animate ? id : undefined}
      onSubmit={onSubmit}
      className={cx(
        'flex justify-between rounded border border-gray-300 bg-white p-2',
        className,
        {
          'scale-95 opacity-0': animate,
          'w-fit': !className,
        },
      )}
    >
      <input
        placeholder={placeholder}
        className={cx(
          'w-2/3 px-4 py-2 font-light transition duration-300 ease-in-out',
          'outline-0',
        )}
      />
      <button
        className={cx(
          'whitespace-nowrap px-4 py-2 font-semibold transition duration-300 ease-in-out',
          'max-w-1/3 rounded bg-blue-700 text-xs text-white hover:bg-blue-800 active:bg-blue-600',
        )}
      >
        {children}
      </button>
    </form>
  );
};

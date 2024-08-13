import cx from 'classnames';
import gsap from 'gsap';
import { useEffect } from 'react';

export enum ButtonColorways {
  blue = 'blue',
  clear = 'clear',
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  animate?: boolean;
  children: string;
  color: keyof typeof ButtonColorways;
}
export const Button = ({
  animate = true,
  color,
  children,
  ...rest
}: ButtonProps) => {
  const id = `button-${Math.random().toString(36).slice(2)}`;

  useEffect(() => {
    if (animate) {
      gsap
        .to(`#${id}`, {
          opacity: 1,
          scale: 3,
          duration: 0.2,
          delay: 0.2,
        })
        .then(() => {
          gsap.to(`#${id}`, {
            scale: 1,
            duration: 0.2,
            delay: 0,
          });
        });
    }
  });

  return (
    <button
      id={animate ? id : undefined}
      className={cx(
        'px-4 py-2 font-semibold transition duration-300 ease-in-out',
        {
          'scale-95 opacity-0': animate,
          'rounded bg-blue-700 text-white hover:bg-blue-800 active:bg-blue-600':
            color === ButtonColorways.blue,
          'rounded bg-transparent hover:bg-blue-100 active:bg-blue-300':
            color === ButtonColorways.clear,
        },
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

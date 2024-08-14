import { useEffect } from 'react';
import cx from 'classnames';
import gsap from 'gsap';

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children: string | React.ReactNode;
  size: 'sm' | 'md' | 'lg' | 'xl';
}
export const Title = ({ className, children, size, ...rest }: TitleProps) => {
  const id = `title-${Math.random().toString(36).slice(2)}`;

  useEffect(() => {
    gsap.to(`#${id}`, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      delay: 0,
    });
  });

  return (
    <h1
      id={id}
      className={cx(className, 'font-semibold transition-all', {
        'text-3xl sm:text-5xl': size === 'xl',
        'text-2xl': size === 'lg',
        'text-xl': size === 'md',
        'text-lg': size === 'sm',
      })}
      {...rest}
    >
      {children}
    </h1>
  );
};

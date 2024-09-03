import { AnchorHTMLAttributes } from 'react';
import cx from 'classnames';

export interface AnchorLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  animate?: boolean;
  children?: string;
  className?: string;
}
export const AnchorLink = ({
  animate,
  children,
  className,
  ...rest
}: AnchorLinkProps) => {
  return (
    <a
      {...rest}
      className={cx(className, 'font-semibold text-blue-500 underline', {
        'opacity-0 transition duration-300 ease-in-out': animate,
      })}
    >
      {children}
    </a>
  );
};

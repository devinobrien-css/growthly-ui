import cx from 'classnames';

export const Paragraph = ({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={cx(className, 'text-base font-light text-gray-600')}
      {...rest}
    >
      {children}
    </p>
  );
};

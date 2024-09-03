import cx from 'classnames';

export const Paragraph = ({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={cx('text-base font-light text-gray-600', className)}
      {...rest}
    >
      {children}
    </p>
  );
};

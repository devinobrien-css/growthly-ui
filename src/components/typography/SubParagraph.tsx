import cx from 'classnames';

export const SubParagraph = ({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={cx(className, 'text-sm font-light italic text-gray-600')}
      {...rest}
    >
      {children}
    </p>
  );
};

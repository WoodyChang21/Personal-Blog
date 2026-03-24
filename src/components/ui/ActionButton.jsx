function ActionButton({
  as: Component = 'a',
  variant = 'solid',
  className = '',
  children,
  ...props
}) {
  const variantClass =
    variant === 'outline' ? 'action-button action-button-outline' : 'action-button action-button-solid';

  return (
    <Component className={`${variantClass} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}

export default ActionButton;

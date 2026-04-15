/**
 * variant: 'solid' | 'outline' | 'solid-ink' | 'outline-ink'
 *   solid / outline  → dark-bg context (default)
 *   solid-ink / outline-ink → light-bg context
 */
function ActionButton({
  as: Component = 'a',
  variant = 'solid',
  className = '',
  children,
  ...props
}) {
  const variantClass = {
    solid: 'action-button action-button-solid',
    outline: 'action-button action-button-outline',
    'solid-ink': 'action-button action-button-solid-ink',
    'outline-ink': 'action-button action-button-outline-ink',
  }[variant] ?? 'action-button action-button-solid';

  return (
    <Component className={`${variantClass} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}

export default ActionButton;

export const BootstrapTooltip = ({ children, title, placement = 'top' }) => {
  return (
    <span 
      data-bs-toggle="tooltip" 
      data-bs-placement={placement} 
      title={title}
    >
      {children}
    </span>
  );
};
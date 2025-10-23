export const BootstrapButton = ({ children, variant = 'primary', onClick, type = 'button', size, className = '', ...props }) => {
  const sizeClass = size ? `btn-${size}` : '';
  return (
    <button 
      type={type}
      className={`btn btn-${variant} ${sizeClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
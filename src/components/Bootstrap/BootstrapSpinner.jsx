export const BootstrapSpinner = ({ variant = 'primary', grow = false, size }) => {
  const spinnerType = grow ? 'spinner-grow' : 'spinner-border';
  const sizeClass = size ? `spinner-border-${size}` : '';
  
  return (
    <div className={`${spinnerType} ${sizeClass} text-${variant}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};
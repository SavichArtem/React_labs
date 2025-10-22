export const BootstrapProgress = ({ value, variant = 'primary', striped = false, animated = false }) => {
  const stripedClass = striped ? 'progress-bar-striped' : '';
  const animatedClass = animated ? 'progress-bar-animated' : '';
  
  return (
    <div className="progress">
      <div 
        className={`progress-bar bg-${variant} ${stripedClass} ${animatedClass}`}
        style={{ width: `${value}%` }}
      >
        {value}%
      </div>
    </div>
  );
};
export const BootstrapBadge = ({ children, variant = 'primary' }) => {
  return (
    <span className={`badge bg-${variant}`}>
      {children}
    </span>
  );
};
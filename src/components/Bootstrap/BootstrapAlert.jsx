export const BootstrapAlert = ({ children, variant = 'primary', dismissible = false }) => {
  return (
    <div className={`alert alert-${variant} ${dismissible ? 'alert-dismissible' : ''}`}>
      {children}
      {dismissible && (
        <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
      )}
    </div>
  );
};
export const BootstrapOffcanvas = ({ show, onClose, title, placement = 'end', children }) => {
  return (
    <div 
      className={`offcanvas offcanvas-${placement} ${show ? 'show' : ''}`} 
      tabIndex="-1"
      style={{ visibility: show ? 'visible' : 'hidden' }}
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">{title}</h5>
        <button 
          type="button" 
          className="btn-close" 
          onClick={onClose}
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        {children}
      </div>
    </div>
  );
};
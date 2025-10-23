export const BootstrapToast = ({ show, onClose, title, body }) => {
  return (
    <div className={`toast ${show ? 'show' : ''}`} style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1055 }}>
      <div className="toast-header">
        <strong className="me-auto">{title}</strong>
        <button type="button" className="btn-close" onClick={onClose}></button>
      </div>
      <div className="toast-body">
        {body}
      </div>
    </div>
  );
};
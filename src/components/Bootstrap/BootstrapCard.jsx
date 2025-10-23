export const BootstrapCard = ({ children, title, subtitle, image, selected = false, onClick }) => {
  return (
    <div 
      className={`card h-100 ${selected ? 'border-primary border-2' : ''}`}
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    >
      {image && <img src={image} className="card-img-top" alt="..." />}
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {subtitle && <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>}
        <div className="card-text">{children}</div>
      </div>
    </div>
  );
};
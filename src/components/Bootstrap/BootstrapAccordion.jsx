export const BootstrapAccordion = ({ items }) => {
  return (
    <div className="accordion" id="accordionExample">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header">
            <button 
              className="accordion-button collapsed" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target={`#collapse${index}`}
            >
              {item.title}
            </button>
          </h2>
          <div id={`collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
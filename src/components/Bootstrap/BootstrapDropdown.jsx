export const BootstrapDropdown = ({ title, items }) => {
  return (
    <div className="dropdown">
      <button className="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        {title}
      </button>
      <ul className="dropdown-menu">
        {items.map((item, index) => (
          <li key={index}>
            <a className="dropdown-item" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export const BootstrapNavbar = ({ children, brand }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {brand && <span className="navbar-brand">{brand}</span>}
        <div className="navbar-collapse">
          {children}
        </div>
      </div>
    </nav>
  );
};
import '../Footer/Footer.css';

export function Footer(){
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_content">
          <p className="footer_text">© 2025 Student Risk Assessment System</p>
          <p className="footer_link">
            <a href="https://github.com/SavichArtem" target="_blank" rel="noopener noreferrer" className="footer_link-item">GitHub</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
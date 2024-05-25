// Import Fontawesome and the icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

// Footer component
const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="container text-center">
        <div className="icons">
          {/* Links to external profiles */}
          <ul>
            <li>
              <a
                href="https://github.com/SKhai77"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sian-l-khai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
        <p>&copy; 2024 | Designed and Developed by Sian Khai.</p>
      </div>
    </footer>
  );
};

// Export Footer component
export default Footer;

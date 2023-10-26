// Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

// Footer component
const Footer = () => {
  return (
    <footer className="w-100 mt-auto">
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
                href="https://www.linkedin.com/in/sian-khai-8a1a60296/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
        <p>&copy; 2023 | Sian - MERN Full Stack Portfolio</p>
      </div>
    </footer>
  );
};

// Export Footer coponent
export default Footer;

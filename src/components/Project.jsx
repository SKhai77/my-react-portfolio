import React, { useState } from "react";

// Import Fontawesome and the icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";

const Project = ({
  title,
  description,
  imageUrl,
  githubLink,
  deployedLink,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={`.${imageUrl}`}
          alt={title}
          className="img-fluid"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "fill",
            border: isHovered ? "2px solid #dbbe17" : "white",
            opacity: isHovered ? "0.1" : "1",
            transition: "opacity 0.3s ease",
          }}
        />
        {isHovered && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
            }}
          >
            <h3>{title}</h3>
            <p style={{ color: "#dbbe17", fontWeight: "bold" }}>{description}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
                opacity: "1",
              }}
            >
              <p>
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "1rem",
                    marginRight: "5px",
                    opacity: "1",
                    textDecoration: "none",
                    color: isHovered ? "#dbbe17" : "white",
                  }}
                >
                  <FontAwesomeIcon icon={faGithub} /> Code
                </a>
                <a
                  href={deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "1rem",
                    marginLeft: "5px",
                    opacity: "1",
                    textDecoration: "none",
                    color: isHovered ? "#dbbe17" : "white",
                  }}
                >
                  <i className="fa fa-external-link-square"></i> www
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;

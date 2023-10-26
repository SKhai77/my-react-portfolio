const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <div>
        {/* Links to deployed application and GitHub repository */}
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed Link
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
    </div>
  );
}

export default Project;

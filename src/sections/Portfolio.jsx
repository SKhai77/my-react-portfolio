import Project from "../components/Project"; 

function Portfolio() {
  const projects = [
    // { title: "Project 1", image: "image-url", deployedLink: "deployed-link", githubLink: "github-link" },
  
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;


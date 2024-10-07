// Import project component
import Project from "../components/Project";

function Portfolio() {
  const projects = [
    {
      title: "AI Multi-Language Translator",
      description: "OpenAI API/LangChain/Express/Node",
      imageUrl: "./assets/images/ai-multi-language-translator.jpg",
      githubLink: "https://github.com/SKhai77/ai-multi-language-translator",
      deployedLink: "https://ai-multi-language-translator.vercel.app",
    },
    {
      title: "Roam Ready - Travler blog",
      description: "MERN Stack",
      imageUrl: "./assets/images/roam-ready.jpg",
      githubLink: "https://github.com/SKhai77/roam-ready",
      deployedLink: "https://roam-ready-79c746e8ffc3.herokuapp.com/",
    },
    {
      title: "Books Search Engine",
      description: "NoSQL/GraphQL/Express/React/Node",
      imageUrl: "./assets/images/books-search-engine.jpg",
      githubLink: "https://github.com/SKhai77/books-search-engine",
      deployedLink:
        "https://skhai77-books-search-engine-20032e3d896f.herokuapp.com",
    },
    {
      title: "J.A.T.E - Text Editor",
      description: "IndexedDB/SWA/Webpack",
      imageUrl: "./assets/images/jate-text-editor.jpg",
      githubLink: "https://github.com/SKhai77/jate-text-editor",
      deployedLink:
        "https://skhai77-jate-text-editor-7aaafa1ed889.herokuapp.com",
    },
    {
      title: "Build Link - Construction job board",
      description: "MySQL/Express/Nodejs",
      imageUrl: "./assets/images/build-link.jpg",
      githubLink: "https://github.com/SKhai77/build-link",
      deployedLink: "https://build-link-10beabbadf73.herokuapp.com",
    },
    {
      title: "MVC Tech Blog",
      description: "Bcrypt/Handlebars/Sequelize",
      imageUrl: "./assets/images/mvc-tech-blog.jpg",
      githubLink: "https://github.com/SKhai77/mvc-tech-blog",
      deployedLink: "https://sk77-mvctechblog-e599ac753156.herokuapp.com",
    },
  ];

  return (
    <main>
      <section>
        <div className="container">
          <h2>Portfolio</h2>
          <div className="row">
            {projects.map((project, index) => (
              <div className="col-sm-6 col-md-4 g-4" key={index}>
                <Project
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  githubLink={project.githubLink}
                  deployedLink={project.deployedLink}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;

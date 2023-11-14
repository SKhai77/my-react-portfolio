// Import project component
import Project from "../components/Project";
// Import Card and Button from react bootstrap
import { Card, Button } from "react-bootstrap";

function Portfolio() {
  const projects = [
    {
      title: "Books Search Engine",
      imageUrl: "./src/assets/images/books-search-engine.png",
      githubLink: "https://github.com/SKhai77/books-search-engine",
      deployedLink:
        "https://skhai77-books-search-engine-20032e3d896f.herokuapp.com",
    },
    {
      title: "Note Taker",
      imageUrl: "./src/assets/images/note-taker-homepage.png",
      githubLink: "https://github.com/SKhai77/jate-text-editor",
      deployedLink:
        "https://skhai77-jate-text-editor-7aaafa1ed889.herokuapp.com",
    },
    {
      title: "Social Versal",
      imageUrl: "./src/assets/images/social-versal.png",
      githubLink: "https://github.com/SKhai77/social-versal",
      deployedLink:
        "https://drive.google.com/file/d/1PVjxtVQOURVPO-SJqWwcUiLnlA28BCdc/view",
    },
    {
      title: "Build Link",
      imageUrl: "./src/assets/images/build-link.png",
      githubLink: "https://github.com/SKhai77/build-link",
      deployedLink: "https://build-link-10beabbadf73.herokuapp.com",
    },
    {
      title: "MVC Tech Blog",
      imageUrl: "./src/assets/images/mvc-tech-blog.png",
      githubLink: "https://github.com/SKhai77/mvc-tech-blog",
      deployedLink: "https://sk77-mvctechblog-e599ac753156.herokuapp.com",
    },
    {
      title: "Ecommerce Back-end",
      imageUrl: "./src/assets/images/ecommerce-back-end.png",
      githubLink: "https://github.com/SKhai77/ecommerce-back-end",
      deployedLink:
        "https://drive.google.com/file/d/1ZC9RToX-dUfTEyTq9dFKVJGEk1nl478u/view",
    },
    {
      title: "Employee Tracker",
      imageUrl: "./src/assets/images/employee-tracker.png",
      githubLink: "https://github.com/SKhai77/employee-tracker",
      deployedLink:
        "https://drive.google.com/file/d/1ccQUpSUB7mIgQUvrM_7_txxJu9rIuw23/view",
    },
    {
      title: "Pro Readme Generator",
      imageUrl: "./src/assets/images/pro-readme-generator.png",
      githubLink: "https://github.com/SKhai77/pro-readme-generator",
      deployedLink:
        "https://drive.google.com/file/d/1MHTbz1pqdGKrkB4UYTTfOhWUTo2Ho4ha/view",
    },
    {
      title: "SVG Logo Maker",
      imageUrl: "./src/assets/images/svg-logo-maker.png",
      githubLink: "https://github.com/SKhai77/svg-logo-maker",
      deployedLink:
        "https://drive.google.com/file/d/1z6xt86CgY1ECtyz59uTez2jK5REXbXCx/view",
    },
    {
      title: "Work Day Scheduler",
      imageUrl: "./src/assets/images/work-day-scheduler.png",
      githubLink: "https://github.com/SKhai77/work-day-scheduler",
      deployedLink: "https://skhai77.github.io/work-day-scheduler",
    },
    {
      title: "Weather Dashboard",
      imageUrl: "./src/assets/images/weather-dashboard.png",
      githubLink: "https://github.com/SKhai77/weather-dashboard",
      deployedLink: "https://skhai77.github.io/weather-dashboard",
    },
    {
      title: "Code Quize",
      imageUrl: "./src/assets/images/code-quiz-page.png",
      githubLink: "https://github.com/SKhai77/js-code-quiz",
      deployedLink: "https://skhai77.github.io/js-code-quiz",
    },
    {
      title: "Password Generator",
      imageUrl: "./src/assets/images/ps-generator.png",
      githubLink: "https://github.com/SKhai77/js-password-generator",
      deployedLink: "https://skhai77.github.io/js-password-generator",
    },
    {
      title: "Responsive Portfolio",
      imageUrl: "./src/assets/images/responsive-portfolio.png",
      githubLink: "https://github.com/SKhai77/siankhai-portfolio-responsive",
      deployedLink: "https://skhai77.github.io/siankhai-portfolio-responsive",
    },
    {
      title: "Refactoring Horiseon Page",
      imageUrl: "./src/assets/images/refactoring-page.png",
      githubLink: "https://github.com/SKhai77/horiseon-code-refact",
      deployedLink: "https://skhai77.github.io/horiseon-code-refact/index.html",
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="container-fluid text-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {projects.map((project, index) => (
            <div className="col" key={index}>
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
  );
}

export default Portfolio;

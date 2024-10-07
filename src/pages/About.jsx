function AboutMe() {
  return (
    <main>
      <section>
        <div className="container">
          <h2>About Me</h2>
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="./assets/images/sian-photo.png"
                  alt="My passport size photo"
                  className="img-fluid rounded-circle pt-3 pb-3"
                  style={{ maxWidth: "200px", maxHeight: "200px" }}
                />
              </div>
              <p>
                Hello, welcome to my portfolio! My name is Sian Khai, and I am a
                Full Stack Web Developer with a passion for creating dynamic and
                responsive applications. My work spans various projects, from
                building travel blogs to developing AI-powered tools.
              </p>
              <p>
                I currently work as a ride-share driver, but prior to that I
                worked for a non-profit organization for over 5 years as an
                employment specialist for newly arrived immigrants and later as
                a financial coach.
              </p>
              <p>
                I have completed the Full Stack Web Development Boot Camp at SMU
                and graduated as of November of 2023. I have been able to create
                projects from the Boot Camp using MERN stack technologies.
                Recently, I have also acquired an AI Prompt Engineering
                certificate. My projects include an AI JavaScript Coding
                Assistant and a Multi-Language Translator, both of which have
                helped me refine my skills in AI integration and practical
                problem-solving. My goal is to become a successful developer,
                leveraging my skills to innovate and develop new technologies
                that solve real-world problems and contribute to the advancement
                of the tech community.
              </p>
              <p>Thank you for visiting my portfolio.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutMe;

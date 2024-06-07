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
                Hello, my name is Sian Khai. I have been passionate about
                Information Technology and web development since 2006. I learned
                some basic web design when I was in India. I also took a
                multimedia developer course at Richland Community College in
                Dallas. However, I wasn't able to continue in the field due to
                my situation at that time.
              </p>
              <p>
                I have been working as a ride-share driver since May of 2022.
                Before that, I worked for a non-profit organization for over 5
                years as an employment specialist for newly arrived immigrants
                and later as a financial coach.
              </p>
              <p>
                I have completed the Full Stack Web Development Boot Camp at SMU
                and graduated as of November of 2023. I have been able to create
                projects from the Boot Camp using MERN stack technologies. My
                goal is to become a successful developer, leveraging my skills
                to innovate and develop new technologies that solve real-world
                problems and contribute to the advancement of the tech
                community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutMe;

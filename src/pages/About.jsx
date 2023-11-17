function AboutMe() {
  return (
    <main>
      <section>
        <div className="container-fluid">
          <h2>About me</h2>
          <div className="row mt-4">
            <div className="col-md-12">
              <img
                src="./assets/images/my-passport.png"
                alt="My passport size photo"
                className="img-fluid rounded-circle pt-3 pb-3"
                style={{ maxWidth: "150px", maxHeight: "150px" }}
              />
              <p>
                Hello! My name is Sian Khai. I have been passionate about web
                development since 2006, and I learned some basic web design when
                I was in India. Unfortunately, I wasn't able to continue in the
                field due to my situation.
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
                many projects from the Boot Camp using various coding languages,
                mainly MERN stack. My goal is to acquire a stable career in this
                field of work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutMe;

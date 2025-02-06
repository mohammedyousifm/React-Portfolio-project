import "./achievement.css"


const Achievement = () => {

  return (
    <>
      <h1 className="title-all">Achievement <i className="fa-solid fa-trophy"></i></h1>
      <section id="Achievement" className="Achievement flex">
          <div className="left-section">
            <p className="subtitle">
            My Achievements <i className="fa-solid fa-trophy"></i>
            </p>
            <h1 className="title">Achievements Earned Through My Experience</h1>
            <p className="subtitle">
            These accomplishments encompass web development projects and cybersecurity expertise.
            </p>

            <a><button>More Details</button></a>
          </div>
          <div className="right-section flex">
            <div className="card">
                <span className="icon">
                 <i className="fa-solid fa-user-plus"></i>
                </span>
              <h1 className="title">
                20
              </h1>
              <h5 className="subtitle">Happy Cutomer</h5>
            </div>
            <div className="card">
                <span className="icon">
                <i className="fa-solid fa-diagram-project"></i>
                </span>
              <h1 className="title">
                10
              </h1>
              <h5 className="subtitle">Finished Projects</h5>
            </div>
            <div className="card">
                <span className="icon">
                <i className="fa-solid fa-certificate"></i>
                </span>
              <h1 className="title">
                5
              </h1>
              <h5 className="subtitle">certificate</h5>
            </div>
            <div className="card">
                <span className="icon">
                <i className="fa-solid fa-calendar-days"></i>
                </span>
              <h1 className="title">
                2
              </h1>
              <h5 className="subtitle">year experience</h5>
            </div>
          </div>
      </section>


        <div className="achievement-box">
          <h2>My Progress tryhackme</h2>
          <iframe
            src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3336641"
            className="thm-badge">
          </iframe>
       </div>

    </>
  );
}

export default Achievement;

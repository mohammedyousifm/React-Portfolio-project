import { useState } from "react";
import "./main.css";
import { motion } from "motion/react"

const myProjects = [
  { projectTitle: "React Portfolio", category: "JavaScript",      description: "This is Portfolio Project developed by React",               link: "https://mohammedyousif.com/" ,       imagePath: "/projects/react/1.png" },
  { projectTitle: "Estate Website", category: "JavaScript",       description: "This is Estate Website this Project developed by React js",  link: "https://securefilesharing.online/" , imagePath: "/projects/wordpress/2.png" },
  { projectTitle: "Prayer times website", category: "JavaScript", description: "This is Prayer times Project developed by React",            link: "https://securefilesharing.online/" , imagePath: "/projects/react/2.png" },
  { projectTitle: "Secure File Sharing", category: "Laravel",     description: "This is Secure File Sharing Project developed by Laravel",   link: "https://securefilesharing.online/" , imagePath: "/projects/laravel/1.png" },
  { projectTitle: "Laravel Project 2", category: "Laravel",       description: "This is Secure File Sharing Project developed by Laravel",   link: "https://securefilesharing.online/" , imagePath: "/projects/laravel/1.png" },
  { projectTitle: "Laravel Project 2", category: "Laravel",       description: "This is Secure File Sharing Project developed by Laravel",   link: "https://securefilesharing.online/" , imagePath: "/projects/laravel/1.png" },
  { projectTitle: "Photography website", category: "WordPress",   description: "This is Secure File Sharing Project developed by Laravel",   link: "https://altaybeldaw.com/" ,imagePath: "/projects/wordpress/1.webp" },
  { projectTitle: "Massage website", category: "WordPress",       description: "This is Photography Project developed by WordPress",         link: "https://rahty-massage.com/" , imagePath: "/projects/wordpress/2.png" },
  { projectTitle: "Massage website", category: "WordPress",       description: "This is Rahty massage Project developed by WordPress",       link: "https://rahty-massage.com/" , imagePath: "/projects/wordpress/2.png" },
  { projectTitle: "Massage website", category: "WordPress",       description: "This is Massage timer Project developed by WordPress",       link: "https://massagetimer.com/" , imagePath: "/projects/wordpress/3.webp" },
];

const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(myProjects);

  const handleFilter = (category) => {
    setCurrentActive(category);
    if (category === "all") {
      setFilteredProjects(myProjects);
    } else {
      const newProjects = myProjects.filter((project) => project.category === category);
      setFilteredProjects(newProjects);
    }
  };

  return (
    <>
     <h1 className="title-all">Projects</h1>
    <main id="Projects" className="Projects">
      <section className=" left-section">
        <button
          onClick={() => handleFilter("all")}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => handleFilter("JavaScript")}
          className={currentActive === "JavaScript" ? "active" : null}
        >
         React
        </button>
        <button
          onClick={() => handleFilter("WordPress")}
          className={currentActive === "WordPress" ? "active" : null}
        >
          WordPress
        </button>
        <button
          onClick={() => handleFilter("Laravel")}
          className={currentActive === "Laravel" ? "active" : null}
        >
          PHP - Laravel
        </button>
      </section>

      <section className="flex right-section">
        {filteredProjects.map((project, index) => (

          <motion.article key={index} className="card">
            <img width={266} src={project.imagePath} alt={project.projectTitle} />
            <div style={{ width: "266px" }} className="box">
              <h1 className="title">{project.projectTitle}</h1>
              <p className="subtitle">
                 {project.description}.
              </p>
              <div className="flex icons">
                <div style={{ gap: "11px" }} className="flex">
                 <a href={project.link} target="_blank"><div className="icon-link"></div></a>
                  <div className="icon-github-square"></div>
                </div>
              </div>
            </div>
          </motion.article>


        ))}
      </section>
    </main>
    </>
  );
};

export default Main;
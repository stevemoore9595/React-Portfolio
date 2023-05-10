import Project from "../../components/Project";

function Portfolio() {

  // fill in the required data, image file should be in the assets folder and name should match exactly including extension
  const projects = [
    {
      name: "Prework Study Guide",
      description: "MERN Stack",
      link: "https://github.com",
      repo: "https://github.com",
      image: "prework-study-guide-image.png",
    },
    {
      name: "Code Quiz",
      description: "Mern Stack",
      link: "https://google.com",
      repo: "https://github.com",
      image: "code-quiz.png",
    },
    {
      name: "Password Generator",
      description: "MERN Stack",
      link: "https://github.com",
      repo: "https://github.com",
      image: "password-generator.png",
    },
    {
      name: "Horiseon",
      description: "Mern Stack",
      link: "https://google.com",
      repo: "https://github.com",
      image: "horiseon-image.png",
    },
    {
      name: "Weather Dashboard",
      description: "MERN Stack",
      link: "https://github.com",
      repo: "https://github.com",
      image: "weather-dashboard.png",
    },
    {
      name: "Work Day Scheduler",
      description: "Mern Stack",
      link: "https://google.com",
      repo: "https://github.com",
      image: "work-day-scheduler.png",
    },
  ];

  // for each project, use the Project component to build a project
  return (

    <div class='border border-secondary' style={{maxWidth:1140}}>
      <div>
        <div class='row row-style-top'>
          <div class='col-sm-12'>
            <h2>Portfolio</h2>
          </div>
        </div>
      </div>
      <div class="row row-style-port">
        {projects.map((project) => (
          <Project project={project} key={"project=" + project.name} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
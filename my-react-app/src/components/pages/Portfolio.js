import Project from "../../components/Project";
import '../../styles/Portfolio.css';

function Portfolio() {

  // fill in the required data, image file should be in the assets folder and name should match exactly including extension
  const projects = [
    {
      name: "Prework Study Guide",
      description: "HTML, CSS, Javascript",
      link: "https://stevemoore9595.github.io/prework-study-guide/",
      repo: "https://github.com/stevemoore9595/prework-study-guide",
      image: "prework-study-guide-image.png",
    },
    {
      name: "Code Quiz",
      description: "HTML, CSS, Javascript",
      link: "https://stevemoore9595.github.io/Code-Quiz/",
      repo: "https://github.com/stevemoore9595/Code-Quiz",
      image: "code-quiz.png",
    },
    {
      name: "Password Generator",
      description: "HTML, CSS, Javascript",
      link: "https://stevemoore9595.github.io/Password-Generator/",
      repo: "https://github.com/stevemoore9595/Password-Generator",
      image: "password-generator.png",
    },
    {
      name: "Code Refactor",
      description: "HTML, CSS",
      link: "https://stevemoore9595.github.io/Code-Refactor/",
      repo: "https://github.com/stevemoore9595/Code-Refactor",
      image: "horiseon-image.png",
    },
    {
      name: "Weather Dashboard",
      description: "HTML, CSS, Javascript",
      link: "https://stevemoore9595.github.io/Weather-Dashboard/",
      repo: "https://github.com/stevemoore9595/Weather-Dashboard",
      image: "weather-dashboard.png",
    },
    {
      name: "Work Day Scheduler",
      description: "HTML, CSS, Javascript",
      link: "https://stevemoore9595.github.io/Work-Day-Scheduler/",
      repo: "https://github.com/stevemoore9595/Work-Day-Scheduler",
      image: "work-day-scheduler.png",
    },
  ];

  // for each project, use the Project component to build a project
  return (

    <div class='border border-secondary' id='portBoarder'>
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
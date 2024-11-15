import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    name: "RPG Dice Roller",
    description:
      "A simple dice roller for tabletop roleplaying games. This was made using Jacascript, HTML, and CSS.",
    url: "https://zyndrr.github.io/RPG-Dice-Roller/",
    repo: "https://github.com/Zyndrr/RPG-Dice-Roller",
    imgUrl: "/proj-logos/d20.png",
  },
  {
    name: "Weather App",
    description:
      "A simple 5-day weather forecast app and my first attempt at using API's. This was made using Javascript, TypeScript, HTML, and CSS.",
    url: "https://weather-dashboard-esi5.onrender.com/",
    repo: "https://github.com/Zyndrr/Weather-Dashboard",
    imgUrl: "/proj-logos/weather-icon.png",
  },
];
const Projects = () => {
  return (
    <>
      <h1 className="text-4xl text-left font-bold mb-2">Recent Projects</h1>
      <ul className="bg-white text-left rounded-xl p-4">
        {projects.map((project, i) => (
          <li key={i}>
            <ProjectCard
              name={project.name}
              description={project.description}
              url={project.url}
              repo={project.repo}
              imgUrl={project.imgUrl}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Projects;

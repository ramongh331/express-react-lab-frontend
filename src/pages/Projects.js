import { useLoaderData } from "react-router-dom";

export default function Projects(props) {
  const projects = useLoaderData();
  const imgStyle = {
    height: "300px"
  }

  return projects.map((project) => (
    <div>
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} style={imgStyle}/>
      <a href={project.git}>
        <button>Github</button>
      </a>
      <a href={project.live}>
        <button>Live Site</button>
      </a>
    </div>
  ));
}

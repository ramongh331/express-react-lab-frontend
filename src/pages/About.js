import { useLoaderData } from "react-router-dom";

export default function About(props) {
  
  const about = useLoaderData()
  const spanStyle = {
    fontWeight: "bold" 
  }
  
  return (
    <div>
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <p><span style={spanStyle}>Bio: </span>{about.bio}</p>
    </div>
  );
}



import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { projectsLoader, aboutLoader } from "./Loaders";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} loader={aboutLoader}/>
      <Route path="projects" element={<Projects />} loader={projectsLoader}/>
    </Route>
  )
);

export default Router;

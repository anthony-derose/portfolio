import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import FirstBlog from "./pages/firstblog"
import Projects from "./pages/projects";
import ThisSite from "./pages/this-site";
import Maze from "./pages/procedural-maze-game";
import Sampler from "./pages/youtube-sampler";
import Metronome from "./pages/metronome";
import SimpleNoiseSynth from "./pages/simplesynth";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<About />} />

          <Route path="/blog" element={<Blog />} />
          <Route path='/blog/myfirstblog' element={<FirstBlog />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/procedural-maze-game" element={<Maze />} />
          <Route path="/projects/youtube-sampler" element={<Sampler />} />
          <Route path="/projects/metronome" element={<Metronome />} />
          <Route path="/projects/simple-synth-noise" element={<SimpleNoiseSynth />} />
          <Route path="/projects/this-site" element={<ThisSite />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
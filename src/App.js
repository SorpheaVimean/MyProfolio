import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import HomePage from "./Pages/HomePage/HomePage";
import EcomerceProject from "./Pages/projects/EcomerceProject";
import SpotifyClone from "./Pages/projects/SpotifyClone";
import NodeProject from "./Pages/projects/NodeProject";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout/>}>
        <Route path="" element={<HomePage />} />
        <Route path="/:section" element={<HomePage />} />
        <Route path="ecommerce" element={<EcomerceProject />} />
        <Route path="spotify" element={<SpotifyClone />} />
        <Route path="node" element={<NodeProject />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

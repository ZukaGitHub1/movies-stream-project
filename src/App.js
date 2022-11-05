import { Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./components/body/content/Content";
import Home from "./pages/home/Home";
import Allmovie from "./pages/moviepage/Allmovie";
import Pagenotfound from "./pages/pagenotfound/Pagenotfound";
import SingleIdPage from "./pages/singleidpage/SingleIdPage";
import TVserials from "./pages/tvserials/TVserials";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<Home />}>
          <Route index element={<Content />} />
          <Route path="/allmovie" element={<Allmovie />}/>
           
            <Route  path="/tvserials" element={<TVserials/>}/>
              <Route path="/php_movie/:id" element={<SingleIdPage/>}/>
        </Route>
       
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
}

export default App;

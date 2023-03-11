import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from "./components/Home.js";
import TeamPage from "./components/TeamPage.js";


function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/team" element={<TeamPage/>}/>
        </Routes>
    </Router>
  </>
    );
}

export default App;

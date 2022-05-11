import FirstComp from "./Component/FirstComp";
import MainCard from "./Component/MainCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <FirstComp />

      <Router>
        <Routes>
          <Route path="/" element={<MainCard />}></Route>
          {/* <Route path="/home" element={<MainCard />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

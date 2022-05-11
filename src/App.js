import Navbar1 from './components/Navbar1';
import Navbar2 from './components/Navbar2';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar1 />

      <Router>
        <Routes>
          <Route path="/" element={<Navbar2 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

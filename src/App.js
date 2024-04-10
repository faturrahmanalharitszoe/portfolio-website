import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Index from "./pages/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Index} />
      </Routes>
    </Router>
  );
}

export default App;

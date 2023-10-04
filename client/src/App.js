import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Download from "./pages/download/Download";
import HomePage from "./pages/home/Home";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </Router>
    </div>
  );
}

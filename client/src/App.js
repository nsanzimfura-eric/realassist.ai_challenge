import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Download from "./pages/download/Download";
import HomePage from "./pages/home/Home";
import { ROUTES } from "./utils/routes";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route path={ROUTES.download} element={<Download />} />
        </Routes>
      </Router>
    </div>
  );
}

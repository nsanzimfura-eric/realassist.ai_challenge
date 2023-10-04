import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Download from "./pages/download/Download";
import HomePage from "./pages/home/Home";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/download" component={Download} />
      </Router>
    </div>
  );
}

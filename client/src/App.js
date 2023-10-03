import "./App.css";
import { server_url } from "./constants/constant";

function App() {
  return (
    <div className="App">
      <div className="actions_tab">
        <button className="btn">Download Pdf</button>
      </div>
      <div className="content">
        <img
          src="/images/assist_svg.svg"
          alt="Martet Insights"
          className="insights"
        />
      </div>
    </div>
  );
}

export default App;

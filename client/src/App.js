import "./App.css";
import { useGetData } from "./hooks/useGetData";

function App() {
  const { loading, data, error, handleGetData } = useGetData();

  const handleDownloadPdf = async () => {
    handleGetData();
  };

  return (
    <div className="App">
      <div className="actions_tab">
        {loading && (
          <button className="btn" onClick={handleDownloadPdf}>
            Download Pdf
          </button>
        )}
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

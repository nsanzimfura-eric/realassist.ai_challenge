import "./App.css";
import { useState } from "react";
import { useGetDataPdf } from "./hooks/useGetData";

function App() {
  const { loading, handleDownload } = useGetDataPdf();
  const [showDownloadBtn, setShowDownloadBtn] = useState(true);

  const handleDownloadPdf = async () => {
    setShowDownloadBtn(false);
    handleDownload();
  };

  return (
    <div className="App">
      <div className="actions_tab">
        <button className="btn" onClick={handleDownloadPdf}>
          {loading ? "Loading ..." : "Download Pdf"}
        </button>
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

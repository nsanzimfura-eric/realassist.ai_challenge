import { useEffect } from "react";
import "./App.css";
import { useGetDataPdf } from "./hooks/useGetData";

function App() {
  const { handleDownload, loading } = useGetDataPdf();

  useEffect(() => {
    handleDownload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  loading && alert("loading pdf...");

  return (
    <div className="App">
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

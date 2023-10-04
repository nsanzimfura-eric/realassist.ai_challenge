import React, { useEffect } from "react";
import "./download.css";
import { useGetDataPdf } from "../../hooks/useGetData";

export default function Download() {
  const { handleDownload, loading } = useGetDataPdf();

  useEffect(() => {
    // handleDownload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  loading && alert("loading pdf...");

  return <div className="download"></div>;
}

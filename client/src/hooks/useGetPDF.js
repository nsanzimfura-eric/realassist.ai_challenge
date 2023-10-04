import { useState } from "react";
import axios from "axios";
import { baseURI, server_url } from "../constants/constant";

export const useGetDataPdf = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${server_url}?url=${baseURI}`, {
        responseType: "blob",
      });
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "market_insights.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { loading, error, handleDownload };
};

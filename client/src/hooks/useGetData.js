import { useState } from "react";
import axios from "axios";
import { server_url } from "../constants/constant";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/routes";

export const useGetDataPdf = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const nagitate = useNavigate();

  const handleDownload = async () => {
    try {
      nagitate(ROUTES.download);
      setLoading(true);
      const response = await axios.get(server_url, { responseType: "blob" });
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "market_insights.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      setLoading(false);
      nagitate(ROUTES.home);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { loading, error, handleDownload };
};

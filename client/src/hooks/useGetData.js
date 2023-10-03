import { useState } from "react";
import axios from "axios";
import { server_url } from "../constants/constant";

export const useGetData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGetData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(server_url);
      const responseData = await res.json();
      setData(responseData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { loading, data, error, handleGetData };
};

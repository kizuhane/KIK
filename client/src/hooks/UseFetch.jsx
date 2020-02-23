import { useState } from "react";

const UseFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchDataFromUrl = async url => {
    if (!url) return;
    try {
      if (!loading) setLoading(true);

      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  return { data, loading, error, fetchDataFromUrl };
};

export default UseFetch;

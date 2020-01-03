import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// TODO: FIXME: change a fetch function because  its doing it 2 times
const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUrl = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return [data, loading];
};

useFetch.propTypes = {
  url: PropTypes.string.isRequired
};

export default useFetch;

/*
const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUrl = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return [data, loading];
};

*/

/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { token } from "../config";
import { toast } from "react-toastify";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
       
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
          mode: 'no-cors',
        });
        const result = await res.json();
        if (!res.ok) {
          throw new Error(result.message || "Something went wrong");
        }
        setData(result.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;

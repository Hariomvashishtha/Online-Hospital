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
        debugger;
       
        // const res = await fetch(url, {
        //   headers: { Authorization: `Bearer ${token}` },
        // });
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json', // You can include other headers if needed
          },
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

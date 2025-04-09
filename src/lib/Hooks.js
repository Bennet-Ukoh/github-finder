// useFetchUser.js
import { useState, useEffect } from "react";
import { USERS_BASE_URL } from "./Constants";

export default function useFetchUser(username) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      loading;
      setError(null);

      try {
        const res = await fetch(`${USERS_BASE_URL}/${username}`, {
          signal,
        });
        if (!res.ok) throw new Error("User not found");
        const json = await res.json();
        setData(json);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [username]);

  return { data, loading, error };
}

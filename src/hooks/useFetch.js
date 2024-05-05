import { useRef, useState } from "react";

function useFetch() {
  const [loading, setLoading] = useState(false);

  const abortRef = useRef();

  async function fetchData(
    type = "POST",
    url,
    payload = { limit: 10, offset: 0 }
  ) {
    try {
      if (abortRef.current?.signal)
        abortRef.current.abort("Too many reuqests.");
      abortRef.current = new AbortController();
      setLoading(true);
      const res = await fetch(url, {
        method: type,
        signal: abortRef.current.signal,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  return { fetchData, loading };
}

export default useFetch;

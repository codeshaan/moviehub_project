import React, { createContext, useEffect, useState } from "react";

export const Context = createContext({});

export default function Provider({ children }) {
  const [input, setInput] = useState("");
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);

      const data = await fetch(
        `http://www.omdbapi.com/?s=${input}&apikey=2df6ffde`
      );

      const json = await data.json();

      setMovie(json);
      setLoading(false);
    };

    fetchMovie();
  }, [input]);

  const getMovieName = (movieName) => {
    setInput(encodeURI(movieName));
  };

  return (
    <Context.Provider
      value={{ movie: movie, getMovieName: getMovieName, loading: loading }}
    >
      {children}
    </Context.Provider>
  );
}

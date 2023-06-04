import { createContext, useState } from "react";
import axios from "axios";

export const MoviesContext = createContext({});

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async (genre) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/genresMovies?category=${genre}`
      );
      setMovies(response.data.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MoviesContext.Provider value={{ fetchMovies, movies, isLoading }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;

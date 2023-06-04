import './App.css';
import MoviesList from './components/MoviesList/MoviesList';

import MoviesProvider from './components/MoviesProvider/MoviesProvider';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <MoviesProvider>
      <SearchBar />
      <MoviesList />
    </MoviesProvider>
  );
}

export default App;

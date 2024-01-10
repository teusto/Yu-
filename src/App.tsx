import './App.css'
import 'bulma/css/bulma.min.css';
import Movie from './Movie';
import useMovies from './useMovies';
import { useState } from 'react';



function App() {
  const [movies, setMovies] = useState([])
  const { data, error, isLoading } = useMovies()

  console.log(data)
  return (
    
      <div>
        <h1>Movie Battle</h1>
        <div style={{ display: 'flex', justifyContent: 'center', width: '80vw' }}>
          <Movie />
          <Movie />
        </div>
      </div>

  )
}

export default App

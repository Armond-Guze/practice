import React from 'react'

const movies = [
    { id: 1, title: 'Inception', year: 2010, rating: 'PG-13' },
    { id: 2, title: 'The Dark Knight', year: 2008, rating: 'PG-13' },
    { id: 3, title: 'Interstellar', year: 2014, rating: 'PG-13' },
    { id: 4, title: 'The Matrix', year: 1999, rating: 'R' }
  ];

  const handleAlert ()

const Headers = () => {
  return (
    <div>
            {movies.map((movie) => (
                <div key={movie.id}>
                    {movie.title} - {movie.rating} - {movie.year}
                    <button>Click me</button>
                </div>
            ))}
        
    </div>
  )
}

export default Headers
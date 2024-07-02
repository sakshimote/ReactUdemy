import React, { useEffect, useState } from 'react'
import {Card} from '../components/Card'
import moviesNowPlaying from '../json/moviesNowPlaying.json'

export const MovieList = () => {

  const[movies,setMovies]=useState([]);

  useEffect(()=>{
    setMovies(moviesNowPlaying.results);
  },[])

  return (
    <main>
     <section className='max-w-7xl mx-auto py-7'>
      <div className='flex justify-start flex-wrap'>
        {movies.map((movie)=>(
          <Card key={movie.id} movie={movie}/>
        ))}



      </div>
     </section>
     </main>
  )
}

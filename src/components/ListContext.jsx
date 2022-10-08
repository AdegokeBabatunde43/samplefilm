import React, {useEffect, useContext} from 'react'
import { MovieContext } from '../MovieContext'
import ItemContext from './ItemContext'

const ListContext = () => {
    const url= 'https://api.themoviedb.org/3/'
    const join='/movie?api_key=bf5595cb127233997340c64248b9a09a&query='
    const { movie, setMovie, searchKey, setSearchKey, selectMovie, setSelectMovie}=useContext(MovieContext)
useEffect(() => {
  const movieReview= async () => {
    const type = searchKey ? 'search':'discover'
    const response = await fetch(`${url}${type}${join}${searchKey}`)
    const movie = await response.json()
    setMovie(movie.results)
    console.log(movie.results)
    setSelectMovie(movie.results[3])


  }
  movieReview()
}, [setSelectMovie, setMovie, searchKey])
if (!movie || movie.length === 0)
    return 'loading'


  return (
    <div className='list'>
      {movie.map((film)=> (
        <ItemContext key={film.id} film={film} />
      ))}
    </div>
  )
}

export default ListContext

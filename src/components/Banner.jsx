import React, {useContext} from 'react'
import {MovieContext} from '../MovieContext'
const imgPath='https://image.tmdb.org/t/p/w500/'

const Banner = () => {
    const {selectMovie}=useContext(MovieContext)
    console.log(selectMovie)
  return (
    <div className='banner'>
      <div className='' style={{backgroundImage: `url(${imgPath}${selectMovie.backdrop_path
})`, height:'50vh'}} >
            <nav>
                <p>{selectMovie.overview}</p>
                <p>{selectMovie.title}</p>

            </nav>
      </div>
    </div>
  )
}

export default Banner

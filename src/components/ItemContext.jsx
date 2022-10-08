import React from 'react'
const imgPath='https://image.tmdb.org/t/p/w500/'
const unavilable ='https://image.shutterstock.com/image-vector/unavailable-sign-stamp-on-white-260nw-1632733408.jpg'

const ItemContext = ({film}) => {
  return (
    <div className='item'>
      <img src={film.poster_path ? `${imgPath}${film.poster_path}`: unavilable } alt="" />
      <main>
            <p className='title'>{film.original_title}</p>
          <nav>
          <p>{film.vote_average}</p>
            <p>{film.original_language}</p>
          </nav>
            <p>{film.release_date}</p>
      </main>

    </div>
  )
}

export default ItemContext

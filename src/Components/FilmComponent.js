import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import style from '../style/FilmComponent.scss'

const FilmComponent = () => {
  const films = useSelector((state) => state.filmsList.films)
   const renderList = films.map((film)=>{
    const {kinopoiskId, nameRu, year, duration, posterUrlPreview} = film
    return (
<div className='card-item' key={kinopoiskId}>
      <Link to={`/film/${kinopoiskId}`}>
        <div className='card-inner'></div>
        <div className='card-top'>
          <img src={posterUrlPreview} alt={nameRu}/>
        </div>
        <div className='card-bottom'>
        <div className='card-info'>
        <div className='header'>{nameRu}</div>
        <div className='year'>{year}</div>
        <div className='duration'>{duration}</div>
        </div>
        </div>
        
</Link>
    </div>
    )
  })
  
  return (
    <>


    {renderList}
    </>
  )
}

export default FilmComponent
// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <div className="app-container">
      <img
        className="prime-image"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="slider-container">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider movieList={actionMoviesList} />
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider movieList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo

// Write your code here
import Slider from 'react-slick'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movieList} = props

  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  }

  return (
    <Slider {...settings}>
      {movieList.map(eachMovie => (
        <MovieItem key={eachMovie.id} movie={eachMovie} />
      ))}
    </Slider>
  )
}

export default MoviesSlider

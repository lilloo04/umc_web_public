import React from "react";
import { useNavigate } from "react-router-dom";
import { MovieContainer, MovieTitle, Star, MovieImage } from "./Movie.style";

function Movie({ movieData }) {
  const navigate = useNavigate();

  const onClickMovie = () => {
    // movieData가 유효한 경우에만 상세 페이지로 이동
    if (movieData) {
      navigate(`/movie/${movieData.title}`, {
        state: { movieData },
      });
    }
  };

  const fillStringWithCharacter = (rate, length, character, blank) => {
    let fill1 = character.repeat(parseInt(rate));
    let fill2 = blank.repeat(length - parseInt(rate));
    return fill1 + fill2;
  };

  const stars = fillStringWithCharacter(movieData.vote_average, 10, "★", "☆");

  return (
    <MovieContainer onClick={onClickMovie}>
      <MovieImage
        src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
        alt={movieData.title}
      />
      <Star>{stars}</Star>
      <MovieTitle>
        <h3>
          {movieData.title} ({movieData.vote_average})
        </h3>
      </MovieTitle>
    </MovieContainer>
  );
}

export default Movie;

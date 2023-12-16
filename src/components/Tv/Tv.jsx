import React, { useState } from "react";
import TvDetail from "./TvDetail";

import { TvContainer, TvTitle, Star, TvImage } from "./Tv.style"; // Movie.style.jsx에서 스타일 import

function Tv(props) {
  const { tvData } = props;
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  const fillStringWithCharacter = (rate, length, character, blank) => {
    let fill1 = character.repeat(parseInt(rate));
    let fill2 = blank.repeat(length - parseInt(rate));
    return fill1 + fill2;
  };

  const stars = fillStringWithCharacter(tvData.vote_average, 10, "★", "☆");

  return (
    <TvContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <TvImage
        src={`https://image.tmdb.org/t/p/w500/${tvData.poster_path}`}
        alt={tvData.title}
      />
      <Star>{stars}</Star>
      <TvTitle>
        <h3>
          {tvData.name} {/*({tvData.vote_average})*/}
        </h3>
      </TvTitle>
      <TvDetail tvData={tvData} isMouseOver={isMouseOver} />
    </TvContainer>
  );
}

export default Tv;

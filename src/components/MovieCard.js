import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
  return (
    <div className="min-w-[180px] pr-4">
      <img
        className=""
        alt="poster img"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard

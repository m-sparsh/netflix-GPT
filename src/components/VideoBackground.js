import React from "react";

import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="w-screen">
      {trailerVideo && (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?&autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;

// {
//   "id": 939243,
//   "results": [
//      {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer 2",
//       "key": "LH1J1EbqCaI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2024-11-25T14:00:03.000Z",
//       "id": "674488a3c24765fa2f2dea4d"
//     },
// ]
// }

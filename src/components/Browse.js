import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const user = useSelector((store) => store.user);


  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        Main Container
         - VIdeo bg 
         - Video title
        Secondary Container
         - movie list * n
         - movie cards * n


      */}
    </div>
  );
};

export default Browse;

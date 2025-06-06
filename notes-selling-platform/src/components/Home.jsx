import React from "react";
import Footer from './Footer';
import Header from './Header';
import Notes from './Notes';
import Getstart from './Getstart'; 
import Home2 from "./Home2";

const Home = () => {
  const token = localStorage.getItem("token");

  return (
    <div>
      {token ? <Home2 /> : <Getstart />}
    </div>
  );
};

export default Home;

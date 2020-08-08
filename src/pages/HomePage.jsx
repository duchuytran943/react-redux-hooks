import React from "react";
import HobbyList from "../components/Home/HobbyList";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <div className="home-page">
      <h1>HomePage</h1>
      <HobbyList hobbyList={[{ id: 1, hobby: "Coding" }]} />
    </div>
  );
}

export default HomePage;

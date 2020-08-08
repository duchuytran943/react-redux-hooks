import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewHobby } from "../actions/hobby";
import HobbyList from "../components/Home/HobbyList";

HomePage.propTypes = {};

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};

function HomePage() {
  const hobbyList = useSelector((state) => state.hobby.list);
  const dispatch = useDispatch();

  const handleAddRandomHobby = () => {
    //random object newhobby
    const newID = randomNumber();
    const newHobby = {
      id: newID,
      title: `hobby ${newID}`,
    };

    //dispatch action add new hobby to store
    const action = addNewHobby(newHobby);
    dispatch(action);
  };

  return (
    <div className="home-page">
      <h1>HomePage</h1>
      <button onClick={handleAddRandomHobby}>Random Hobbys</button>
      <HobbyList hobbyList={hobbyList} />
    </div>
  );
}

export default HomePage;

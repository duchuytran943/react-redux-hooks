import React from "react";
import PropTypes from "prop-types";
import "./HobbyList.css";

HobbyList.propTypes = {
  hobbyList: PropTypes.array,
  activeId: PropTypes.number,
  onHobbyClick: PropTypes.func,
};

HobbyList.defaultProps = {
  hobbyList: [],
  activeId: null,
  onHobbyClick: null,
};

function HobbyList(props) {
  console.log(props);
  const { hobbyList, activeId, onHobbyClick } = props;

  const handleHobbyClick = (hobby) => {
    if (!onHobbyClick) {
      return;
    }
    onHobbyClick(hobby);
  };

  return (
    <ul className="hobby-list">
      {hobbyList.map((hobby) => (
        <li
          key={hobby.id}
          className={activeId === hobby.id ? "active" : ""}
          onClick={() => handleHobbyClick(hobby)}
        >
          {hobby.title}
        </li>
      ))}
    </ul>
  );
}

export default HobbyList;

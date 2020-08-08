import React from "react";
import PropTypes from "prop-types";

HobbyList.propTypes = {
  hobbyList: PropTypes.array,
};

HobbyList.defaultProps = {
  hobbyList: [],
};

function HobbyList(props) {
  const { hobbyList } = props;
  return (
    <ul>
      {hobbyList.map(({ id, hobby }) => (
        <li key={id}>{hobby}</li>
      ))}
    </ul>
  );
}

export default HobbyList;

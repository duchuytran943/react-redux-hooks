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
      {hobbyList.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
}

export default HobbyList;

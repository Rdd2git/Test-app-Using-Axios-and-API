import React from "react";
import PropTypes from "prop-types";
export default class Albums extends React.Component({ artist }) {
  render() {
    return (
      <>
        <p>Parameter</p>
      </>
    );
  }
}

Albums.propTypes = {
  artist: PropTypes.string,
};

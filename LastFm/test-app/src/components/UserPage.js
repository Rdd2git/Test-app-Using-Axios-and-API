import React from "react";

import PropTypes from "prop-types";
import API from "../utils/API";

export default class UserPage extends React.Component {
  state = {
    albumsData: null,
    isFetching: true,
  };

  async componentDidMount() {
    let {
      params: { userId },
    } = this.props.match;
    let albumsData = await API.get("/", {
      params: {
        method: "artist.gettopalbums",
        user: "ClickZayaz",
        artist: `${userId}`,
        api_key: "9fc0e8a94bcec44ef64ef8105d433485",
        format: "json",
        limit: 20,
      },
    });
    console.log(albumsData);
    albumsData = albumsData.data.topalbums.album;
    console.log(albumsData);
    this.setState({
      albumsData,
      isFetching: false,
    });
  }

  render() {
    const { albumsData, isFetching } = this.state;
    const element = isFetching ? (
      <p>loading...</p>
    ) : (
      albumsData.map((el, index) => (
        <div className="albums-item" key={index}>
          <h3>{el.name}</h3>
          <img src={el.image[2]["#text"]} alt="album foto"></img>
        </div>
      ))
    );
    return (
      <di>
        <h3>{this.props.match.params.userId}:</h3>
        <div className="albums-list">{element}</div>
      </di>
    );
  }
}

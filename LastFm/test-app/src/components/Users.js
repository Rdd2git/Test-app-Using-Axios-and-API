import React from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class Users extends React.Component {
  state = {
    usersList: null,
  };

  async componentDidMount() {
    //Load async data.

    const name = this.props.name;
    console.log(name);
    try {
      let userData = await API.get("/", {
        params: {
          method: "artist.search",
          user: "ClickZayaz",
          artist: `${name}`,
          api_key: "9fc0e8a94bcec44ef64ef8105d433485",
          format: "json",
        },
      });
      //console.log(usersList.length);
      let usersList = userData.data.results.artistmatches.artist;

      console.log(usersList);
      this.setState({
        usersList,
      });
    } catch (error) {
      console.log(`Axios request failed:${error}`);
    }
  }

  render() {
    //console.log(this.state.usersList);
    const name = this.props.name;
    const users = this.state.usersList;
    console.log(name);
    const element = users ? (
      <>
        {users.map((el, index) => (
          <p key={index}>
            <Link to={`/user/${el.name}`}>{el.name}</Link>
          </p>
        ))}
      </>
    ) : (
      <p>Is loading .....</p>
    );
    return (
      <div>
        <h3> Результаты поиска:</h3>
        {element}
      </div>
    );
  }
}

Users.propTypes = {
  name: PropTypes.string,
};

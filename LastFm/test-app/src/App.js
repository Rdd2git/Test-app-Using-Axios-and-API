import React from "react";
import "./App.css";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Users from "./components/Users";
import UserPage from "./components/UserPage";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
      isSubmit: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ searchValue: event.target.value, isSubmit: false });
  }
  handleSubmit(event) {
    console.log(this.state.searchValue);
    event.preventDefault();
    this.setState({
      isSubmit: true,
    });
  }
  render() {
    const name = this.state.searchValue;
    const element = this.state.isSubmit ? (
      <Route
        exact
        path="/"
        render={(props) => <Users {...props} name={`${name}`} />}
      />
    ) : (
      <p>Начните поиск исполнителя</p>
    );
    return (
      <Router className="App">
        <Link className="home-link" to="/">
          Home
        </Link>

        <form onSubmit={this.handleSubmit}>
          <label>Поиск:</label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />

          <input type="submit" value="Искать" />
        </form>
        <div className="artist-list">{element}</div>
        <Route exact path="/user/:userId" component={UserPage} />
      </Router>
    );
  }
}

export default App;

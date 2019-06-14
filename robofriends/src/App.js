import React, { Component } from "react";
import Cards from "./components/Cards";
import { Container } from "./components/CardStyle";
import Header from "./components/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response => this.setState({robots: response}))
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });
    return (
      (!robots.length) ? 
      <h1>loading</h1> :
      <div>
        <Header searchChange={this.onSearchChange} />
        <Container>
          <Cards robots={filteredRobots} />
        </Container>
      </div>
    );
  }
}

export default App;

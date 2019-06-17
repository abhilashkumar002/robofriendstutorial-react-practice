import React, { Component } from "react";
import {connect} from 'react-redux';
import Cards from "./components/Cards";
import { Container } from "./components/CardStyle";
import Header from "./components/Header";
import {setSearchField} from './actions';

const mapStateToProps = state => {
  return{
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  constructor() {
    super();
    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response => this.setState({robots: response}))
  }

  render() {
    const {robots} = this.state;
    const {searchField, onSearchChange} = this.props; 
    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });
    return (
      (!robots.length) ? 
      <h1>Loading</h1> :
      <div>
        <Header searchChange={onSearchChange} />
        <Container>
          <Cards robots={filteredRobots} />
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;
import React, { Component } from "react";
import {connect} from 'react-redux';
import Cards from "./components/Cards";
import { Container } from "./components/CardStyle";
import Header from "./components/Header";
import {setSearchField, requestRobots} from './actions';

const mapStateToProps = state => {
  return{
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch)
  }
}

class App extends Component {

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const {searchField, onSearchChange, robots, isPending, error } = this.props; 
    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });
    return (
      isPending ? 
      <h1>Loading</h1> :
      (
        error ? 
        <p>Error occured. Please check network connection.</p> :
        <div>
        <Header searchChange={onSearchChange} />
        <Container>
          <Cards robots={filteredRobots} />
        </Container>
      </div>
      )
      
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;
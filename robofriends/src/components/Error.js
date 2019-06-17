import React, { Component } from 'react'

export default class Error extends Component {
  constructor(props){
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info){
    this.setState({hasError: true})
  }
  
  render() {
    if(this.state.hasError){
      return <h2>Error occured</h2>
    }
    else{
      return this.props.children;
    }
  }
}

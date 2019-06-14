import React, { Component } from 'react'
import {HeaderPart, Title, SearchBox} from './HeaderStyle';

class Header extends Component {
  render() {
    return (
      <HeaderPart>
        <Title>
          Robot friends
        </Title>
        <SearchBox>
          <input 
          type="text" 
          name="searchtext" 
          placeholder="Search here" 
          onChange={this.props.searchChange}
          />
        </SearchBox>
      </HeaderPart>
    )
  }
}

export default Header;
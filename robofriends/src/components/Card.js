// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import './card.css';

class Card extends Component {
  render(){
    console.log(this.props.id);
    const {id, name, email}  = this.props;
    return (
      <div className="container">
        <img src={`https://robohash.org/${id}`} alt="robot" />
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    )
  }
}

export default Card;
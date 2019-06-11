// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
// import './card.css';
import {Cards} from './CardStyle';

// function based component to render a robot
const Card = (props) => {
  const {id, name, email} = props.robot;
  return (
          <Cards>
            <img src={`https://robohash.org/${id}`} alt="robot" />
            <h1>{name}</h1>
            <p>{email}</p>
          </Cards>
        )
}

// class based component to render a robot
// class Card extends Component {
//   render(){
//     console.log(this.props.robot);
//     const {id, name, email}  = this.props.robot;
//     return (
//       <Container>
//         <img src={`https://robohash.org/${id}`} alt="robot" />
//         <h1>{name}</h1>
//         <p>{email}</p>
//       </Container>
//     )
//   }
// }

export default Card;
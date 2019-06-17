import React from 'react';
import Card from './Card';
import Error from './Error';

// function based component to render each robot in our list
// const Cards =(props) => {
//   const robots = props.robots;
//   return(
//     robots.map((robot) => {
//       return <Card key={robot.id} robot={robot}/>
//     })
//   )
// }

//class based componets to render each robot in our list
class Cards extends React.Component{
  render(){
    return (
    <Error>
      {
        this.props.robots.map(robot => (
          <Card key={robot.id} robot = {robot} />
        ))
      }
    </Error>
    )
  }
}
export default Cards
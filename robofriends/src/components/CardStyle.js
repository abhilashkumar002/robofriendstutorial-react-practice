import styled from "styled-components";

const  Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 1%;
  grid-row-gap: 1%;
  margin: 1%;
  justify-content: center;

  @media only screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (max-width: 750px){
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 500px){
    grid-template-columns: 1fr;
  }
`;

const Cards = styled.div`
  display: inline-block;
  width: 220px;
  height: auto;
  padding: 5px;
  text-align: center;
  border: none;
  background-color: burlywood;
  border-radius: 10px;
  box-shadow: 3px 3px 5px;
  transition: transform .2s;

  &:hover {
    transform: scale(1.03);
  }

  img {
    height: 200px;
    width: 200px;
  }

  h1 {
    font-size: 20px;
  }
`;

export {Container, Cards};
import styled from "styled-components";

const HeaderPart = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  justify-items: center;
  background-color: #f44259;
  padding: 5px;
  box-shadow: 0px 3px 5px 0px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 30px;
`;

const SearchBox = styled.div`
text-align: center;
  input {
    width: 200px;
    height: auto;
    padding: 10px;
    border: 2px solid #70111e;
    border-radius: 20px;
    text-align: center;
    background-color: #edd3d7;
    outline: none;
  }
`;

export {HeaderPart, Title, SearchBox};
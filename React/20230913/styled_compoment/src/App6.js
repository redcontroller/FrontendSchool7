import React from "react";
import styled, { css } from 'styled-components';

const Btn = css`
    width: 100px;
    height: 50px;
    margin-top: 10px;
    text-align: center;
    line-height: 50px;
    color: white;
    border: 5px solid black;
    background-color: blue;
`

const One = styled.div`
  ${Btn}

`;

const Two = styled(One)`
    color: black;
    font-weight: bold;
    border-radius: 10px;
    border: 0;
    box-shadow: 2px 0 5px 1px black;
`;

const Three = styled(Two)`
    color: white;
    border-radius: 20px;
    background-color: yellowgreen;
`

const App = () => {
    return (
        <>
            <One>버튼1</One>
            <Two>버튼2</Two>
            <Three>버튼3</Three>
        </>
    );
};
  
export default App;
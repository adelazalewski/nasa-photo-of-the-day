import React from "react";
import styled from "styled-components";

const DivWraper = styled.div`
border: 1px solid grey;
margin: 1rem;
`;


const Description = (props) => {
    const { explanation } = props;
    return(
        <DivWraper className="date-container">
            <p id='explanation'>{explanation}</p>
        </DivWraper>
    );
};
export default Description;
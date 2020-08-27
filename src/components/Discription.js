import React from "react";
import styled from "styled-components";

const DivWraper = styled.div`
border: 1px solid grey;
margin: 1rem;
`;
const PTag = styled.p`
padding: 0.5rem;
`;

const Description = (props) => {
    const { explanation } = props;
    return(
        <DivWraper className="date-container">
            <PTag id='explanation'>{explanation}</PTag>
        </DivWraper>
    );
};
export default Description;
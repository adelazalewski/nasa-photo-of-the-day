import React from "react";
import styled from "styled-components";

 const DatePTag = styled.p`
color: #FF7F50;
font-style: italic;
`;

export default function Date(props) {
    const { date } = props;
    return (
    <div className="date-div">
        <DatePTag>{date}</DatePTag>
    </div>
    );
};
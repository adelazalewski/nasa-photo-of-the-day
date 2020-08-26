import React from "react";

export default function Date(props) {
    const { date } = props;
    return (
    <div className="date-div">
        <p id="date">{date}</p>
    </div>
    );
};
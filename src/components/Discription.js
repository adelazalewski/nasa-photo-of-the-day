import React from "react";

const Description = (props) => {
    const { explanation } = props;
    return(
        <div className="date-container">
            <p id='explanation'>{explanation}</p>
        </div>
    );
};
export default Description;
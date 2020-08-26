import React from "react";

const Description = (props) => {
    const { explination } = props;
    return(
        <div className="date-container">
            <p id='explanation'>{explination}</p>
        </div>
    );
};
export default Description;
import React from "react";
export default function Title(props) {
    const { title, copyright } = props;
    return(
        <div className="title-div">
            <h3>{title} <span>by {copyright}</span></h3>
        </div>
    );
};
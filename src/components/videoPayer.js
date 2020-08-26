import React from "react";
import Title from "./title";
import Date from "./date";
import Description from "./videoDiscription";
import "../index.css";

const VideoPlayer = (props) => {
    const { data } = props;
    return(
        <div className="video-div-container">
            <Title //title={data.title}
             />
            <Date //date={data.date} 
            />
            <div className="video">{data}</div>
            <Description //explanation={data.explanation} 
            />
        </div>
    );
};
export default VideoPlayer;
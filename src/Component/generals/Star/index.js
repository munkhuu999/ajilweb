import React from "react";

const Star = (props) => {

    return (
        <img className=" w-7 mr-2 cursor-pointer transform hover:scale-125" src={props.icon} />

    );
}

export default Star;
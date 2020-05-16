import React from "react";
import "assets/styles/index.scss";

export default function HeadCard(props) {
    const { title, image } = props;

    return (
        <div className="card-head-component">
            <img src={image} alt="interes-convert" />
            <p>{title}</p>
        </div>
    )
}
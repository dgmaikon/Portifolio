import React from "react";
import projects from "./works.js";

function Works(props) {
    return (
        <section id="works-props">
            <h2 className="work-title">{ props.title }</h2>
            <p className="work-content">{ props.content }</p>
        </section>
    );
}

export default Works;
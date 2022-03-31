import React from "react";
import "./Header.css";
import Img from "./1.jpg";

function Header(props) {
    return (
        <div>
            <h5 className="Header-post pb-4 pt-3 text-center">{props.title}</h5>
            <img className="Header-img mb-5" src={Img} alt="Header-img"/>
        </div>
    );
}

export default Header;
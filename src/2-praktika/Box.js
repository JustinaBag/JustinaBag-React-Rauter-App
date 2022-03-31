import React from "react";
import "./Box.css";

function Box(){
    return(
        <div className="container mb-5">
            <div className="row">
                <div className="Box-1 col-2"></div>
                <div className="Box-2 col-2"></div>
                <div className="Box-3 col-2"></div>
                <div className="Box-4 col-2"></div>
            </div>
        </div>
        
    );
}

export default Box;
import React from "react";
import "./PostContent.css";

function PostContent(props) {
    let {title, content, img} = props;
    return(
             <div className="col-4 mb-5">
                 <div >
                    <h1 className="PostContent-h1">{title}</h1>
                    <img src={img} alt={title} />
                    <p className="PostContent-p">{content}</p>
                     </div>
             </div>
    )
}

export default PostContent;
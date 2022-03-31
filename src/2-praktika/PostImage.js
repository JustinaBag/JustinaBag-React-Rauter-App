import React from "react";
import "./PostImage.css";



function PostImage(props) {
    console.log(props.PostImage);
    return (
         <div className="Photo mt-4 mb-4 PostImage mb-5">
         <img 
         className="w-100 rounded-circle" 
         src={require(`./${props.PostImage}`)} alt="PostImage"/>
       
     </div>
        
    );
}

export default PostImage;
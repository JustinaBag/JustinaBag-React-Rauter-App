import React from 'react';
import Post2 from './Post2';

function Comments(props) {
    let {comments} = props;
   let list = comments.map(comment =>{
    return (
    <Post2 
    key={comment.id} 
    id={comment.id} 
    name={comment.name} 
    email={comment.email} 
    body={comment.body} 
    />
    );
});
return(
    <div className="row">{list}</div>
)
}
export default Comments;
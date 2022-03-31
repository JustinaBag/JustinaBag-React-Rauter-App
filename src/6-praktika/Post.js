import React from 'react';


function Post(props) {
    let {id, title, body} = props;
return (
    <>
<div className="col-4 pt-4">
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{id + ". " + title}</h5>
            <p className="card-text">{body}</p>
            <a href="#" className="btn btn-primary">Go</a>
        </div>
    </div>
</div>
</>
);
}
export default Post;

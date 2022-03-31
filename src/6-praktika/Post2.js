import React from 'react';


function Post2(props) {
    let {id, name, email, body} = props;
return (
    <>
<div className="col-4 pb-4">
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{id + ". " + name}</h5>
            <p className="card-text"> {email} </p>
                <p>{body}</p>
            <a href="#" className="btn btn-warning">Go</a>
        </div>
    </div>
</div>
</>
);

}
export default Post2;

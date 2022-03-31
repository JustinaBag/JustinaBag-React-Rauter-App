import React from 'react';


function Learning({id, lang, img, status, changeStatus }) {
return (
    <div className="col-4 position-relative" style={{ padding: 140 + "px"}}>
     <div className="card" style={{ width: 18 + "rem"}} >
    <img 
    src={img}
    className="card-img-top w-50 position-absolute end-0 bottom-100 translate-middle-x" 
    alt="img"/>
    <div className="card-body">
        <p className="card-text">{lang}</p>
        <p>{status ? "Išmokau" : "Mokausi"}</p>
        <button onClick={() => changeStatus(id)} className="btn btn-light btn-lg border border-dark">
            OK
        </button>
    </div>
    </div>
    </div>
);
}

export default Learning;
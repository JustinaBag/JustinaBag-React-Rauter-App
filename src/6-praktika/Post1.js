import React from 'react';


function Post1(props) {
    let {id, name, username, email, address, phone, website, company} = props;
return (
    <>
        <div className="col-4 pb-4">
            <div className="card">
                <div className="card-body">
                <div className="text-dark">User Id: {id} </div>
                    <h5 className="card-title">name: {name}</h5>
                    <div>
                    <p>UserName: {username} </p>
                    <p>E-mail: {email}</p>
                    </div>
                    <div>
                    <p>Address: {address.street}</p>
                    <p>{address.suite}</p>
                    <p>{address.city}</p>
                    <p>{address.zipcode}</p>
                    <p>{address.geo.lat}</p>
                    <p>{address.geo.lng}</p>
                    <p>Phone: {phone}</p>
                    <p>Website: {website}</p>
                    <p>Company: {company.name}</p>
                    <p>{company.catchPhrase}</p>
                    <p>{company.bs}</p>
                    </div>
                    <a href="#" className="btn btn-dark">Go</a>
                </div>
            </div>
    </div>
</>
);
}
export default Post1;

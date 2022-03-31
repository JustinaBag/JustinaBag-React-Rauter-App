import React from 'react';
import Post1 from './Post1';

function Users(props) {
    let {users} = props;
   let list = users.map(user =>{
       return (
       <Post1 
       key={user.id} 
       id={user.id}
       name={user.name} 
       username={user.username} 
       email={user.email} 
       address={user.address} 
       phone={user.phone} 
       website={user.website} 
       company={user.company}/>
       );
   });
   return(
       <div className="row">{list}</div>
   )
}

export default Users;
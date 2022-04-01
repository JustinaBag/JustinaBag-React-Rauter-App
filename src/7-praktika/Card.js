import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Card({ id, login, nodeID, url, avatarUrl }) {
  let navigate = useNavigate();

  return (
    <>   
          <div className="col-3">
                <img
                  src={avatarUrl}
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  height="140"
                  aria-label="Placeholder: 140x140"
                  focusable="false"
                ></img>
                
                  <h2 className="text-success">Login:</h2>{login}
                  <p>Node ID: {nodeID}</p>
                <p>
                 
                  <Link to={`/profile/${login}`}>
                    <button className="btn btn-dark">View details &raquo;</button>
                  </Link>
              
                </p>
                </div>  
    </>
  );
}

export default Card;
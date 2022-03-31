import React from "react";
import { useState } from "react";


function Second() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  function countLike() {
    setLike(like + 1);
  }

  function countDislike() {
    setDislike(dislike + 1);
  }

  function reset() {
    setLike(0);
    setDislike(0);
  }

  return (
    <div className="d-flex justify-content-center mb-5" >
      <div className="card" style={{ width: 28 + "rem"}} >
        <img
          src="https://picsum.photos/200/300/?blur=2"
          className="card-img-top w-50"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className="btn btn-success btn-lg me-3" onClick={countLike}>
            Like {like}
          </button>
          <button className="btn btn-danger btn-lg me-3" onClick={countDislike}>
            Dislike {dislike}
          </button>
          <button className="btn btn-light btn-lg me-3 border" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );

}

export default Second;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function Profile() {
  const [profile, setProfile] = useState([]);

  let { username } = useParams();
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mt-5 ">
      <div className="row text-end ">
        <div className="col-6">
          <img src={profile.avatar_url} alt="avatar" />
        </div>
        <div className="col-6 text-start ">
          <p className="fs-3">
            <span className="fw-bold text-success">Name:</span> {profile.name}
          </p>
          <p className="fs-4">
            <span className="text-success ">Login:</span> {profile.login}
          </p>
          <p className="fs-4">
            <span className="text-success ">Followers:</span>
            {profile.followers}
          </p>
          <p className="fs-4">
            <span className="text-success ">Twitter:</span>
            {profile.twitter_username}
          </p>
        </div>
        <p className="text-center mt-2">
          <Link to={`/7`}>
            <button className="btn btn-dark btn-lg ">Go back &raquo;</button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Profile;
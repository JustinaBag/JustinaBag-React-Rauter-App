import React, { useState, useEffect } from 'react';
import Comments from "./Comments";
import Posts from "./Posts";
import Users from "./Users";

function PageDate() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
      // .then(console.log(posts));
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => setComments(json));
    //   .then(console.log(comments));
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
    //   .then(console.log(user));
  }, [page]);

return (
  <>
    <div className="d-flex justify-content-center pb-4 pt-2">
        <button className="btn btn-outline-success mx-3" onClick={() => setPage("posts")}>posts</button>
        <button className="btn btn-outline-success mx-3" onClick={() => setPage("users")}>users</button>
        <button className="btn btn-outline-success mx-3" onClick={() => setPage("comments")}>comments</button>
    </div>
    <div className="container-fluid">
        {page === "posts" && <Posts posts={posts} />}
        {page === "users" && <Users users={users} />} 
        {page === "comments" && <Comments comments={comments} />} 
      </div>
    </>
);
}

export default PageDate;
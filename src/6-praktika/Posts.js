import React from 'react';
import Post from './Post';

function Posts(props) {
    let {posts} = props;
    let list = posts.map(posts =>{
        return (
        <Post 
        key={posts.id} 
        id={posts.id} 
        title={posts.title} 
        body={posts.body} 
        />
        );
    });
    return( 
      <div className="row">{list}</div>
   )
}

export default Posts;
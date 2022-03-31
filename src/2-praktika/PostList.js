import React from 'react';
import PostContent from './PostContent';
import { v4 as uuidv4 } from 'uuid';

function PostList() {
    let posts = [
        {
            title: 'HTML',
            content: 'Lorem HTML',
            img: 'https://picsum.photos/id/237/200/300',
        },
        {
            title: 'CSS',
            content: 'Lorem CSS',
            img: 'https://picsum.photos/seed/picsum/200/300',
        },
        {
            title: 'JS',
            content: 'Lorem JS',
            img: 'https://picsum.photos/200/300?grayscale',
        },
    ];

    let list = posts.map(post => {
        return (
            <PostContent 
            key={uuidv4()}
            title={post.title} 
            content={post.content} 
            img={post.img} />
        );
    });
    return (
    <>
    <div className="d-flex d-flex justify-content-around">{list}</div>
    </>
    );
}

export default PostList;
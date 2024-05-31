import React from "react";
import Post from "./post/Post";



function Posts(props) {
    return (
        <div className="posts">
            <input type="text" placeholder="Enter the post" />
            <button>
                Add post
            </button>
            {props.postList.map(e => <Post message={e.message} id={e.id} />)}
        </div>
    )
}

export default Posts;
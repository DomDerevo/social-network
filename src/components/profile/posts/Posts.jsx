import React from "react";
import Post from "./post/Post";


function Posts() {
    return (
        <div className="posts">
            <input type="text" placeholder="Enter the post" />
            <button>
                Add post
            </button>
            <Post message='Hello world' />
            <Post message='Я Илон Маск!' />
            <Post message='Полетели на марс!' />
            <Post message='Дорбое утро' />
        </div>
    )
}

export default Posts;
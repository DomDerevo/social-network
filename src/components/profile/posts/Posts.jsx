import React from "react";
import Post from "./post/Post";


let postText = React.createRef()

function Posts(props) {
    console.log(props);
    let onPostChange = ()=>{
        props.onPostChange(postText.current.value)
    }
    let addPost = ()=>{
        props.addPost(postText.current.value)
    }
    return (
        <div className="posts">
            <input type="text" placeholder="Enter the post" ref={postText} value={props.newPostText} onChange={onPostChange} />
            <button onClick={addPost} >
                Add post
            </button>
            {props.postList.map(e => <Post message={e.message} id={e.id} />)}
        </div>
    )
}


export default Posts;
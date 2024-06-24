import React from "react";
import Post from "./post/Post";
import { addPostAC,onPostChangeAC } from "../../../Data/state";



let postText = React.createRef()



function Posts(props) {
    console.log(props);
    let onPostChange = () => {
        // props.onPostChange(postText.current.value)
        props.dispatch(onPostChangeAC(postText.current.value))
    }
    let addPost = () => {
        // props.addPost(postText.current.value)
        props.dispatch(addPostAC())
    }
    console.log(props);
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
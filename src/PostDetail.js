import React from "react";


export default function PostDetail ({ comments, posts, currentPost = {} , setCurrentPost }){
  const CommentList = () =>{
    if(currentPost.id === undefined){
      return null;
    }
    else{
      return(
        <ul >
            {comments.map((comment) => (
                <li key={comment.id}>
              {comment.body}
                </li>
            ))}
        </ul>
      )
    }
  }
      return (
        <div>
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <h3>{post.title}</h3>
                    <button onClick={() => setCurrentPost(post)}>
                        {post.body}
                    </button>
                    
                </li>
            ))}
          
        </ul>
          <CommentList/>
          </div>
)
  
}

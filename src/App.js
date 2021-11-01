import React, { useEffect, useState } from "react";
import PostDetail from "./PostDetail";

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [currentPost, setCurrentPost] = useState({});
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => response.json())
      .then(setPosts)
      .catch((error) => {
        console.log(error)
      });
  }, []);
  
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`)
    .then((response)=> response.json())
    .then(setComments)
    .catch((error)=>{
      console.log(error)
    });
    
  }, [currentPost.id]);
  

  
  return (
    <div className="App">
       <PostDetail posts = {posts} setCurrentPost = {setCurrentPost} comments = {comments} currentPost = {currentPost}/>
    </div>
  );
}

export default App;
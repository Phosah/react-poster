import { useLoaderData } from "react-router-dom";

import Post from "./Post";

import classes from "./PostsList.module.css";

function PostsList() {
  const posts = useLoaderData();

  function addPostHandler(postData) {
    // Not an optimal method to update state with old state
    // setPosts([postData, ...posts]);
    // setPosts((existingPosts) => [postData, ...existingPosts]);

    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;

import { selectAllPosts } from "./postsSlice";
import {useSelector} from "react-redux"
import React from "react";
import PostAuthor from "./PostAuthor";

const PostsList = () => {

    const posts = useSelector(selectAllPosts);
    // const posts = useSelector(state => state.posts);
    // what if the state changes, that's why it is good to import the selector that's why we don't need to change the each components 

    const renderedPosts = posts.map(post =>(
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId}></PostAuthor>
            </p>
        </article>
    ))

  return (
    <section>
        <h2>Posts</h2>
        {renderedPosts}
    </section>
  );
};

export default PostsList;

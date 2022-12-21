import { selectAllPosts } from "./postsSlice";
import {useSelector} from "react-redux"
import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {

    const posts = useSelector(selectAllPosts);

    const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
    // const posts = useSelector(state => state.posts);
    // what if the state changes, that's why it is good to import the selector that's why we don't need to change the each components 

    const renderedPosts = orderedPosts.map(post =>(
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId}></PostAuthor>
                <TimeAgo timestamp={post.date}></TimeAgo>
            </p>
            <ReactionButtons post={post}></ReactionButtons>
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

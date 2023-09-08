import { Suspense } from "react";
import Posts from "../page";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

async function Page({ params }) {
  const post = await loadPost(params.postId);
  return (
    <div>
      <h1>
        {post.id} {post.title}
      </h1>
      <p>{post.body}</p>
      <hr />
      <h3>Other posts</h3>

      <Suspense fallback={<div>Loading posts....</div>}>
        <Posts />
      </Suspense>
    </div>
  );
}

export default Page;

import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post/Post";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("./blogs.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="w-2/3">
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;

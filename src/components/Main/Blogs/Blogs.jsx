import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post/Post";

const Blogs = ({ bookmarkHandle, readingTimeHandler }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("./blogs.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="w-full md:w-2/3">
      <div>
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            bookmarkHandle={bookmarkHandle}
            readingTimeHandler={readingTimeHandler}
          />
        ))}
      </div>
    </div>
  );
};

Blogs.propTypes = {
  bookmarkHandle: PropTypes.func.isRequired,
  readingTimeHandler: PropTypes.func.isRequired,
};

export default Blogs;

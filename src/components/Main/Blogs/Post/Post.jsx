import PropTypes from "prop-types";
import bookmarkIcon from "../../Bookmarks/bookmark.svg";

const Post = ({ post }) => {
  console.log(post);
  const { author, title, thumbnail, content, readingTime, tags, date } = post;
  return (
    <div className="flex flex-col gap-3 border-b-2 mb-5">
      <img src={thumbnail} alt="" className="rounded-md" />
      <div className="flex justify-between items-center px-2">
        <div className="flex gap-3 items-center">
          <img src={author.img} alt="" className="w-10 h-10 rounded-full" />
          <span>
            <h3 className="text-xl font-bold">{author.name}</h3>
            <p className="text-gray-400">{date}</p>
          </span>
        </div>
        <div className="flex gap-1 items-center">
          <span>{readingTime} min read</span>
          <img src={bookmarkIcon} alt="" className="w-4" />
        </div>
      </div>
      <div>
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-slate-500 mt-5">{content}</p>
      </div>
      <div className="flex gap-2">
        {tags.map((tag, index) => (
          <span key={index}>
            <a href="" className="text-[#11111199] hover:text-[#111111FF]">
              #{tag}
            </a>
          </span>
        ))}
      </div>
      <div>
        <button className="text-[#6047EC] hover:text-[#332591] mb-3">
          Mark as read
        </button>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;

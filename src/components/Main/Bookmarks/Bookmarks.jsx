import PropTypes from "prop-types";
import Bookmark from "./Bookmarked/Bookmark";
const Bookmarks = ({ bookmark, saveReadingTime }) => {
  return (
    <div className="w-full md:w-1/3 px-3">
      <div className="md:sticky md:top-20">
        <div className="bg-[#6047EC1A] md:text-center px-1 py-2 rounded-md">
          <span className="font-bold">Spent time on read:</span>{" "}
          {saveReadingTime} minutes
        </div>
        <div className="bg-[#6047EC1A] px-1 py-2 rounded-md mt-2">
          <h4 className="px-2 py-1 font-bold">
            Bookmarked Blogs: {bookmark.length}
          </h4>
          <div>
            {bookmark.map((title, idx) => (
              <Bookmark key={idx} bookmarkTitle={title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmark: PropTypes.array.isRequired,
  saveReadingTime: PropTypes.number.isRequired,
};

export default Bookmarks;

import PropTypes from "prop-types";

const Bookmark = ({ bookmarkTitle }) => {
  const { title } = bookmarkTitle;
  return <p className="bg-white p-2 font-semibold m-2 rounded-md">{title}</p>;
};

Bookmark.propTypes = {
  bookmarkTitle: PropTypes.object.isRequired,
};

export default Bookmark;

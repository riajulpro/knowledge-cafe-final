import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Blogs from "./components/Main/Blogs/Blogs";
import Bookmarks from "./components/Main/Bookmarks/Bookmarks";

function App() {
  const [bookmark, setBookmark] = useState([]);
  const bookmarkHandle = (post) => {
    const newBookmark = [...bookmark, post];
    setBookmark(newBookmark);
  };
  const [saveReadingTime, setReadingTime] = useState(0);
  const readingTimeHandler = (time, id) => {
    setReadingTime(saveReadingTime + time);
    const remaining = bookmark.filter((item) => item.id !== id);
    setBookmark(remaining);
  };

  return (
    <div className="">
      <Header />
      <main className="md:flex container p-4 mx-auto">
        <Blogs
          bookmarkHandle={bookmarkHandle}
          readingTimeHandler={readingTimeHandler}
        />
        <Bookmarks bookmark={bookmark} saveReadingTime={saveReadingTime} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

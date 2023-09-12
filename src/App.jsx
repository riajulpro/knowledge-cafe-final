import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Blogs from "./components/Main/Blogs/Blogs";
import Bookmarks from "./components/Main/Bookmarks/Bookmarks";

function App() {
  return (
    <div className="container p-4 mx-auto">
      <Header />
      <main className="md:flex">
        <Blogs />
        <Bookmarks />
      </main>
      <Footer />
    </div>
  );
}

export default App;

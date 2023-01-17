import { Routes, Route, useLocation } from "react-router-dom";

import styles from "./styles/App.module.scss";

import Sidebar from "./components/Layout/Sidebar/Sidebar";
import Home from "./components/Pages/Home/Home";
import Breeds from "./components/Pages/Breeds/Breeds";
import BreedInfo from "./components/Pages/BreedInfo/BreedInfo";
import Voting from "./components/Pages/Voting/Voting";
import Gallery from "./components/Pages/Gallery/Gallery";
import Likes from "./components/Pages/Likes/Likes";
import Dislikes from "./components/Pages/Dislikes/Dislikes";
import Favourites from "./components/Pages/Favourites/Favourites";
import Search from "./components/Pages/Search/Search";
import { useSelector } from "react-redux";
import { useMediaQuery } from "./hooks/useMedia";

const App = () => {
  const location = useLocation();
  const isLaptop = useMediaQuery("(max-width: 1200px)");
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className={`${!darkMode ? styles.app : `${styles.app} ${styles.dark}`}`}
    >
      {(!isLaptop || (isLaptop && location.pathname === "/")) && <Sidebar />}
      <div
        className={
          !isLaptop || (isLaptop && location.pathname !== "/")
            ? styles.right
            : `${styles.right} ${styles.page}`
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/breeds/:breedId" element={<BreedInfo />} />
          <Route path="/voting" element={<Voting />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/dislikes" element={<Dislikes />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

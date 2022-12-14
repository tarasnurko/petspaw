import { Routes, Route } from "react-router-dom";

import styles from "./App.module.scss";

import Sidebar from "./components/Layout/Sidebar";
import Home from "./components/Pages/Home";
import Breeds from "./components/Pages/Breeds";
import BreedInfo from "./components/Pages/BreedInfo";
import Voting from "./components/Pages/Voting";
import Gallery from "./components/Pages/Gallery";
import Likes from "./components/Pages/Likes";
import Dislikes from "./components/Pages/Dislikes";
import Favourites from "./components/Pages/Favourites";
import Search from "./components/Pages/Search";
import { useSelector } from "react-redux";

const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className={`${!darkMode ? styles.app : `${styles.app} ${styles.dark}`}`}
    >
      <Sidebar />
      <div className={styles.right}>
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

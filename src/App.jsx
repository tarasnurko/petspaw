import { Routes, Route } from "react-router-dom";

import styles from "./App.module.scss";

import Sidebar from "./components/Layout/Sidebar";
import Home from "./components/Pages/Home";
import Breeds from "./components/Pages/Breeds";
import BreedInfo from "./components/Pages/BreedInfo";
import Voting from "./components/Pages/Voting";
import Gallery from "./components/Pages/Gallery";

const App = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.right}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/breeds/:breedId" element={<BreedInfo />} />
          <Route path="/voting" element={<Voting />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

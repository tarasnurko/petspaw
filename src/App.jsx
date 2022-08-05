import { Routes, Route } from "react-router-dom";

import styles from "./App.module.scss";

import Sidebar from "./components/Layout/Sidebar";
import Home from "./components/Pages/Home";
import Breeds from "./components/Pages/Breeds";

const App = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.right}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breeds" element={<Breeds />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

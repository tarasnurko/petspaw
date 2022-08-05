import { Routes, Route } from "react-router-dom";

import styles from "./App.module.scss";

import Sidebar from "./components/Layout/Sidebar";
import Home from "./components/Pages/Home";

const App = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.right}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";
import { LogoIcon } from "./assets/index";
import styles from "./App.module.scss";
import Menu from "./components/Menu";
import Home from "./components/Home";

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.left}>
        <LogoIcon />
        <h1 className={styles.title}>Hi there!😊</h1>
        <h2 className={styles.subtitle}>Welcome to PetsPaw application!</h2>
        <p className={styles.text}>Lets start using The Cat API</p>

        <Menu />
      </div>
      <div className={styles.right}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

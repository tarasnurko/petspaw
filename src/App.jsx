import { LogoIcon } from "./assets/index";
import styles from "./App.module.scss";
import Menu from "./components/Menu";

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
      <div className={styles.right}></div>
    </div>
  );
};

export default App;

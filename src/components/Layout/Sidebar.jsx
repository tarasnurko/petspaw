import React from "react";
import styles from "./Sidebar.module.scss";
import { LogoIcon } from "../../assets/index";
import Menu from "../Menu/Menu";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <LogoIcon />
      <h1 className={styles.title}>Hi there!😊</h1>
      <h2 className={styles.subtitle}>Welcome to PetsPaw application!</h2>
      <p className={styles.text}>Lets start using The Cat API</p>

      <Menu />
    </div>
  );
};

export default Sidebar;

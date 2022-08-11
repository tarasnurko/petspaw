import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowIcon } from "../../assets";
import styles from "./BackButton.module.scss";

const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button className={styles.btn} onClick={handleClick}>
      <ArrowIcon />
    </button>
  );
};

export default BackButton;

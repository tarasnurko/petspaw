import React, { useMemo } from "react";
import BackButton from "../../UI/BackButton/BackButton";
import Header from "../../Header/Header";
import List from "../../List/List";
import Message from "../../UI/Message/Message";
import PageInfo from "../../UI/PageInfo/PageInfo";
import styles from "./Dislikes.module.scss";
import Spinner from "../../UI/Spinner/Spinner";
import { useGetVotesQuery } from "../../../features/api/apiSlice";
import { useSelector } from "react-redux";

const Dislikes = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const { data: votes = [], isLoading: votesIsLoading } = useGetVotesQuery();

  const sortedVotes = useMemo(() => {
    const sortedVotes = votes
      .filter((vote) => vote.value === 0)
      .slice()
      .reverse();
    return sortedVotes;
  }, [votes]);

  return (
    <div
      className={`${
        !darkMode ? styles.container : `${styles.container} ${styles.dark}`
      }`}
    >
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <BackButton />
          <PageInfo active>DISLIKES</PageInfo>
        </div>
        {votesIsLoading ? (
          <Spinner />
        ) : votes.length ? (
          <List
            images={sortedVotes.map((vote) => ({
              url: vote.image.url,
              id: vote.image_id,
            }))}
          />
        ) : (
          <Message>No item found</Message>
        )}
      </div>
    </div>
  );
};

export default Dislikes;

import React from "react";
import {
  LikeIcon,
  FavouriteIcon,
  DislikeIcon,
  GreenSmileIcon,
  YellowSmileIcon,
} from "../../assets";
import BackButton from "../UI/BackButton";
import Header from "../Header/Header";
import Message from "../UI/Message";
import PageInfo from "../UI/PageInfo";
import styles from "./Voting.module.scss";
import {
  useGetBreedImagesQuery,
  useCreateVoteMutation,
  useGetVotesQuery,
} from "../../features/api/apiSlice";

const Voting = () => {
  const {
    data: breedImage,
    isLoading: imageIsLoading,
    refetch: refetchImage,
  } = useGetBreedImagesQuery({ limit: 1, breedId: "" });
  const { data: votes, isLoading: votesIsLoading } = useGetVotesQuery();
  const [createVote] = useCreateVoteMutation();

  const createVoteHandler = async (vote) => {
    try {
      await createVote({ imageId: breedImage[0]?.id, value: vote });
      refetchImage();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <BackButton />
          <PageInfo active>VOTING</PageInfo>
        </div>

        <div className={styles.main}>
          {!imageIsLoading && breedImage.length && (
            <img className={styles.img} src={breedImage[0]?.url} alt="img" />
          )}
          <div className={styles["voting-container"]}>
            <button
              className={`${styles["voting-item"]} ${styles["voting-like"]}`}
              onClick={() => createVoteHandler(1)}
            >
              <LikeIcon />
            </button>
            <button
              className={`${styles["voting-item"]} ${styles["voting-fav"]}`}
            >
              <FavouriteIcon />
            </button>
            <button
              className={`${styles["voting-item"]} ${styles["voting-dislike"]}`}
              onClick={() => createVoteHandler(0)}
            >
              <DislikeIcon />
            </button>
          </div>
        </div>

        <div className={styles.bottom}>
          {!votesIsLoading &&
            votes
              .slice(0)
              .reverse()
              .map((vote) =>
                vote.value === 1 ? (
                  <Message
                    date={`${new Date(vote.created_at).getHours()}:${new Date(
                      vote.created_at
                    ).getMinutes()}`}
                    icon={<GreenSmileIcon />}
                    key={vote.id}
                  >
                    Image ID: <span>{vote.id}</span> was added to Likes
                  </Message>
                ) : (
                  <Message
                    date={`${new Date(vote.created_at).getHours()}:${new Date(
                      vote.created_at
                    ).getMinutes()}`}
                    icon={<YellowSmileIcon />}
                    key={vote.id}
                  >
                    Image ID: <span>{vote.id}</span> was added to Dislikes
                  </Message>
                )
              )}
        </div>
      </div>
    </div>
  );
};

export default Voting;

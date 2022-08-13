import React, { useMemo } from "react";
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
  useAddFavouriteMutation,
} from "../../features/api/apiSlice";

const Voting = () => {
  const {
    data: breedImage,
    isLoading: imageIsLoading,
    refetch: refetchImage,
  } = useGetBreedImagesQuery({ limit: 1, breedId: "" });
  const { data: votes = [], isLoading: votesIsLoading } = useGetVotesQuery();
  const [createVote, { isLoading: createVoteIsLoading }] =
    useCreateVoteMutation();
  const [addFavourite] = useAddFavouriteMutation();

  const createVoteHandler = async (vote) => {
    await createVote({ imageId: breedImage[0]?.id, value: vote });
    refetchImage();
  };

  const addFavouriteHandler = async () => {
    await addFavourite(breedImage[0]?.id);
    refetchImage();
  };

  const sortedVotes = useMemo(() => {
    const sortedVotes = votes.slice().reverse();
    return sortedVotes;
  }, [votes]);

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
              disabled={imageIsLoading || createVoteIsLoading}
              onClick={() => createVoteHandler(1)}
            >
              <LikeIcon />
            </button>
            <button
              className={`${styles["voting-item"]} ${styles["voting-fav"]}`}
              onClick={addFavouriteHandler}
            >
              <FavouriteIcon />
            </button>
            <button
              className={`${styles["voting-item"]} ${styles["voting-dislike"]}`}
              disabled={imageIsLoading || createVoteIsLoading}
              onClick={() => createVoteHandler(0)}
            >
              <DislikeIcon />
            </button>
          </div>
        </div>

        <div className={styles.bottom}>
          {!votesIsLoading &&
            sortedVotes.map((vote) => {
              const minutes =
                new Date(vote.created_at).getMinutes() < 10
                  ? `0${new Date(vote.created_at).getMinutes()}`
                  : new Date(vote.created_at).getMinutes();

              const hours =
                new Date(vote.created_at).getHours() < 10
                  ? `0${new Date(vote.created_at).getHours()}`
                  : new Date(vote.created_at).getHours();

              return vote.value === 1 ? (
                <Message
                  date={`${hours}:${minutes}`}
                  icon={<GreenSmileIcon />}
                  key={vote.id}
                >
                  Image ID: <span>{vote.id}</span> was added to Likes
                </Message>
              ) : (
                <Message
                  date={`${hours}:${minutes}`}
                  icon={<YellowSmileIcon />}
                  key={vote.id}
                >
                  Image ID: <span>{vote.id}</span> was added to Dislikes
                </Message>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Voting;

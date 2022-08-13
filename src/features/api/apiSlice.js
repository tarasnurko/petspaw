import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiHeaders = {
  "x-api-key": "baf64479-6699-47e9-8abe-13a1d648c015",
};

export const catApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.thecatapi.com/v1" }),
  tagTypes: ["Vote", "Favourite"],
  endpoints: (builder) => ({
    getBreeds: builder.query({
      query: () => ({
        url: "/breeds",
        headers: apiHeaders,
      }),
    }),
    getBreedImages: builder.query({
      query: ({ limit, breedId, order, page }) => ({
        url: `/images/search?breed_id=${breedId}&limit=${limit}&order=${order}&page=${page}`,
        headers: apiHeaders,
      }),
    }),
    getVotes: builder.query({
      query: () => ({
        url: "/votes",
        headers: apiHeaders,
      }),
      providesTags: ["Vote"],
    }),
    createVote: builder.mutation({
      query: ({ imageId, value }) => ({
        url: "/votes",
        method: "POST",
        headers: apiHeaders,
        body: { image_id: imageId, value },
      }),
      invalidatesTags: ["Vote"],
    }),
    deleteVote: builder.mutation({
      query: (voteId) => ({
        url: "/votes/" + voteId,
        method: "DELETE",
        headers: apiHeaders,
      }),
    }),
    getFavourites: builder.query({
      query: () => ({
        url: "/favourites",
        headers: apiHeaders,
      }),
      providesTags: ["Favourite"],
    }),
    addFavourite: builder.mutation({
      query: (imageId) => ({
        url: "/favourites",
        method: "POST",
        headers: apiHeaders,
        body: { image_id: imageId },
      }),
      invalidatesTags: ["Favourite"],
    }),
  }),
});

export const {
  useGetBreedsQuery,
  useGetBreedImagesQuery,
  useGetVotesQuery,
  useCreateVoteMutation,
  useDeleteVoteMutation,
  useGetFavouritesQuery,
  useAddFavouriteMutation,
  useRemoveFavouriteMutation,
} = catApi;

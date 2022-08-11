import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiHeaders = {
  "x-api-key": "baf64479-6699-47e9-8abe-13a1d648c015",
};

export const catApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.thecatapi.com/v1" }),
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
  }),
});

export const { useGetBreedsQuery, useGetBreedImagesQuery } = catApi;

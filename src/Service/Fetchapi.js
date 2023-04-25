import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const Fetchapi = createApi({
  reducerPath: "/fetchmdb",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/" }),
  endpoints: (builder) => ({
    daycollectionmovie: builder.query({
      query: () => ({
        url: "3/trending/movie/day?api_key=a6cdd43496f682f8873f760d592ade39",
        method: "get",
      }),
    }),
    weekcollectionmovie: builder.query({
      query: () => ({
        url: "3/trending/all/week?api_key=a6cdd43496f682f8873f760d592ade39",
      }),
    }),
    toprated: builder.query({
      query: () => ({
        url: "3/movie/top_rated?api_key=a6cdd43496f682f8873f760d592ade39",
      }),
    }),
    Webseries: builder.query({
      query: () => ({
        url: "https://api.themoviedb.org/3/trending/movie/day?api_key=a6cdd43496f682f8873f760d592ade39&page=100",
      }),
    }),
    Tv: builder.query({
      query: () => ({
        url: "https://api.themoviedb.org/3/trending/movie/day?api_key=a6cdd43496f682f8873f760d592ade39&page=20",
      }),
    }),
    Treanding: builder.query({
      query: () => ({
        url: "https://api.themoviedb.org/3/trending/movie/day?api_key=a6cdd43496f682f8873f760d592ade39&page=4",
      }),
    }),
    Getmoviedata: builder.query({
      query: (id) =>
        // console.log(id),
        ({
          url: `3/movie/${id}?api_key=a6cdd43496f682f8873f760d592ade39&language=en-US`,
        }),
    }),
    Getsimilarmoviedata: builder.query({
      query: (id) => ({
        url: `3/movie/${id}/similar?api_key=a6cdd43496f682f8873f760d592ade39`,
      }),
    }),
    Gettrailerid: builder.query({
      query: (id) => ({
        url: `3/movie/${id}/videos?api_key=a6cdd43496f682f8873f760d592ade39&language=en-US`,
      }),
    }),
  }),
});

export const {
  useTopratedQuery,
  useDaycollectionmovieQuery,
  useWeekcollectionmovieQuery,
  useTvQuery,
  useWebseriesQuery,
  useTreandingQuery,
  useGetmoviedataQuery,
  useGettraileridQuery,
  useGetsimilarmoviedataQuery,
} = Fetchapi;

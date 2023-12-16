import { apiSlice } from "../../slices/apiSlice";
import { MEDIA_URL } from "../constants";

export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchMedia: builder.query({
      query: () => `${MEDIA_URL}`,
    }),
  }),
});

export const { useFetchMediaQuery } = categoryApiSlice;

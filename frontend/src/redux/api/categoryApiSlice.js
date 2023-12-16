import { apiSlice } from "../../slices/apiSlice";
import { CATEGORIES_URL } from "../constants";

export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: (pageNumber) => ({
        url: CATEGORIES_URL,
        params: {
          pageNumber,
        },
      }),
      providesTags: ["Categories"],
      keepUnusedDataFor: 5,
    }),
    fetchCategories: builder.query({
      query: () => `${CATEGORIES_URL}`,
    }),
  }),
});

export const { useGetCategoriesQuery, useFetchCategoriesQuery } =
  categoryApiSlice;

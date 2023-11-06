import { apiSlice } from "./apiSlice";
import { COMPOSERS_URL } from "../constants";

export const composersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createComposer: builder.mutation({
      query: (data) => ({
        url: `${COMPOSERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    getComposers: builder.query({
      query: ({ pageNumber }) => ({
        url: COMPOSERS_URL,
        params: {
          pageNumber,
        },
      }),
      providesTags: ["Composer"],
      keepUnusedDataFor: 5,
    }),
    getComposerDetails: builder.query({
      query: (composerId) => ({
        url: `${COMPOSERS_URL}/${composerId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    updateComposer: builder.mutation({
      query: (data) => ({
        url: `${COMPOSERS_URL}/${data.composerId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Composers"],
    }),
    deleteComposer: builder.mutation({
      query: (composerId) => ({
        url: `${COMPOSERS_URL}/${composerId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateComposerMutation,
  useGetComposersQuery,
  useGetComposerFormListQuery,
  useGetComposerDetailsQuery,
  useUpdateComposerMutation,
  useDeleteComposerMutation,
} = composersApiSlice;

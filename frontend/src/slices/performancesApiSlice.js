import { PERFORMANCES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const performancesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPerformance: builder.mutation({
      query: (performance) => ({
        url: PERFORMANCES_URL,
        method: "POST",
        body: { ...performance },
      }),
    }),
    getPerformances: builder.query({
      query: () => ({
        url: PERFORMANCES_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getPerformanceDetail: builder.query({
      query: (performanceId) => ({
        url: `${PERFORMANCES_URL}/${performanceId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    updatePerformance: builder.mutation({
      query: (data) => ({
        url: `${PERFORMANCES_URL}/${data.performanceId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Performances"],
    }),
    deletePerformance: builder.mutation({
      query: (performanceId) => ({
        url: `${PERFORMANCES_URL}/${performanceId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreatePerformanceMutation,
  useGetPerformancesQuery,
  useGetPerformanceDetailQuery,
  useUpdatePerformanceMutation,
  useDeletePerformanceMutation,
} = performancesApiSlice;

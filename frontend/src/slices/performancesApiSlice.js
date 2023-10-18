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
  }),
});

export const {
  useCreatePerformanceMutation,
  useGetPerformancesQuery,
  useGetPerformanceDetailQuery,
} = performancesApiSlice;

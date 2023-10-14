import { PERFORMANCES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const performancesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
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

export const { useGetPerformancesQuery, useGetPerformanceDetailQuery } =
  performancesApiSlice;

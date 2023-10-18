import { RECORDINGS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const recordingsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createRecording: builder.mutation({
      query: (recording) => ({
        url: RECORDINGS_URL,
        method: "POST",
        body: { ...recording },
      }),
    }),
    getRecordings: builder.query({
      query: () => ({
        url: RECORDINGS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getRecordingDetail: builder.query({
      query: (recordingId) => ({
        url: `${RECORDINGS_URL}/${recordingId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useCreateRecordingMutation,
  useGetRecordingsQuery,
  useGetRecordingDetailQuery,
} = recordingsApiSlice;

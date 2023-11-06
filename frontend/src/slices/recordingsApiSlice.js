import { RECORDINGS_URL, UPLOAD_URL } from "../constants";
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
      query: ({ pageNumber }) => ({
        url: RECORDINGS_URL,
        params: {
          pageNumber,
        },
      }),
      keepUnusedDataFor: 5,
    }),
    getRecordingsSortList: builder.query({
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
    updateRecording: builder.mutation({
      query: (data) => ({
        url: `${RECORDINGS_URL}/${data.recordingId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Recordings"],
    }),
    uploadCoverImage: builder.mutation({
      query: (data) => ({
        url: `${UPLOAD_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    deleteRecording: builder.mutation({
      query: (recordingId) => ({
        url: `${RECORDINGS_URL}/${recordingId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateRecordingMutation,
  useGetRecordingsQuery,
  useGetRecordingsSortListQuery,
  useGetRecordingDetailQuery,
  useUpdateRecordingMutation,
  useDeleteRecordingMutation,
  useUploadCoverImageMutation,
} = recordingsApiSlice;

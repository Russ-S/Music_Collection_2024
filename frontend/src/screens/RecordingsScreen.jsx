import { Row, Col } from "react-bootstrap";
import Recording from "../components/Recording";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useGetRecordingsQuery } from "../slices/recordingsApiSlice";

const RecordingScreen = () => {
  const { data: recordings, isLoading, error } = useGetRecordingsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h2 className="text-white">All Recordings</h2>
          <Row>
            {recordings.map((recording) => (
              <Col key={recording._id} sm={6} md={6} lg={4} xl={3}>
                <Recording recording={recording} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};
export default RecordingScreen;

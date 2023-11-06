import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Recording from "../components/Recording";
import Loader from "../components/Loader";
import Message from "../components/Message";
import PaginateRecordings from "../components/PaginateRecordings";
import { useGetRecordingsQuery } from "../slices/recordingsApiSlice";

const CDRScreen = () => {
  const { pageNumber } = useParams();

  const { data, isLoading, error } = useGetRecordingsQuery({ pageNumber });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <div className="propertyList">
          <h2>CD-Recordables</h2>
          <Row>
            {data.recordings.map((recording) => (
              <Col key={recording._id} sm={6} md={6} lg={4} xl={3}>
                <Recording recording={recording} />
              </Col>
            ))}
          </Row>
          <PaginateRecordings pages={data.pages} page={data.page} />
        </div>
      )}
    </>
  );
};
export default CDRScreen;
// {
//   names.filter(name => name.includes('J')).map(filteredName => (
//     <li>
//       {filteredName}
//     </li>
// }

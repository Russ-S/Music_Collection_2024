import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { Table, Button, Row, Col } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import {
  useGetRecordingsQuery,
  useDeleteRecordingMutation,
} from "../../slices/recordingsApiSlice";

const RecordingListScreen = () => {
  const {
    data: recordings,
    isLoading,
    error,
    refetch,
  } = useGetRecordingsQuery();

  const [deleteRecording, { isLoading: loadingDelete }] =
    useDeleteRecordingMutation();

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete this recording?")) {
      try {
        await deleteRecording(id);
        toast.success("Recording deleted");
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className="propertyList">
      <Row className="align-items-center">
        <Col>
          <h1>Recordings</h1>
        </Col>
        <Col className="text-end">
          <Link className="btn btn-dark my-3" to="/admin/addrecording">
            <FaEdit /> Add Recording
          </Link>
        </Col>
      </Row>

      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped hover responsive className="table=sm">
            <thead>
              <tr>
                <th>COMPOSER</th>
                <th>COMPOSITION</th>
                <th>CATEGORY</th>
                <th>MEDIA</th>
                <th>LOCATION</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {recordings.map((recording) => (
                <tr key={recording._id}>
                  <td className="text-start">{recording.composer}</td>
                  <td className="text-start">{recording.composition}</td>
                  <td>{recording.workCategory}</td>
                  <td>{recording.media}</td>
                  <td>{recording.location}</td>
                  <td>
                    <LinkContainer
                      to={`/admin/recording/${recording._id}/edit`}
                    >
                      <Button variant="light" className="btn-sm mx-2">
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(recording._id)}
                    >
                      <FaTrash style={{ color: "white" }} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
};
export default RecordingListScreen;

import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import {
  useGetLabelsQuery,
  useCreateLabelMutation,
  useDeleteLabelMutation,
} from "../../slices/labelsApiSlice";

const LabelListScreen = () => {
  const { data: labels, isLoading, error, refetch } = useGetLabelsQuery();

  const [addLabel, { isLoading: loadingCreate }] = useCreateLabelMutation();

  const [deleteLabel, { isLoading: loadingDelete }] = useDeleteLabelMutation();

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete this label?")) {
      try {
        await deleteLabel(id);
        toast.success("Label deleted");
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const addLabelHandler = async () => {
    if (window.confirm("Are you sure you want to add this label?")) {
      try {
        await addLabel();
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
          <h1>Labels</h1>
        </Col>
        <Col className="text-end">
          <Button className="btn-sm m-3" onClick={addLabelHandler}>
            <FaEdit /> Add Composer
          </Button>
        </Col>
      </Row>

      {loadingCreate && <Loader />}
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
                <th>ID</th>
                <th>NAME</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {labels.map((label) => (
                <tr key={label._id}>
                  <td>{label._id}</td>
                  <td>{label.name}</td>
                  <td>
                    <LinkContainer to={`/admin/label/${label._id}/edit`}>
                      <Button variant="light" className="btn-sm mx-2">
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(label._id)}
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
export default LabelListScreen;

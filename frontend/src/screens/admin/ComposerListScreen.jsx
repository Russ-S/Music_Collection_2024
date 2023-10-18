import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import {
  useGetComposersQuery,
  useCreateComposerMutation,
  useDeleteComposerMutation,
} from "../../slices/composersApiSlice";

const ComposerListScreen = () => {
  const { data: composers, isLoading, error, refetch } = useGetComposersQuery();

  const [addComposer, { isLoading: loadingCreate }] =
    useCreateComposerMutation();

  const [deleteComposer, { isLoading: loadingDelete }] =
    useDeleteComposerMutation();

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        await deleteComposer(id);
        toast.success("Composer deleted");
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const addComposerHandler = async () => {
    if (window.confirm("Are you sure you want to add this composer?")) {
      try {
        await addComposer();
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
          <h1>Composers</h1>
        </Col>
        <Col className="text-end">
          <Button className="btn-sm m-3" onClick={addComposerHandler}>
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
              {composers.map((composer) => (
                <tr key={composer._id}>
                  <td>{composer._id}</td>
                  <td>{composer.name}</td>
                  <td>
                    <LinkContainer to={`/admin/composer/${composer._id}/edit`}>
                      <Button variant="light" className="btn-sm mx-2">
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(composer._id)}
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
export default ComposerListScreen;

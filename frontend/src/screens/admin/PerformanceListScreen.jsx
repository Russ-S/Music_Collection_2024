import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { Table, Button, Row, Col } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import {
  // useCreatePerformanceMutation,
  useGetPerformancesQuery,
  useDeletePerformanceMutation,
} from "../../slices/performancesApiSlice";

const PerformanceListScreen = () => {
  const {
    data: performances,
    isLoading,
    error,
    refetch,
  } = useGetPerformancesQuery();

  // const [addPerformance, { isLoading: loadingCreate }] =
  //   useCreatePerformanceMutation();

  const [deletePerformance, { isLoading: loadingDelete }] =
    useDeletePerformanceMutation();

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete this performance?")) {
      try {
        await deletePerformance(id);
        toast.success("Performance deleted");
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  // const addPerformanceHandler = async () => {
  //   if (window.confirm("Are you sure you want to add this performance?")) {
  //     try {
  //       await addPerformance();
  //       refetch();
  //     } catch (err) {
  //       toast.error(err?.data?.message || err.error);
  //     }
  //   }
  // };

  return (
    <div className="propertyList">
      <Row className="align-items-center">
        <Col>
          <h1>Performances</h1>
        </Col>
        <Col className="text-end">
          <Link className="btn btn-dark my-3" to="/admin/addperformance">
            <FaEdit /> Add Performance
          </Link>
        </Col>
      </Row>

      {/* {loadingCreate && <Loader />} */}
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
                <th>DATE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {performances.map((performance) => (
                <tr key={performance._id}>
                  <td className="text-start">{performance.composer}</td>
                  <td className="text-start">{performance.composition}</td>
                  <td>{performance.workCategory}</td>
                  <td>{performance.performanceDate.substring(0, 10)}</td>
                  <td>
                    <LinkContainer
                      to={`/admin/performance/${performance._id}/edit`}
                    >
                      <Button variant="light" className="btn-sm mx-2">
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(performance._id)}
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
export default PerformanceListScreen;

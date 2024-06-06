import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { Table, Button, Row, Col } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import PaginatePerformances from "../../components/PaginatePerformances";
import { toast } from "react-toastify";
import {
  useGetPerformancesQuery,
  useDeletePerformanceMutation,
} from "../../slices/performancesApiSlice";

const PerformanceListScreen = () => {
  const { pageNumber } = useParams();

  const { data, isLoading, error, refetch } = useGetPerformancesQuery({
    pageNumber,
  });

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

      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th style={{ backgroundColor: "#000", color: "#fff" }}>
                  COMPOSER
                </th>
                <th style={{ backgroundColor: "#000", color: "#fff" }}>
                  COMPOSITION
                </th>
                <th style={{ backgroundColor: "#000", color: "#fff" }}>
                  CATEGORY
                </th>
                <th style={{ backgroundColor: "#000", color: "#fff" }}>DATE</th>
                <th style={{ backgroundColor: "#000", color: "#fff" }}>
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody>
              {data.performances.map((performance) => (
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
          <PaginatePerformances
            pages={data.pages}
            page={data.page}
            isAdmin={true}
          />
        </>
      )}
    </div>
  );
};

export default PerformanceListScreen;

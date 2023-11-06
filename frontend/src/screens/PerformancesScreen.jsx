import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Performance from "../components/Performance";
import Loader from "../components/Loader";
import Message from "../components/Message";
import PaginatePerformances from "../components/PaginatePerformances";
import { useGetPerformancesQuery } from "../slices/performancesApiSlice";

const PerformancesScreen = () => {
  const { pageNumber } = useParams();

  const { data, isLoading, error } = useGetPerformancesQuery({ pageNumber });

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
          <h2>All Performances</h2>
          <Row>
            {data.performances.map((performance) => (
              <Col key={performance._id} sm={6} md={6} lg={4} xl={3}>
                <Performance performance={performance} />
              </Col>
            ))}
          </Row>
          <PaginatePerformances pages={data.pages} page={data.page} />
        </div>
      )}
    </>
  );
};
export default PerformancesScreen;

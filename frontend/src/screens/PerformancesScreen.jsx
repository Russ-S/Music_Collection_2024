import { Row, Col } from "react-bootstrap";
import Performance from "../components/Performance";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useGetPerformancesQuery } from "../slices/performancesApiSlice";

const PerformancesScreen = () => {
  const { data: performances, isLoading, error } = useGetPerformancesQuery();

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
          <h2 className="text-white">Performances</h2>
          <Row>
            {performances.map((performance) => (
              <Col key={performance._id} sm={6} md={6} lg={4} xl={3}>
                <Performance performance={performance} />S
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};
export default PerformancesScreen;

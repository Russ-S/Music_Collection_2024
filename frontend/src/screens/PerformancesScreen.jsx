import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Performance from "../components/Performance";
import axios from "axios";

const PerformancesScreen = () => {
  const [performances, setPerformances] = useState([]);

  useEffect(() => {
    const fetchPerformances = async () => {
      const { data } = await axios.get("/api/performances");
      setPerformances(data);
    };

    fetchPerformances();
  }, []);
  return (
    <>
      <h2 className="text-white">Performances</h2>
      <Row>
        {performances.map((performance) => (
          <Col key={performance._id} sm={6} md={6} lg={4} xl={3}>
            <Performance performance={performance} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default PerformancesScreen;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Card, Button } from "react-bootstrap";
import axios from "axios";

const PerformanceScreen = () => {
  const [performance, setPerformance] = useState({});

  const { id: performanceId } = useParams();

  useEffect(() => {
    const fetchPerformance = async () => {
      const { data } = await axios.get(`/api/performances/${performanceId}`);
      setPerformance(data);
    };

    fetchPerformance();
  }, [performanceId]);

  return (
    <div className="performanceDetail">
      <Link className="btn btn-secondary my-3" to="/performances">
        Go Back
      </Link>
      <Row>
        <Col>
          <div>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{performance.composer}</h3>
                <h4>{performance.composition}</h4>
                <h5>{performance.artists}</h5>
              </ListGroup.Item>
            </ListGroup>
          </div>

          <div>
            <Row>
              <Col md={6}>
                <ListGroup>
                  <ListGroup.Item>
                    <h6>
                      <strong>Conductor: </strong> {performance.conductor}
                    </h6>
                    <h6>
                      <strong>Ensemble: </strong> {performance.ensemble}
                    </h6>
                    <h6>
                      <strong>Work Category: </strong>{" "}
                      {performance.workCategory}
                    </h6>
                  </ListGroup.Item>
                </ListGroup>
              </Col>

              <Col md={6}>
                <ListGroup>
                  <ListGroup.Item>
                    <h6>
                      <strong>Performance Date: </strong>{" "}
                      {performance.performanceDate}
                    </h6>
                    <h6>
                      <strong>Concert Hall: </strong> {performance.concertHall}
                    </h6>
                    <h6>
                      <strong>Location: </strong> {performance.city},{" "}
                      {performance.state}
                    </h6>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <Row>
              <Col className="text-center mt-3">
                <h6>
                  <strong>Notes: </strong> {performance.notes}
                </h6>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default PerformanceScreen;

import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Performance = ({ performance }) => {
  return (
    <Card className="my-1 p-1 bg-light" style={{ height: "125px" }}>
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Row>
            <Col>
              <Link to={`/performance/${performance._id}`}>
                <Card.Text as="div" style={{ fontSize: "14px" }}>
                  <strong>{performance.composer}</strong>
                </Card.Text>
              </Link>

              <Card.Text style={{ fontSize: "13px" }}>
                <strong>{performance.composition}</strong>
              </Card.Text>
            </Col>
          </Row>
        </div>

        <div className="bg-warning d-flex justify-content-between rounded px-2">
          <span className="pull-left">
            <strong>{performance.performanceDate.substring(0, 10)}</strong>
          </span>
          <span className="pull-right">
            <strong>{performance.workCategory}</strong>
          </span>
        </div>
      </Card.Body>
    </Card>
  );
};
export default Performance;

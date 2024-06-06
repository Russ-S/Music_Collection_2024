import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const PerformanceCard = ({ r }) => {
  return (
    <Link to={`/performance/${r._id}`} style={{ textDecoration: "none" }}>
      <Card className="my-1 p-1 bg-light" style={{ height: "125px" }}>
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "275px",
          }}
        >
          <div>
            <Row>
              <Col>
                <Card.Text as="div" style={{ fontSize: "15px", color: "blue" }}>
                  <strong>{r.composer}</strong>
                </Card.Text>

                <Card.Text style={{ fontSize: "13px" }}>
                  <strong>{r.composition}</strong>
                </Card.Text>
              </Col>
            </Row>
          </div>

          <div className="bg-warning d-flex justify-content-between rounded px-2">
            <div className="cardBottom bg-warning d-flex justify-content-between px-2">
              <span>{r.workCategory}</span>
              <span>
                <strong>{r.workCategory}</strong>
              </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};
export default PerformanceCard;

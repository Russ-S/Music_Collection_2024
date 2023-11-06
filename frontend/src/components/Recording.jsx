import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Recording = ({ recording }) => {
  return (
    <Card className="my-1 p-1 bg-light" style={{ height: "110px" }}>
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Row>
            {/* <Col sm={4}>
              <Link to={`/recording/${recording._id}`}>
                <Card.Img
                  src={recording.coverImage}
                  variant="top"
                  style={{
                    height: "75px",
                    width: "75px",
                    border: "1px solid #000",
                  }}
                />
              </Link>
            </Col> */}

            <Col sm={12}>
              <Link to={`/recording/${recording._id}`}>
                <Card.Text as="div" style={{ fontSize: "14px" }}>
                  <strong>{recording.composer}</strong>
                </Card.Text>
              </Link>

              <Card.Text style={{ fontSize: "13px" }}>
                <strong>{recording.composition}</strong>
              </Card.Text>
            </Col>
          </Row>
        </div>

        <div className="bg-warning d-flex justify-content-between rounded px-2">
          <span className="pull-left">
            <strong>{recording.media}</strong>
          </span>
          <span className="pull-right">
            <strong>{recording.workCategory}</strong>
          </span>
        </div>
      </Card.Body>
    </Card>
  );
};
export default Recording;

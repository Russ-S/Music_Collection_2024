import { Row, Col } from "react-bootstrap";
import Recording from "../components/Recording";
import recordings from "../recordings";

const HomeScreen = () => {
  return (
    <>
      <h1>Recordings</h1>
      <Row>
        {recordings.map((recording) => (
          <Col key={recording._id} sm={6} md={6} lg={4} xl={3}>
            <Recording recording={recording} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default HomeScreen;

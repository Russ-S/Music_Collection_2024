import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Recording from "../components/Recording";
import axios from "axios";

const RecordingScreen = () => {
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    const fetchRecordings = async () => {
      const { data } = await axios.get("/api/recordings");
      setRecordings(data);
    };

    fetchRecordings();
  }, []);

  return (
    <>
      <h2 className="text-white">All Recordings</h2>
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
export default RecordingScreen;

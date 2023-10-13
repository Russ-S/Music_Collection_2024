import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import axios from "axios";

const RecordingScreen = () => {
  const [recording, setRecording] = useState({});

  const { id: recordingId } = useParams();

  useEffect(() => {
    const fetchRecording = async () => {
      const { data } = await axios.get(`/api/recordings/${recordingId}`);
      setRecording(data);
    };

    fetchRecording();
  }, [recordingId]);

  return (
    <div className="recordingDetail">
      <Link className="btn btn-secondary my-3" to="/recordings">
        Go Back
      </Link>
      <Row>
        <Col lg={3} md={12} className="text-center">
          <Image
            src={recording.coverImage}
            alt={recording.composition}
            fluid
            style={{
              border: "1px solid #000",
            }}
            className="mt-5"
          />
        </Col>
        <Col md={9}>
          <div>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{recording.composer}</h3>
                <h4>{recording.composition}</h4>
                <h5>{recording.artists}</h5>
              </ListGroup.Item>
            </ListGroup>
          </div>

          <div>
            <Row>
              <Col md={6}>
                <ListGroup>
                  <ListGroup.Item>
                    <h6>
                      <strong>Conductor: </strong> {recording.conductor}
                    </h6>
                    <h6>
                      <strong>Ensemble: </strong> {recording.ensemble}
                    </h6>
                    <h6>
                      <strong>Work Category: </strong> {recording.workCategory}
                    </h6>
                    <h6>
                      <strong>File Category: </strong> {recording.fileCategory}
                    </h6>
                    <h6>
                      <strong>Purchased/Recorded: </strong>{" "}
                      {recording.purchaseDate}
                    </h6>
                    <h6>
                      <strong>Value: </strong> ${recording.value}
                    </h6>
                  </ListGroup.Item>
                </ListGroup>
              </Col>

              <Col md={6}>
                <ListGroup>
                  <ListGroup.Item>
                    <h6>
                      <strong>Media: </strong> {recording.media}
                    </h6>
                    <h6>
                      <strong>Label: </strong> {recording.label}
                    </h6>
                    <h6>
                      <strong>Catalog Number: </strong>{" "}
                      {recording.catalogNumber}
                    </h6>
                    <h6>
                      <strong>Digital: </strong> {recording.digital}
                    </h6>
                    <h6>
                      <strong>Source: </strong> {recording.source}
                    </h6>
                    <h6>
                      <strong>Tape/CD-R Number: </strong> {recording.tapeNumber}
                    </h6>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={12} className="text-center">
          <ListGroup>
            <ListGroup.Item>
              <h6>
                <strong>Location: </strong> {recording.location}
              </h6>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};
export default RecordingScreen;

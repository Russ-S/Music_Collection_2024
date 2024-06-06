import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import {
  useUpdateRecordingMutation,
  useGetRecordingDetailQuery,
} from "../../slices/recordingsApiSlice";

const RecordingEditScreen = () => {
  const { id: recordingId } = useParams();

  const [composer, setComposer] = useState("");
  const [composition, setComposition] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [artists, setArtists] = useState("");
  const [conductor, setConductor] = useState("");
  const [ensemble, setEnsemble] = useState("");
  const [workCategory, setWorkCategory] = useState("");
  const [fileCategory, setFileCategory] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [value, setValue] = useState("");
  const [media, setMedia] = useState("");
  const [label, setLabel] = useState("");
  const [catalogNumber, setCatalogNumber] = useState("");
  const [digital, setDigital] = useState("");
  const [source, setSource] = useState("");
  const [tapeNumber, setTapeNumber] = useState("");
  const [location, setLocation] = useState("");

  const {
    data: recording,
    isLoading,
    error,
  } = useGetRecordingDetailQuery(recordingId);

  const [updateRecording, { isLoading: loadingUpdate }] =
    useUpdateRecordingMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (recording) {
      setComposer(recording.composer);
      setComposition(recording.composition);
      setCoverImage(recording.coverImage);
      setArtists(recording.artists);
      setConductor(recording.conductor);
      setEnsemble(recording.ensemble);
      setWorkCategory(recording.workCategory);
      setFileCategory(recording.fileCategory);
      setPurchaseDate(recording.purchaseDate.substring(0, 10));
      setValue(recording.value);
      setMedia(recording.media);
      setLabel(recording.label);
      setCatalogNumber(recording.catalogNumber);
      setDigital(recording.digital);
      setSource(recording.source);
      setTapeNumber(recording.tapeNumber);
      setLocation(recording.location);
    }
  }, [recording]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const updatedRecording = {
      recordingId,
      composer,
      coverImage,
      composition,
      artists,
      conductor,
      ensemble,
      workCategory,
      fileCategory,
      purchaseDate,
      value,
      media,
      label,
      catalogNumber,
      digital,
      source,
      tapeNumber,
      location,
    };

    const result = await updateRecording(updatedRecording);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success("Recording updated");
      navigate("/admin/recordinglist");
    }
  };

  return (
    <div className="propertyList">
      {/* <Link to="/admin/recordinglist" className="btn btn-secondary my-2">
        Go Back
      </Link> */}

      <h4>Edit Recording</h4>
      {loadingUpdate && <Loader />}

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Form onSubmit={submitHandler}>
          <Row>
            <Col md={12}>
              <Form.Group controlId="composer" className="my-2">
                <div className="formRow">
                  <Form.Label className="labelTop">Composer:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter composer"
                    value={composer}
                    onChange={(e) => setComposer(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>

              <Form.Group controlId="composition" className="my-2">
                <div className="formRow">
                  <Form.Label className="labelTop">Composition:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter composition"
                    value={composition}
                    onChange={(e) => setComposition(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>

              <Form.Group controlId="artists" className="my-2">
                <div className="formRow">
                  <Form.Label className="labelTop">Artists:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter artists"
                    value={artists}
                    onChange={(e) => setArtists(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>

              <Form.Group controlId="coverImage" className="my-2">
                <div className="formRow">
                  <Form.Label className="labelTop">Cover Image:</Form.Label>
                  <div className="imageRight">
                    <Form.Control
                      type="text"
                      placeholder="Enter cover image"
                      value={coverImage}
                      onChange={(e) => setCoverImage(e.target.value)}
                    ></Form.Control>
                  </div>
                  {/* </div> */}
                </div>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6} sm={12}>
              <Form.Group controlId="conductor" className="my-2">
                <div className="formRow">
                  <Form.Label className="labelName">Conductor:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter conductor"
                    value={conductor}
                    onChange={(e) => setConductor(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>

              <Form.Group controlId="ensemble" className="my-2">
                <div className="formRow">
                  <Form.Label className="labelName">Ensemble:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter ensemble"
                    value={ensemble}
                    onChange={(e) => setEnsemble(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>

              <Form.Group controlId="workCategory" className="my-2">
                <div className="formRow">
                  <Form.Label className="labelName">Work Category:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter workCategory"
                    value={workCategory}
                    onChange={(e) => setWorkCategory(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>

              <Form.Group controlId="fileCategory" className="my-2">
                <div className="formRow">
                  <Form.Label className="labelName">File Category:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter file category"
                    value={fileCategory}
                    onChange={(e) => setFileCategory(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>

              <Form.Group controlId="purchaseDate" className="my-2">
                <div className="formRow">
                  <Form.Label className="labelName">
                    Purchased/Recorded:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter date purchased/recorded"
                    value={purchaseDate}
                    onChange={(e) => setPurchaseDate(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>

              <Form.Group controlId="value" className="my-2">
                <div className="formRow">
                  <Form.Label className="labelName">Value:</Form.Label>$
                  <Form.Control
                    type="text"
                    placeholder="Enter value"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>
            </Col>

            <Col md={6} sm={12}>
              <Form.Group controlId="media" className="my-2">
                <div className="formRow">
                  <Form.Label className="labelName">Media:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter media type"
                    value={media}
                    onChange={(e) => setMedia(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>

              <Form.Group controlId="label" className="my-2">
                <div className="formRow">
                  <Form.Label className="labelName">Label:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter label"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>

              <Form.Group controlId="catalogNumber" className="my-2">
                <div className="formRow">
                  <Form.Label className="labelName">Catalog No.:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter catalog number"
                    value={catalogNumber}
                    onChange={(e) => setCatalogNumber(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>

              <Form.Group controlId="digital" className="my-2">
                <div className="formRow">
                  <Form.Label className="labelName">Digital Code:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter label"
                    value={digital}
                    onChange={(e) => setDigital(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>

              <Form.Group controlId="source" className="my-2">
                <div className="formRow">
                  <Form.Label className="labelName">Source:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter source"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>

              <Form.Group controlId="tapeNumber" className="my-2">
                <div className="formRow">
                  <Form.Label className="labelName">Tape Number:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter CD-R/Tape number"
                    value={tapeNumber}
                    onChange={(e) => setTapeNumber(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <Form.Group controlId="location" className="my-2">
                <div className="formRow">
                  <Form.Label className="labelName">Location:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex justify-content-center gap-5">
            <Button type="submit" variant="success" className="my-2">
              Update
            </Button>
            <Link to="/admin/recordinglist" className="btn btn-danger my-2">
              Cancel
            </Link>
          </div>

          {/* <Button variant="danger" className="my-2">
            Cancel
          </Button> */}
        </Form>
      )}
    </div>
  );
};
export default RecordingEditScreen;

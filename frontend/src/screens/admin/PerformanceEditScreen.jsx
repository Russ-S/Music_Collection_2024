import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import {
  useUpdatePerformanceMutation,
  useGetPerformanceDetailQuery,
} from "../../slices/performancesApiSlice";

const PerformanceEditScreen = () => {
  const { id: performanceId } = useParams();

  const [performanceDate, setPerformanceDate] = useState("");
  const [composer, setComposer] = useState("");
  const [composition, setComposition] = useState("");
  const [artists, setArtists] = useState("");
  const [conductor, setConductor] = useState("");
  const [ensemble, setEnsemble] = useState("");
  const [workCategory, setWorkCategory] = useState("");
  const [concertHall, setConcertHall] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [notes, setNotes] = useState("");

  const {
    data: performance,
    isLoading,
    error,
  } = useGetPerformanceDetailQuery(performanceId);

  const [updatePerformance, { isLoading: loadingUpdate }] =
    useUpdatePerformanceMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (performance) {
      setPerformanceDate(performance.performanceDate.substring(0, 10));
      setComposer(performance.composer);
      setComposition(performance.composition);
      setArtists(performance.artists);
      setConductor(performance.conductor);
      setEnsemble(performance.ensemble);
      setWorkCategory(performance.workCategory);
      setConcertHall(performance.concertHall);
      setCity(performance.city);
      setState(performance.state);
      setNotes(performance.notes);
    }
  }, [performance]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const updatedPerformance = {
      performanceId,
      performanceDate,
      composer,
      composition,
      artists,
      conductor,
      ensemble,
      workCategory,
      concertHall,
      city,
      state,
      notes,
    };

    const result = await updatePerformance(updatedPerformance);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success("Performance updated");
      navigate("/admin/performancelist");
    }
  };

  return (
    <div className="propertyList">
      <Link to="/admin/performancelist" className="btn btn-secondary my-2">
        Go Back
      </Link>

      <h4>Edit Performance</h4>
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
                    placeholder="Enter composer"
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
            </Col>

            <Col md={6} sm={12}>
              <Form.Group controlId="performanceDate" className="my-2">
                <div className="formRow">
                  <Form.Label className="labelName">Perform Date:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter performance date"
                    value={performanceDate}
                    onChange={(e) => setPerformanceDate(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>

              <Form.Group controlId="concertHall" className="my-2">
                <div className="formRow">
                  <Form.Label className="labelName">Concert Hall:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter concert hall"
                    value={concertHall}
                    onChange={(e) => setConcertHall(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>

              <Form.Group controlId="city" className="my-2">
                <div className="formRow">
                  <Form.Label className="labelName">City:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>

              <Form.Group controlId="digital" className="my-2">
                <div className="formRow">
                  <Form.Label className="labelName">State:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <Form.Group controlId="notes" className="my-2">
                <div className="formRow">
                  <Form.Label className="labelName">Notes:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Concert notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>
            </Col>
          </Row>

          <Button type="submit" variant="dark" className="my-2">
            Update
          </Button>
        </Form>
      )}
    </div>
  );
};
export default PerformanceEditScreen;

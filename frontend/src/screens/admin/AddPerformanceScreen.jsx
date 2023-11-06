import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";

const AddPerformanceScreen = () => {
  // Select fields data
  const [composers, setComposers] = useState([]);
  const [categories, setCategories] = useState([]);

  // Form field values
  const [performanceDate, setPerformanceDate] = useState("");
  const [composer, setComposer] = useState("");
  const [composition, setComposition] = useState("");
  const [artists, setArtists] = useState("");
  const [conductor, setConductor] = useState("");
  const [ensemble, setEnsemble] = useState("");
  const [concertHall, setConcertHall] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [workCategory, setWorkCategory] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const fetchComposers = async () => {
      const response = await fetch("/api/composers/formlist");
      const json = await response.json();

      if (response.ok) {
        setComposers(json);
      }
    };

    fetchComposers();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("/api/categories/formlist");
      const json = await response.json();

      if (response.ok) {
        setCategories(json);
      }
    };

    fetchCategories();
  }, []);

  const addPerformanceHandler = async (e) => {
    e.preventDefault();
    const performance = {
      composer,
      performanceDate,
      composition,
      artists,
      conductor,
      ensemble,
      concertHall,
      workCategory,
      city,
      state,
      notes,
    };

    const response = await fetch("/api/performances", {
      method: "POST",
      body: JSON.stringify(performance),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      toast.error("Add performance failed.");
    }
    if (response.ok) {
      toast.success("Performance successfully added");
    }
  };

  return (
    <div className="propertyList">
      <Link to="/admin/performancelist" className="btn btn-secondary my-2">
        Go Back
      </Link>

      <h4>Add New Performance</h4>

      <Form onSubmit={addPerformanceHandler}>
        <Row>
          <Col md={12}>
            <Form.Group controlId="composer" className="my-2">
              <div className="formRow">
                <Form.Label className="labelTop">Composer:</Form.Label>
                <Form.Select
                  type="text"
                  placeholder="Select composer"
                  required
                  value={composer}
                  onChange={(e) => setComposer(e.target.value)}
                >
                  <option>Select Composer</option>
                  {composers.map((composer) => (
                    <option key={composer._id} value={composer.name}>
                      {composer.name}
                    </option>
                  ))}
                </Form.Select>
              </div>
            </Form.Group>

            <Form.Group controlId="composition" className="my-2">
              <div className="formRow">
                <Form.Label className="labelTop">Composition:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter composition"
                  required
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
                <Form.Select
                  type="text"
                  placeholder="Select category"
                  required
                  value={workCategory}
                  onChange={(e) => setWorkCategory(e.target.value)}
                >
                  <option>Select Category</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </Form.Select>
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
                  required
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
                  required
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
                  required
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
                  required
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
          Add Performance
        </Button>
      </Form>
    </div>
  );
};
export default AddPerformanceScreen;

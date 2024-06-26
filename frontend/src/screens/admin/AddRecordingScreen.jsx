import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";

const AddRecordingScreen = () => {
  const navigate = useNavigate();
  // Select fields data
  const [composers, setComposers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [labels, setLabels] = useState([]);

  // Field values
  const [composer, setComposer] = useState("");
  const [cover, setCover] = useState("");
  const [composition, setComposition] = useState("");
  const [artists, setArtists] = useState("");
  const [conductor, setConductor] = useState("");
  const [ensemble, setEnsemble] = useState("");
  const [media, setMedia] = useState();
  // const [media, onChangeText] = useState("");

  const [workCategory, setWorkCategory] = useState("");
  const [fileCategory, setFileCategory] = useState("");
  const [label, setLabel] = useState("");
  const [catalogNumber, setCatalogNumber] = useState("");
  const [digital, setDigital] = useState("");
  const [source, setSource] = useState("");
  const [tapeNumber, setTapeNumber] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [value, setValue] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchComposers = async () => {
      const res = await axios.get("/api/composers/formlist");
      setComposers(res.data);
    };

    fetchComposers();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/api/categories/formlist");
      setCategories(res.data);
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchLabels = async () => {
      const res = await axios.get("/api/labels/formlist");
      setLabels(res.data);
    };

    fetchLabels();
  }, []);

  const addRecordingHandler = async (e) => {
    e.preventDefault();

    const path = `${cover}`;
    console.log(cover);
    const filename = path.replace(/^.*\\/, "/covers/");
    console.log(filename);
    let coverImage = filename || "/covers/no-image.jpg";
    console.log(coverImage);

    const recording = {
      composer,
      coverImage,
      composition,
      artists,
      conductor,
      ensemble,
      media,
      workCategory,
      fileCategory,
      label,
      catalogNumber,
      digital,
      source,
      tapeNumber,
      purchaseDate,
      value,
      location,
    };

    const response = await fetch("/api/recordings", {
      method: "POST",
      body: JSON.stringify(recording),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);

    if (!response.ok) {
      toast.error("Add new recording failed");
    }
    if (response.ok) {
      setComposer("");
      setCover("");
      setComposition("");
      setArtists("");
      setConductor("");
      setEnsemble("");
      setMedia("");
      setWorkCategory("");
      setFileCategory("");
      setLabel("");
      setCatalogNumber("");
      setDigital("");
      setSource("");
      setTapeNumber("");
      setPurchaseDate("");
      setValue("");
      setLocation("");
      toast.success("Recording successfully added");
    }
    navigate("/admin/recordinglist");
  };

  return (
    <div className="propertyList mt-3">
      <h4>Add New Recording</h4>

      <Form onSubmit={addRecordingHandler}>
        <Row>
          <Col md={6} sm={12}>
            <Form.Group controlId="composer" className="my-2">
              <div className="formRow">
                <Form.Label className="labelName">Composer:</Form.Label>
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
          </Col>
          <Col md={6} sm={12}>
            <Form.Group controlId="coverImage" className="my-2">
              <div className="formRow">
                <Form.Label className="labelName">Cover Image:</Form.Label>
                <Form.Control
                  type="file"
                  value={cover}
                  onChange={(e) => setCover(e.target.value)}
                ></Form.Control>
              </div>
            </Form.Group>
          </Col>

          <Col md={12}>
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

            <Form.Group controlId="fileCategory" className="my-2">
              <div className="formRow">
                <Form.Label className="labelName">File Category:</Form.Label>
                <Form.Select
                  type="text"
                  placeholder="Select category"
                  required
                  value={fileCategory}
                  onChange={(e) => setFileCategory(e.target.value)}
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

            <Form.Group controlId="purchaseDate" className="my-2">
              <div className="formRow">
                <Form.Label className="labelName">
                  Purchased/Recorded:
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter date purchased/recorded"
                  required
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
                <Form.Select
                  type="text"
                  placeholder="Select media type"
                  required
                  value={media}
                  onChange={(e) => setMedia(e.target.value)}
                >
                  <option>Select Media Type</option>
                  <option value="Compact Disc">Compact Disc</option>
                  <option value="CD-Recordable">CD-Recordable</option>
                  <option value="Cassette">Cassette</option>
                  <option value="LP Album">LP Album</option>
                  <option value="Reel to Reel Tape">Reel to Reel Tape</option>
                </Form.Select>
              </div>
            </Form.Group>

            <Form.Group controlId="label" className="my-2">
              <div className="formRow">
                <Form.Label className="labelName">Label:</Form.Label>
                <Form.Select
                  type="text"
                  placeholder="Select label"
                  required
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                >
                  <option>Select Label</option>
                  {labels.map((label) => (
                    <option key={label._id} value={label.name}>
                      {label.name}
                    </option>
                  ))}
                </Form.Select>
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
                <Form.Select
                  type="text"
                  placeholder="Select digital"
                  required
                  disabled={media === "LP Album"}
                  value={digital}
                  onChange={(e) => setDigital(e.target.value)}
                >
                  <option>Select Digital Format</option>
                  <option value="DDD">DDD</option>
                  <option value="ADD">ADD</option>
                  <option value="AAD">AAD</option>
                  <option value="None">None</option>
                </Form.Select>
              </div>
            </Form.Group>

            <Form.Group controlId="source" className="my-2">
              <div className="formRow">
                <Form.Label className="labelName">Source:</Form.Label>
                <Form.Select
                  type="text"
                  placeholder="Select source"
                  required
                  value={source}
                  disabled={media === "Compact Disc" || media === "LP Album"}
                  onChange={(e) => setSource(e.target.value)}
                >
                  <option>Select Source</option>
                  <option value="Compact Disc">Compact Disc</option>
                  <option value="CD-Recordable">CD-Recordable</option>
                  <option value="Cassette">Cassette</option>
                  <option value="LP Album">LP Album</option>
                  <option value="Radio Broadcast">Radio Broadcast</option>
                  <option value="Reel-to-Reel">Reel-to-Reel Tape</option>
                </Form.Select>
              </div>
            </Form.Group>

            <Form.Group controlId="tapeNumber" className="my-2">
              <div className="formRow">
                <Form.Label className="labelName">Tape Number:</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter CD-R/Tape number"
                  value={tapeNumber}
                  disabled={media === "Compact Disc" || media === "LP Album"}
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
                <Form.Select
                  type="text"
                  placeholder="Select location"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option>Select Location</option>
                  <option value="Cortez, CO">Cortez, CO</option>
                  <option value="Fallston, MD">Fallston, MD</option>
                </Form.Select>
              </div>
            </Form.Group>
          </Col>
        </Row>

        <div className="d-flex justify-content-center gap-5">
          <Button type="submit" variant="success" className="my-2">
            Add New Recording
          </Button>
          <Link to="/admin/recordinglist" className="btn btn-warning my-2">
            Cancel
          </Link>
        </div>
      </Form>
    </div>
  );
};
export default AddRecordingScreen;

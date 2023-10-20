import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../../components/FormContainer";
import { toast } from "react-toastify";

const AddMediaScreen = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const addMediaHandler = async (e) => {
    e.preventDefault();

    const media = {
      name,
    };

    const response = await fetch("/api/media", {
      method: "POST",
      body: JSON.stringify(media),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      toast.error("Add media type failed");
    }
    if (response.ok) {
      toast.success("Media type added successfully");
      navigate("/admin/medialist");
    }
  };

  return (
    <FormContainer>
      <div className="registerForm">
        <Link className="btn btn-secondary my-3" to="/admin/medialist">
          Go Back
        </Link>

        <h1>Add Media Type</h1>

        <Form onSubmit={addMediaHandler}>
          <Form.Group controlId="name" className="my-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="dark" className="mt-2">
            Add Media Type
          </Button>
        </Form>
      </div>
    </FormContainer>
  );
};
export default AddMediaScreen;

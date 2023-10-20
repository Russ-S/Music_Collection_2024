import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../../components/FormContainer";
import { toast } from "react-toastify";

const AddLabelScreen = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const addLabelHandler = async (e) => {
    e.preventDefault();

    const label = {
      name,
    };

    const response = await fetch("/api/labels", {
      method: "POST",
      body: JSON.stringify(label),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      toast.error("Add label failed");
    }
    if (response.ok) {
      toast.success("Label added successfully");
      navigate("/admin/labellist");
    }
  };

  return (
    <FormContainer>
      <div className="registerForm">
        <Link className="btn btn-secondary my-3" to="/admin/labellist">
          Go Back
        </Link>

        <h1>Add Label</h1>

        <Form onSubmit={addLabelHandler}>
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
            Add Label
          </Button>
        </Form>
      </div>
    </FormContainer>
  );
};
export default AddLabelScreen;

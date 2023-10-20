import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../../components/FormContainer";
import { toast } from "react-toastify";

const AddComposerScreen = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const addComposerHandler = async (e) => {
    e.preventDefault();
    const composer = {
      name,
    };

    const response = await fetch("/api/composers", {
      method: "POST",
      body: JSON.stringify(composer),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      toast.error("Add composer failed");
    }
    if (response.ok) {
      toast.success("Composer added successfully");
      navigate("/admin/composerlist");
    }
  };

  return (
    <FormContainer>
      <div className="registerForm">
        <Link className="btn btn-secondary my-3" to="/admin/composerlist">
          Go Back
        </Link>

        <h1>Add Composer</h1>

        <Form onSubmit={addComposerHandler}>
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
            Add Composer
          </Button>
        </Form>
      </div>
    </FormContainer>
  );
};
export default AddComposerScreen;

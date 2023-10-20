import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../../components/FormContainer";
import { toast } from "react-toastify";

const AddCategoryScreen = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const addCategoryHandler = async (e) => {
    e.preventDefault();
    const category = {
      name,
    };

    const response = await fetch("/api/categories", {
      method: "POST",
      body: JSON.stringify(category),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      toast.error("Add category failed");
    }
    if (response.ok) {
      toast.success("Category added successfully");
      navigate("/admin/categorylist");
    }
  };

  return (
    <FormContainer>
      <div className="registerForm">
        <Link className="btn btn-secondary my-3" to="/admin/categorylist">
          Go Back
        </Link>

        <h1>Add Category</h1>

        <Form onSubmit={addCategoryHandler}>
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
            Add Category
          </Button>
        </Form>
      </div>
    </FormContainer>
  );
};
export default AddCategoryScreen;

import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import FormContainer from "../../components/FormContainer";
import { toast } from "react-toastify";
import {
  useUpdateLabelMutation,
  useGetLabelDetailsQuery,
} from "../../slices/labelsApiSlice";

const LabelEditScreen = () => {
  const { id: labelId } = useParams();

  const [name, setName] = useState("");

  const { data: label, isLoading, error } = useGetLabelDetailsQuery(labelId);

  const [updateLabel, { isLoading: loadingUpdate }] = useUpdateLabelMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (label) {
      setName(label.name);
    }
  }, [label]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const updatedLabel = {
      labelId,
      name,
    };

    const result = await updateLabel(updatedLabel);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success("Label updated");
      navigate("/admin/labellist");
    }
  };

  return (
    <div className="propertyList">
      <Link to="/admin/labellist" className="btn btn-secondary my-2">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Label</h1>
        {loadingUpdate && <Loader />}

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name" className="my-2">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="dark" className="my-2">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </div>
  );
};
export default LabelEditScreen;

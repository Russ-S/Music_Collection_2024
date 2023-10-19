import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import FormContainer from "../../components/FormContainer";
import { toast } from "react-toastify";
import {
  useUpdateComposerMutation,
  useGetComposerDetailsQuery,
} from "../../slices/composersApiSlice";

const ComposerEditScreen = () => {
  const { id: composerId } = useParams();

  const [name, setName] = useState("");

  const {
    data: composer,
    isLoading,
    refetch,
    error,
  } = useGetComposerDetailsQuery(composerId);

  const [updateComposer, { isLoading: loadingUpdate }] =
    useUpdateComposerMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (composer) {
      setName(composer.name);
    }
  }, [composer]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const updatedComposer = {
      composerId,
      name,
    };

    const result = await updateComposer(updatedComposer);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success("Composer updated");
      navigate("/admin/composerlist");
    }
  };

  return (
    <div className="propertyList">
      <Link to="/admin/composerlist" className="btn btn-secondary my-2">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Composer</h1>
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
export default ComposerEditScreen;

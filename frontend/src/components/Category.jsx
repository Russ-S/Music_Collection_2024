import Input from "../components/Input.js";
import "./Category.css";

function Category({ handleChange }) {
  return (
    <div className="ms-2">
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test" />
        <span className="checkmark"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value="Band"
        title="Band"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="Brass"
        title="Brass"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="Cello"
        title="Cello"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="Chamber"
        title="Chamber"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="Choral/Vocal"
        title="Choral/Vocal"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="Clarinet"
        title="Clarinet"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="Collection"
        title="Collection"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="Double Bass"
        title="Double Bass"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="Flute"
        title="Flute"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="French Horn"
        title="French Horn"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="Guitar"
        title="Guitar"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="Oboe"
        title="Oboe"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="Opera"
        title="Opera"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="Orchestral"
        title="Orchestral"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="Organ"
        title="Organ"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="Percussion"
        title="Percussion"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="Piano"
        title="Piano"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="Symphony"
        title="Symphony"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="Trumpet"
        title="Trumpet"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="Viola"
        title="Viola"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="Violin"
        title="Violin"
        name="test"
      />
    </div>
  );
}
export default Category;

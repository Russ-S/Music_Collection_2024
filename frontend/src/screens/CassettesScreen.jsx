import axios from "axios";
import { useEffect, useState } from "react";

const CassettesScreen = () => {
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    const fetchRecordings = async () => {
      const res = await axios.get("/api/recordings/sortlist");
      setRecordings(res.data);
      console.log(res.data);
    };

    fetchRecordings();
  }, []);

  return (
    <div className="propertyList">
      <h3>Cassettes Screen</h3>
      {recordings.map((recording) => (
        <p key={recording._id}>
          {recording.media} - {recording.composer}
        </p>
      ))}
    </div>
  );
};
export default CassettesScreen;

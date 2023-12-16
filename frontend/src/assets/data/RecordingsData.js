import axios from "axios";
import { useState, useEffect } from "react";

const RecordingsData = () => {
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    const fetchRecordings = async () => {
      const res = await axios.get("/api/recordings/sortlist");
      setRecordings(res.data);
      console.log(res.data);
      recordings(setRecordings);
      console.log(recordings);
    };

    fetchRecordings();
  }, []);

  return <div>RecordingsData</div>;
};
export default RecordingsData;

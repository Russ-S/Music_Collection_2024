import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RecordingItem from "../components/RecordingItem";

const SearchRecordings = () => {
  const [loading, setLoading] = useState(false);

  const [sidebardata, setSidebardata] = useState({
    searchTerm: "",
  });
  const [recordings, setRecordings] = useState([]);
  console.log(recordings);

  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSidebardata({
        searchTerm: searchTermFromUrl || "",
      });
    }
    const fetchRecordings = async () => {
      setLoading(true);
      // setShowMore(false);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/recordings/result?${searchQuery}`);
      const data = await res.json();
      // if (data.length > 8) {
      //   setShowMore(true);
      // } else {
      //   setShowMore(false);
      // }
      setRecordings(data);
      setLoading(false);
    };

    fetchRecordings();
  }, [window.location.search]);

  const handleChange = (e) => {
    if (e.target.id === "searchTerm") {
      setSidebardata({ ...sidebardata, searchTerm: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set("searchTerm", sidebardata.searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search-recordings?${searchQuery}`);
  };

  return (
    <div className="searchResults">
      <form onSubmit={handleSubmit}>
        <div className="flex align-items-center justify-content-between">
          <label className="me-4 fw-semibold">Search Term:</label>
          <input
            type="text"
            id="searchTerm"
            placeholder="Search recordings..."
            className="searchBox p-1"
            value={sidebardata.searchTerm}
            onChange={handleChange}
          />
          <button className="btn btn-secondary">Search</button>
        </div>
      </form>
      <h4 className="fw-semibold p-2">Search Results</h4>
      <div className="row p-4 mx-auto flex flex-wrap gap-4">
        {!loading && recordings.length === 0 && (
          <h4 className="fw-semibold text-center">No recordings found!</h4>
        )}

        {loading && <h4 className="fw-semibold text-center">Loading...</h4>}

        {!loading &&
          recordings &&
          recordings.map((recording) => (
            <RecordingItem key={recording._id} recording={recording} />
          ))}
      </div>
    </div>
  );
};
export default SearchRecordings;

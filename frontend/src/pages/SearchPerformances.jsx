import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PerformanceItem from "../components/PerformanceItem";

const SearchPerformances = () => {
  const [loading, setLoading] = useState(false);

  const [sidebardata, setSidebardata] = useState({
    searchTerm: "",
  });
  const [performances, setPerformances] = useState([]);
  console.log(performances);

  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSidebardata({
        searchTerm: searchTermFromUrl || "",
      });
    }
    const fetchPerformances = async () => {
      setLoading(true);
      // setShowMore(false);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/performances/result?${searchQuery}`);
      const data = await res.json();
      // if (data.length > 8) {
      //   setShowMore(true);
      // } else {
      //   setShowMore(false);
      // }
      setPerformances(data);
      setLoading(false);
    };

    fetchPerformances();
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
    navigate(`/search-performances?${searchQuery}`);
  };

  return (
    <div className="searchResults">
      <form onSubmit={handleSubmit}>
        <div className="flex align-items-center justify-content-between">
          <label className="me-4 fw-semibold">Search Term:</label>
          <input
            type="text"
            id="searchTerm"
            placeholder="Search performances..."
            className="searchBox p-1"
            value={sidebardata.searchTerm}
            onChange={handleChange}
          />
          <button className="btn btn-secondary">Search</button>
        </div>
      </form>
      <h4 className="fw-semibold">Search Results</h4>
      <div className="row p-4 mx-auto flex flex-wrap gap-4">
        {!loading && performances.length === 0 && (
          <h4 className="fw-semibold text-center">No performances found!</h4>
        )}

        {loading && <h4 className="fw-semibold text-center">Loading...</h4>}

        {!loading &&
          performances &&
          performances.map((performance) => (
            <PerformanceItem key={performance._id} performance={performance} />
          ))}
      </div>
    </div>
  );
};
export default SearchPerformances;

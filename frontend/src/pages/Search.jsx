import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [loading, setLoading] = useState(false);

  const [sidebardata, setSidebardata] = useState({
    searchTerm: "",
  });
  const [movies, setMovies] = useState([]);
  console.log(movies);

  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSidebardata({
        searchTerm: searchTermFromUrl || "",
      });
    }
    const fetchMovies = async () => {
      setLoading(true);
      // setShowMore(false);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/movies/result?${searchQuery}`);
      const data = await res.json();
      // if (data.length > 8) {
      //   setShowMore(true);
      // } else {
      //   setShowMore(false);
      // }
      setMovies(data);
      setLoading(false);
    };

    fetchMovies();
  }, [location.search]);

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
    navigate(`/search?${searchQuery}`);
  };

  return (
    <div className="searchResults">
      <form onSubmit={handleSubmit}>
        <div className="flex align-items-center justify-content-between">
          <label className="me-4 fw-semibold">Search Term:</label>
          <input
            type="text"
            id="searchTerm"
            placeholder="Search movies..."
            className="searchBox p-1"
            value={sidebardata.searchTerm}
            onChange={handleChange}
          />
          <button className="btn btn-secondary">Search</button>
        </div>
      </form>
      <h4 className="fw-semibold">Search Results</h4>
    </div>
  );
};
export default Search;

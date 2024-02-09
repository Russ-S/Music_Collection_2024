import { useState, useEffect } from "react";

import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RecordingSearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search-recordings?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="searchForm d-flex align-items-center"
      >
        <input
          type="text"
          placeholder="Search recordings..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>
          <FaSearch />
        </button>
      </form>
    </>
  );
};
export default RecordingSearchForm;

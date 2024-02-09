import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetFilteredPerformancesQuery } from "../../slices/performancesApiSlice";
import { setPerformances } from "../../redux/performances/performanceSlice";

import Concert from "./Concert";
import Card from "./PCard";
import ReactPaginate from "react-paginate";
import PerformanceSearchForm from "../../components/PerformanceSearchForm";
// import PerformanceCard from "./PerformanceCard";

const Performances = () => {
  const dispatch = useDispatch();

  const { performances, checked } = useSelector((state) => state.performances);

  const filteredPerformancesQuery = useGetFilteredPerformancesQuery({
    checked,
  });

  useEffect(() => {
    if (!checked.length) {
      if (!filteredPerformancesQuery.isLoading) {
        // Filter performances based on category
        const filteredPerformances = filteredPerformancesQuery.data;

        dispatch(setPerformances(filteredPerformances));
      }
    }
  });

  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query] = useState("");

  const filteredItems = performances.filter(
    (performance) =>
      performance.workCategory.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(performances, selected, query) {
    let filteredPerformances = performances;

    // Filtering Input Items
    if (query) {
      filteredPerformances = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredPerformances = filteredPerformances.filter(
        ({ composer, composition, artists, workCategory, performanceDate }) =>
          composer === selected ||
          composition === selected ||
          artists === selected ||
          workCategory === selected ||
          performanceDate === selected
      );
    }

    return filteredPerformances.map(
      ({
        _id,
        composer,
        composition,
        artists,
        performanceDate,
        workCategory,
      }) => (
        <Card
          key={Math.random()}
          id={_id}
          composer={composer}
          composition={composition}
          artists={artists}
          performanceDate={performanceDate}
          workCategory={workCategory}
        />
      )
    );
  }

  // Add "All Categories" option to uniqueCategories
  const uniqueCategories = [
    ...Array.from(
      new Set(
        filteredPerformancesQuery.data
          ?.map((performance) => performance.workCategory)
          .filter((workCategory) => workCategory !== undefined)
      )
    ),
  ].sort();

  const result = filteredData(performances, selectedCategory, query);

  const [remountComponent, setRemountComponent] = useState(0);

  // for pagination
  const [pageNumber, setPageNumber] = useState(0);
  const performancesPerPage = 20;
  const pagesVisited = pageNumber * performancesPerPage;

  const pageCount = Math.ceil(result.length / performancesPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="row">
        <div className="sidebar">
          <h6 className="fw-semibold">Filter By Category</h6>

          {/* Filtered Categories */}
          <div className="ml-5 mb-4">
            <div className="ms-3 mb-2">
              <input
                onChange={handleChange}
                type="radio"
                value=""
                name="test"
              />
              <label
                htmlFor="pink-checkbox"
                className="ms-2 text-sm font-medium text-white"
              >
                All
              </label>
            </div>
            {uniqueCategories?.map((workCategory, index) => (
              <>
                <div key={index + 1} className="ms-3 mb-2 text-white">
                  <div className="flex items-center mr-4">
                    <input
                      type="radio"
                      id="category"
                      value={workCategory}
                      onChange={() => setSelectedCategory(workCategory)}
                      name="test"
                      className="pl-5"
                    />

                    <label
                      htmlFor="pink-checkbox"
                      className="ms-2 text-sm font-medium text-white"
                    >
                      {workCategory}
                    </label>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary fw-bold"
              onClick={() => window.location.reload()}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="performanceList">
          <div className="row d-flex pb-3">
            <div className="col-lg-6 col-md-12">
              <h4>{result.length} Performances</h4>
            </div>
            <div className="col-lg-6 col-md-12">
              <PerformanceSearchForm />
            </div>
          </div>

          <div className="card-container">
            {result.length === 0 ? (
              <h3>No performances found</h3>
            ) : (
              result
                ?.map((result) => (
                  <div key={remountComponent}>
                    <Concert result={result} />
                  </div>
                ))
                .slice(pagesVisited, pagesVisited + performancesPerPage)
            )}
          </div>
          <ReactPaginate
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="Prev"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </>
  );
};
export default Performances;

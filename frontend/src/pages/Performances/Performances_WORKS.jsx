import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetFilteredPerformancesQuery } from "../../slices/performancesApiSlice";
import { setPerformances } from "../../redux/performances/performanceSlice";

import Category from "../../components/Category";
import Concert from "./Concert";
import Card from "./PCard";
// import ReactPaginate from "react-paginate";

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

  // for pagination
  // const [pageNumber, setPageNumber] = useState(0);
  // const performancesPerPage = 5;
  // const pagesVisited = pageNumber * performancesPerPage;

  // const pageCount = Math.ceil(performances.length / performancesPerPage);

  // const handlePageClick = ({ selected }) => {
  //   setPageNumber(selected);
  // };

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
        ({ composer, composition, workCategory, performanceDate }) =>
          composer === selected ||
          composition === selected ||
          workCategory === selected ||
          performanceDate === selected
      );
    }

    return (
      filteredPerformances
        // .slice(pagesVisited, pagesVisited + performancesPerPage)
        .map(
          ({ _id, composer, composition, performanceDate, workCategory }) => (
            <Card
              key={Math.random()}
              id={_id}
              composer={composer}
              composition={composition}
              performanceDate={performanceDate}
              workCategory={workCategory}
            />
          )
        )
    );
  }

  const result = filteredData(performances, selectedCategory, query);

  return (
    <>
      <div className="row">
        <div className="sidebar">
          <h6 className="fw-semibold">Filter By Category</h6>

          <div className="ml-5 mb-4">
            <Category handleChange={handleChange} />
          </div>
        </div>
        <div className="performanceList">
          <h4>{result.length} Performances</h4>
          {result.length === 0 ? (
            <h3>No performances found</h3>
          ) : (
            <Concert result={result} />
          )}
          {/* 
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
          /> */}
        </div>
      </div>
    </>
  );
};
export default Performances;

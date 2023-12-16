import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetFilteredPerformancesQuery } from "../../slices/performancesApiSlice";
// import { useFetchCategoriesQuery } from "../../redux/api/categoryApiSlice";
import { useGetCategoriesQuery } from "../../slices/categoriesApiSlice";
import {
  setCategories,
  setPerformances,
  setChecked,
} from "../../redux/performances/performanceSlice";
import PerformanceCard from "./PerformanceCard";

const Performances = () => {
  const dispatch = useDispatch();
  const { categories, performances, checked } = useSelector(
    (state) => state.performances
  );

  const categoriesQuery = useGetCategoriesQuery();

  const filteredPerformancesQuery = useGetFilteredPerformancesQuery({
    checked,
  });

  useEffect(() => {
    if (!categoriesQuery.isLoading) {
      dispatch(setCategories(categoriesQuery.data));
    }
  }, [categoriesQuery.data, dispatch]);

  useEffect(() => {
    if (!checked.length) {
      if (!filteredPerformancesQuery.isLoading) {
        // Filter performances based on checked media
        const filteredCategories = filteredPerformancesQuery.data.filter(
          (performance) => {
            return performance.workCategory;
          }
        );

        dispatch(setPerformances(filteredCategories));
      }
    }
  }, [checked, filteredPerformancesQuery.data, dispatch]);

  console.log(performances);

  const handleCheck = (value, id) => {
    const updatedChecked = value
      ? [...checked, id]
      : checked.filter((c) => c !== id);
    dispatch(setChecked(updatedChecked));
  };

  return (
    <>
      <div className="row">
        <div className="sidebar">
          <h6 className="fw-semibold">Filter By Category</h6>

          <div className="pl-5 mb-4">
            {/* {categories?.map((c) => (
              <div key={c._id} className="mb-2">
                <div className="flex ietms-center mr-4">
                  <input
                    type="checkbox"
                    id="red-checkbox"
                    onChange={(e) => handleCheck(e.target.checked, c.name)}
                    className="pl-5"
                  />

                  <label
                    htmlFor="pink-checkbox"
                    className="ml-2 text-sm font-medium text-white"
                  >
                    {c.name}
                  </label>
                </div>
              </div>
            ))} */}
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

        <div className="recordingList">
          <h4>{performances?.length} Performances</h4>
          <div className="dataCards">
            <PerformanceCard />

            {/* {performances.length === 0 ? (
              <h3>No performances found</h3>
            ) : ( 
              performances.map((p) => (
                <div className="p-3" key={p._id}>
                  <PerformanceCard p={p} />
                </div>
              ))
             )}*/}
          </div>
        </div>
      </div>
    </>
  );
};
export default Performances;

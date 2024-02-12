import { Link } from "react-router-dom";

const PerformanceItem = ({ performance }) => {
  return (
    <div className="searchPerfCard shadow-lg">
      <Link to={`/performance/${performance._id}`}>
        <div className="mt-1">
          <p>
            <span className="composer">{performance.composer}</span>
            <br />
            <span className="composition">{performance.composition}</span>
            <br />
            <span className="perf-artists">{performance.artists}</span>
          </p>
        </div>
        <div className="d-flex justify-content-between px-2">
          <p className="media">
            {performance.performanceDate.substring(0, 10)}
          </p>
          <p className="category">{performance.workCategory}</p>
        </div>
      </Link>
    </div>
  );
};
export default PerformanceItem;

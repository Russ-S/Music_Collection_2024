// import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className="homePage">
      {/* <div className="links">
        <Link className="btn btn-link my-3 me-5" to="/recordings">
          Recordings
        </Link>

        <Link className="btn btn-link my-3 me-5" to="/performances">
          Performances
        </Link>
      </div> */}
      <div className="homePageTitle">
        <h3 className="mainTitle text-center">
          Classical Music Collection & Performance Catalog 2024
        </h3>
        <h5 className="mainSubtitle text-center">Version 11.0</h5>
      </div>
    </div>
  );
};
export default HomeScreen;

import { Link } from "react-router-dom";

const RecordingItem = ({ recording }) => {
  return (
    <div className="searchResultCard shadow-lg">
      <Link to={`/recording/${recording._id}`}>
        <div className="text-center">
          <img
            src={`${recording.coverImage}` || "/covers/no-image.jpg"}
            alt="album cover"
            style={{
              width: "75px",
              height: "75px",
              border: "1px solid #000",
            }}
          />
        </div>

        <div className="mt-2">
          <p>
            <span className="composer">{recording.composer}</span>
            <br />
            <span className="composition">{recording.composition}</span>
            <br />
            <span className="artists">{recording.artists}</span>
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="media">{recording.media}</p>
          <p className="category">{recording.workCategory}</p>
        </div>
      </Link>
    </div>
  );
};
export default RecordingItem;

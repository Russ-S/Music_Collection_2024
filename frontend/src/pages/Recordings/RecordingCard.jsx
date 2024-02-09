import { Link } from "react-router-dom";
import "./RecordingCard.css";

const RecordingCard = ({ r }) => {
  return (
    <Link to={`/recording/${r._id}`}>
      <section className="recordingCard shadow-lg">
        <div className="card-details">
          <section className="card-image text-center">
            <img src={`/covers/${r.coverImage}`} alt="album cover" />
          </section>
          <section className="cardComposer">{r.composer}</section>
          <section className="cardWork">{r.composition}</section>
          <div className="cardArtists">
            <p>{r.artists}</p>
          </div>
          <div className="cardFooter">
            <div className="bg-warning d-flex justify-content-between px-2">
              <span className="pull-left">
                <strong>{r.media}</strong>
              </span>
              <span className="pull-right">
                <strong>{r.workCategory}</strong>
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* <Card className="my-1 p-1 bg-light" style={{ height: "110px" }}>
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "275px",
          }}
        >
          <div>
            <Row>
              <Col sm={12}>
                <Card.Text as="div" style={{ fontSize: "14px", color: "blue" }}>
                  <strong>{r.composer}</strong>
                </Card.Text>

                <Card.Text style={{ fontSize: "13px" }}>
                  <strong>{r.composition}</strong>
                </Card.Text>
              </Col>
            </Row>
          </div>

          <div className="bg-warning d-flex justify-content-between rounded px-2">
            <span className="pull-left">
              <strong>{r.media}</strong>
            </span>
            <span className="pull-right">
              <strong>{r.workCategory}</strong>
            </span>
          </div>
        </Card.Body>
      </Card> */}
    </Link>
  );
};
export default RecordingCard;

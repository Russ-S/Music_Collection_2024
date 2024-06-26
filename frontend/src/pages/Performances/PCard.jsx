import { Link } from "react-router-dom";
import "./PCard.css";

const Card = ({
  id,
  composer,
  composition,
  artists,
  performanceDate,
  workCategory,
}) => {
  return (
    <>
      <Link to={`/performance/${id}`}>
        <section className="card">
          <div className="card-details">
            <section className="card-composer">{composer}</section>
            <section className="card-work">{composition}</section>
            <section className="card-artists">{artists}</section>
            <div className="cardFooter">
              <div className="cardBottom bg-warning d-flex justify-content-between px-2">
                <span>
                  <strong>{performanceDate.substring(0, 10)}</strong>
                </span>
                <span>
                  <strong>{workCategory}</strong>
                </span>
              </div>
            </div>
          </div>
        </section>
      </Link>
    </>
  );
};

export default Card;

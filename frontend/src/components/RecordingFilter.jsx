import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MultiFilters() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get("/api/recordings");
      setItems(res.data.recordings);
    };

    fetchItems();
  }, []);

  console.log(items);

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState([items]);

  console.log(items);

  let filters = [
    "Compact Disc",
    "CD-Recordable",
    "Cassette",
    "LP Album",
    "Reel to Reel Tape",
  ];

  const handleFilterButtonClick = (selectedMedia) => {
    if (selectedFilters.includes(selectedMedia)) {
      let filters = selectedFilters.filter((el) => el !== selectedMedia);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedMedia]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedMedia) => {
        let temp = items.filter((item) => item.media === selectedMedia);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...items]);
    }
  };

  return (
    <div>
      <h3>Recordings</h3>
      <div className="links">
        {filters.map((media, idx) => (
          <button
            onClick={() => handleFilterButtonClick(media)}
            className={`btn btn-link my-3 me-5 button ${
              selectedFilters?.includes(media) ? "activeMedia" : ""
            }`}
            key={`filters-${idx}`}
          >
            {media}
          </button>
        ))}
      </div>

      <Row>
        <div className="items-container">
          {filteredItems.map((item, idx) => (
            <Col sm={3} key={`items-${idx}`}>
              <div className="item">
                <Card className="my-1 p-1 bg-light" style={{ height: "110px" }}>
                  <Card.Body
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      {/* <Col sm={4}>
              <Link to={`/recording/${recording._id}`}>
                <Card.Img
                  src={recording.coverImage}
                  variant="top"
                  style={{
                    height: "75px",
                    width: "75px",
                    border: "1px solid #000",
                  }}
                />
              </Link>
            </Col> */}

                      <Col sm={12}>
                        <Link to={`/recording/${item._id}`}>
                          <Card.Text as="div" style={{ fontSize: "14px" }}>
                            <strong>{item.composer}</strong>
                          </Card.Text>
                        </Link>

                        <Card.Text style={{ fontSize: "13px" }}>
                          <strong>{item.composition}</strong>
                        </Card.Text>
                      </Col>
                    </div>

                    <div className="bg-warning d-flex justify-content-between rounded px-2">
                      <span className="pull-left">
                        <strong>{item.media}</strong>
                      </span>
                      <span className="pull-right">
                        <strong>{item.workCategory}</strong>
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </div>
      </Row>
    </div>
  );
}

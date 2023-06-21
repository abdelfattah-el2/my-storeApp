import { useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchget } from "../rtx-store/Slices/products-Slice";
import FliterProducts, { ee } from "./FliterProduct";
import { Link } from "react-router-dom";
import CarouselsHome from "./CarouselsInHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { updat } from "../rtx-store/Slices/proposalsproduct";

function HomeApp() {
  // get the data form store
  const product = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchget());
  }, [ee]);

  let dispatch = useDispatch();
  return (
    <>
      <Container fluid="md" className="py-0 " style={{ marginTop: "64px" }}>
        <FliterProducts />
        <CarouselsHome />

        <Row className=" g-2 row-cols-3 g-xl-5 row-cols-sm-2  row-cols-lg-3 row-cols-xl-4">
          {typeof product === "object" ? (
            product.map((products) => {
              return (
                <Col
                  className="p-1 d-flex  justify-content-center"
                  key={products.id}
                >
                  <Card
                    className="m-0 div-cardHome grid  "
                    style={{ width: "20rem", flexGrow: "0.5" }}
                  >
                    <Link
                      to={`/details/${products.id}`}
                      className="nav-link grid"
                      onClick={() => {
                        dispatch(updat(1));
                      }}
                    >
                      <Card.Img
                        variant="top"
                        className="img-cardHome "
                        src={products.image}
                        style={{ height: "300px", padding: "10px" }}
                      />

                      <div className="grid">
                        <Card.Body className=" body-cardHome d-flex flex-column justify-content-between">
                          <span>
                            <Card.Title className=" title-fontHome text-base ">
                              {products.title}
                            </Card.Title>
                            <Card.Text className=" max-sm:hidden">
                              {products.description.slice(10, 120)}...
                            </Card.Text>
                          </span>
                          <span className=" p-0 p-sm-1 btn bg-transparen border-0 ">
                            <span className="  d-flex  t  justify-content-between">
                              <Card.Text className="mb-0 fs-5">
                                {products.price}$
                              </Card.Text>
                              <p className=" mb-0 fw-medium">
                                <FontAwesomeIcon
                                  icon={faStar}
                                  style={{ color: "#ffc107" }}
                                />{" "}
                                {products.rating !== undefined &&
                                  products.rating.rate}{" "}
                              </p>
                            </span>
                          </span>
                        </Card.Body>
                      </div>
                    </Link>
                  </Card>
                </Col>
              );
            })
          ) : (
            <Spinner
              animation="grow"
              className="text-center"
              variant="primary"
            />
          )}
        </Row>
      </Container>
    </>
  );
}

export const dat = "";
export default HomeApp;

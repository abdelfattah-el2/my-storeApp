import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  detailsID,
  detailspage,
  refrac,
} from "../rtx-store/Slices/Details-slice";
import { useParams } from "react-router";
import {
  Button,
  Card,
  CardImg,
  Container,
  Offcanvas,
  ProgressBar,
  Spinner,
} from "react-bootstrap";
import rate, { progress } from "./rets-function";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { rendernav } from "../rtx-store/Slices/cartrender";
import Proposalspage from "./Proposals";

function Details() {
  const [show, setShow] = useState(false);

  let [done, setdone] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let id = useParams("/details/");

  let produts = useSelector((state) => state.detail);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsID(id.productid));
    dispatch(detailspage());
  }, []);
  let [count, setcount] = useState(1);

  return (
    <Container className="mt-5 py-3  ">
      {produts.length !== 0 ? (
        <>
          <Card className="flex-sm-wrap flex-wrap   flex-md-nowrap mt-3 d-flex border-0 flex-row   ">
            <CardImg
              variant="top"
              className="img-fluid mt-3 "
              style={{ height: "435px", minWidth: "300px", maxWidth: "450px" }}
              src={produts.image}
            />
            <Card.Body className=" p-3 ">
              <Card.Header className="text-center">{produts.title}</Card.Header>
              <div className="ext-xl-start p-4 d-flex justify-content-between">
                <span>
                  <span className="d-block">Brand:</span>
                  <span className="d-block">{produts.category}</span>
                  <span className="fs-6">Price:</span>
                  <span className="fw-bold fs-3 me-3 p-1">
                    {produts.price}$
                  </span>
                </span>
                <div className=" w-25 text-center">
                  <p className="text-center">Overall Rating</p>

                  <span>
                    <ProgressBar
                      className="m-1 progress "
                      now={progress(
                        produts.rating !== undefined && produts.rating.rate
                      )}
                      variant="success"
                    />
                    <ProgressBar
                      className="m-1"
                      now={
                        progress(
                          produts.rating !== undefined && produts.rating.rate
                        ) - 20
                      }
                      variant="info"
                    />
                    <ProgressBar
                      className="m-1"
                      now={
                        progress(
                          produts.rating !== undefined && produts.rating.rate
                        ) - 40
                      }
                      variant="danger"
                    />
                  </span>

                  <p className="fw-bold mb-0 fs-5">
                    {produts.rating !== undefined && produts.rating.rate}
                  </p>
                  {rate(produts.rating !== undefined && produts.rating.rate)}
                  <span className="d-flex  flex-column align-items-center ">
                    <span className="fw-bold">
                      Customer buy:
                      {produts.rating !== undefined && produts.rating.count}
                    </span>
                  </span>
                </div>
              </div>
              <Card.Text className="ext-xl-start p-3 lh-base">
                {produts.description}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card.Footer className="d-flex  justify-content-center">
            <p
              className={
                count === 1
                  ? "m-0 p-1 d-none align-items-center fw-bold"
                  : ` m-0 p-1 d-flex align-items-center fw-bold`
              }
            >
              {(produts.price * count).toFixed(2)}$
            </p>
            <Card.Title className="border d-flex align-items-center flex-row ">
              <Button
                onClick={() => {
                  if (count > 1) {
                    setcount(count - 1);
                  }
                }}
              >
                -
              </Button>
              <span className="d-block px-3">{count}</span>
              <Button
                onClick={() => {
                  setcount(count + 1);
                }}
              >
                +
              </Button>
            </Card.Title>
            <Button
              style={{ width: "110px" }}
              className="ms-3  position-relative "
              variant="primary"
              onClick={() => {
                // Upload data
                if (!done) {
                  fetch("https://backend-h9bl.onrender.com/cart", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ ...produts, quantity: count }),
                  }).then((data) => {
                    if (data.status === 500) {
                      setdone(true);
                    }
                  });
                }
                // Data renewal if a change occurs
                fetch(`https://backend-h9bl.onrender.com/cart/${produts.id}`, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    ...produts,
                    quantity: count,
                    price: produts.price * count,
                  }),
                });
                handleShow();
                dispatch(rendernav(1));
              }}
            >
              {done ? (
                <span className={done ? "btnAndone" : ""}>
                  {" "}
                  Done <FontAwesomeIcon icon={faCircleCheck} />
                  <FontAwesomeIcon icon={faCartArrowDown} />{" "}
                </span>
              ) : (
                "Add to Cart"
              )}
            </Button>
          </Card.Footer>
          <Offcanvas
            placement="end"
            show={show}
            className="w-auto"
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-1">
              <Card style={{ width: "18rem" }}>
                <div className="d-flex">
                  <Card.Img
                    variant="top"
                    style={{ width: "180px", padding: "20px 20px 0px" }}
                    src={produts.image}
                  />
                  <span className="fw-bold fs-6 p-1">{produts.title}</span>
                </div>
                <Card.Body className="p-1">
                  <Card.Text>
                    <span className="fw-bold  d-flex px-4  justify-content-between text-center">
                      <span>Cart Total:</span>
                      {(produts.price * count).toFixed(2)}$
                    </span>
                  </Card.Text>
                  <Link to={"/my-cart"} className="btn btn-primary mx-2">
                    Checkou
                  </Link>
                  <Button variant="dark" onClick={handleClose}>
                    Continue Shopping
                  </Button>
                </Card.Body>
              </Card>
            </Offcanvas.Body>
          </Offcanvas>
          <Proposalspage />
        </>
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </Container>
  );
}

export default Details;

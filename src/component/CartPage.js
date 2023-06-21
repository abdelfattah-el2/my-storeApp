import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetahpost } from "../rtx-store/Slices/cart-Slice";
import { Button, Card, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import Swal from "sweetalert2";
import { rendernav } from "../rtx-store/Slices/cartrender";

function CartApp() {
  let dispatch = useDispatch();
  let render = useSelector((state) => state.ren);
  useEffect(() => {
    dispatch(fetahpost());
  }, [render]);
  let items = useSelector((state) => state.cart);
  if (items.length === 0) {
    return (
      <div className="w-100 vh-100 d-flex justify-content-center  flex-column align-items-center">
        <Image
          src="https://f.nooncdn.com/s/app/com/noon/images/empty-state-cart.svg "
          style={{ width: "40%" }}
        />
        <Card.Title className="fw-bold  fs-3 my-2">
          Your shopping cart looks empty
        </Card.Title>
        <Card.Text>What are you waiting for?</Card.Text>
        <Link to={"/"} className="btn btn-primary mt-2 text-uppercase  ">
          Start Shopping
        </Link>
      </div>
    );
  } else {
    return (
      <Container className="mt-5 py-3">
        <div>
          <Button
            className="bg-transparent text-body border-dark-subtle me-2 hover-danger"
            onClick={() => {
              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                showCancelButton: true,
                confirmButtonColor: " #d33",
                cancelButtonColor: "#198754",
                confirmButtonText: "Yes, remov it!",
              }).then((result) => {
                if (result.isConfirmed) {
                  items.map((produt) => {
                    fetch(`https://backend-h9bl.onrender.com/cart/${produt.id} `, {
                      method: "DELETE",
                    });
                  });
                  dispatch(rendernav(1));
                }
              });
            }}
          >
            <FontAwesomeIcon icon={faTrashCan} /> Remov All
          </Button>
          <Link to={"/"} className="btn text-bg-primary text-uppercase  ">
            Continue Shopping
          </Link>
        </div>
        {items.map((produt) => {
          return (
            <Card
              className=" d-flex justify-content-center  mt-2 flex-wrap flex-md-nowrap flex-row"
              key={produt.id}
            >
              <Link to={`/details/${produt.id}`} className=" w-3/12  ">
                <Card.Img
                  variant="top "
                  className="fluid p-2"
                  style={{
                    maxWidth: "100%",
                    marginRight: "100px",
                    height: "100%",
                  }}
                  src={produt.image}
                />
              </Link>
              <Card.Body className="d-flex  flex-column flex-md-row  justify-content-between p-2">
                <div className="p-2 w-100">
                  <Card.Title className="font-cart">{produt.title}</Card.Title>
                  <Card.Text className="font-cart-p">
                    {produt.description}
                  </Card.Text>
                </div>
                <Card.Title className="d-md-flex flex-column justify-content-between mb-0 ">
                  <span className="fs-2 me-1">{produt.price.toFixed(2)}$</span>
                  <span className="p-1 d-md-flex flex-column align-items-center border border-dark-subtle rounded ">
                    <Link
                      className="btn border-0 "
                      to={`/details/${produt.id}`}
                    >
                      <span className="p-2  fw-bold ">Quantity:</span>
                      <span className=" p-1  fw-bold   w-100 text-center border-dark-subtle">
                        {produt.quantity}
                      </span>
                    </Link>
                  </span>
                  <span className="d-md-flex flex-column align-items-start">
                    <Button className="bg-transparent text-body border-0 hover-Buy">
                      <FontAwesomeIcon icon={faCreditCard} /> Buy
                    </Button>
                    <Button
                      className=" btn-danger   bg-transparent border-0  text-body hover-danger "
                      onClick={() => {
                        Swal.fire({
                          title: "Are you sure?",
                          text: "You won't remov this product",
                          showCancelButton: true,
                          confirmButtonColor: " #d33",
                          cancelButtonColor: "#198754",
                          confirmButtonText: "Yes, remov it!",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            fetch(`https://backend-h9bl.onrender.com/cart/${produt.id}`, {
                              method: "DELETE",
                            });
                            dispatch(rendernav(1));
                          }
                        });
                      }}
                    >
                      <FontAwesomeIcon icon={faTrashCan} size="sm" /> remov
                    </Button>
                  </span>
                </Card.Title>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    );
  }
}

export default CartApp;

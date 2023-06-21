import {
  FaBeer,
  FaCcVisa,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import "../App.css";
import { Link } from "react-router-dom";

const {
  Container,
  Row,
  Col,
  ListGroup,
  Form,
  Button,
  Figure,
  Image,
} = require("react-bootstrap");

function Footer() {
  let date = new Date();

  return (
    <>
      <div className="border-top py-1 py-sm-5 mt-5 shadow-lg ">
        <Container>
          <Row className="  flex-wrap  flex-sm-nowrap py-5">
            <div className="d-flex flex-shrink-1 sm-d-block order-2 order-sm-0 ">
              <Col className="col-4 col-sm-4">
                <ListGroup variant="flush ">
                  <ListGroup.Item>
                    <Link className="nav-link" to={"/"}>
                      Home
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item>Products</ListGroup.Item>
                  <ListGroup.Item>
                    <Link className="nav-link" to={"/contact-us"}>
                      Contact Us
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link className="nav-link" to={"/about"}>
                      About
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col className="col-4 col-sm-4">
                <ListGroup variant="flush ms-2 ms-sm-0">
                  <ListGroup.Item>
                    <Link className="nav-link" to={"/"}>
                      Home
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item>Products</ListGroup.Item>
                  <ListGroup.Item>
                    <Link className="nav-link" to={"/contact-us"}>
                      Contact Us
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link className="nav-link" to={"/about"}>
                      About
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col className="col-4  col-sm-4 ms-2 ms-sm-0">
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Link className="nav-link" to={"/"}>
                      Home
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item>Products</ListGroup.Item>
                  <ListGroup.Item>
                    <Link className="nav-link" to={"/contact-us"}>
                      Contact Us
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link className="nav-link" to={"/about"}>
                      About
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </div>
            <Col className="col-0 col-md-2  "></Col>
            <Col className="col-12 col-sm-5 col-lg-5 mt-4 order-1    ">
              <h1 className="mt-0 mb-1">Subscribe to our newsletter</h1>
              <p>Monthly digest of what's new and exciting from us.</p>
              <Form.Floating className="mb-3 d-flex">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Button>Subscribe</Button>
              </Form.Floating>
            </Col>
          </Row>
          <div className=" border-top">
            <Row>
              <Col className="col-7  col-sm-6 col-lg-8 p-1 text-center ">
                <h3 className=" fw-bold text-uppercase mt-1">
                  your favorite brands
                </h3>
                <Figure className="img-thumbnail w-25 m-1 p-1">
                  <Figure.Image
                    width={150}
                    height={180}
                    alt="171x180"
                    src="https://vectorlogoseek.com/wp-content/uploads/2018/12/loreoal-paris-vector-logo.png"
                  />
                </Figure>
                <Figure className="img-thumbnail w-25 m-1 p-1">
                  <Figure.Image
                    width={150}
                    height={180}
                    alt="171x180"
                    src="https://1000logos.net/wp-content/uploads/2018/09/Braun-logo.jpg"
                  />
                </Figure>
                <Figure className="img-thumbnail w-25 m-1 p-1">
                  <Figure.Image
                    width={150}
                    height={180}
                    alt="171x180"
                    src="https://mma.prnewswire.com/media/1892867/PUMA_Logo.jpg?p=facebook"
                  />
                </Figure>
                <Figure className="img-thumbnail w-25 m-1 p-1">
                  <Figure.Image
                    width={150}
                    height={180}
                    alt="171x180"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAACiCAMAAAATIHpEAAAAgVBMVEUAAAD////c2Njj39/9+fkfHx9LSkrHxMTT0ND38/Pm4uLu6ur/+/vp5eXMycmCgIC+u7uLiYlBQEAKCgp3dXW1srI1NDQwLy+SkJBXVlacmppvbW11c3PX1NQrKiplY2Oqp6dGRUWQjo6mpKQjIiJoZ2d/fHwYGBhSUVFeXV05OTk3U4EmAAAEs0lEQVR4nO3a7XKiMBgFYA5SAUGEKtViUevXWu//AjcJQSChtd2ZnZWd8/wRQxz1NIQ3sY5DRERERERERERERERERERERERERERERERERERERERERERERERERERERH9R4EGJozSbf6O/68UNrH74biWe/uRDPiAXI1eYRjK/9OVu/xGCRrn48bv9P7nVR8tsAhT3+o9wr8fX7/b/5SasQ5R3+jO3itvNoYT7dX/mVjFyE8GlX/ZnbhUzNyfCuv30tN8Vi2Xz/JPcrovV6nypjrPs1jw+i+bnpluJozOf3+7b7+L0onV6QKzcxgib46QqUjCZ1U29uRVR1c3b/RLPwkg3H8KqOVJ3m7Uqd1TDa8/pgbFyc3yc9VEuvlN+Pq2LUiSnx1xPblvx/f396TTLRS0jxlo4Vc1vMeJ09voxS4Hww3Fe3SAIkfi+n8ghtvYQ5ovX17N4lTw9MHZu7/U9dYSwrs9eAuCiG83+GZC3jlOdW9Eqag5ANWCD26sLFXFl1ToeCjs3Z1o1lZ2aRHy3jXy0clsArdFyjHCIZG4ZwlYRPfaqWTOo7wszRJvm9DXsTqoD0JNbruafwqhIVhjJBzO3p3q20uYh4olIAl7nznlFLKe+OrcNvF/t08sYneePrye3TF5Uc8RGcwl51YqL98YT12dqLjE+xFwoAzIG0EzVN3VuCbbd04s75c/D6cltIWebwlpyPasBOEJ0E+4cp3X31QKR27UanG3q6te5bexlyQTf2VV4HJ/lNrK/hypaR16nLcPO7HYSuRWYmc3P8r6ic1vB2hDI7Fc8tJ7cVngT42hqtRc4Wbnl5gUniNwSUd/20bn59psuB3ah9uSW4t15QeSbXDUOu7kF2FivF3VI5FmturvKzTXnTuHujsJj6ckt9OSqoc/Kys3tmZZkbtasV9G5jXpODz63rbxi5nCvY8vRys2HvbwMJ3UJaNG5lT2nEfzJx/9n7NxcVZB5n4wYI7eDPcMfxfyW6tWFSeeWwtpYvmB397M+Eiu3c1XvJvZAWsmpzMhtC9/sthe5ZTiYzQv519C5vdn7ygd50xkQM7clcJWPayuQqsXIzQmtG0Mk615YN4ZY3gvquje2RvNn4/tRGbltwnqJPYWxSRFCbomYuWXmvFSo9ULerPUrvvrtK9DLqYM5HvMf/zT2j3Vz+/Cw04cXxNduR/VVzdxEgdyJYC3WYSI3kXKnji2qejCA3o6KZI3YmMmsB6Wd2zFt/6C1R9zUtE8TPa6s3J7C9tDKgKXaDxGFTCvPHPGxetR7ey/AvjldwOuvkx9XndvT+z4AovZtUGTgj9XR8YB6urNyk5d2pMfW1oU31vtv4xhTPaZmUb2p9IF6L/g5hKv/LKcRwqUzMG6rrJ0YS8TLFAiT1BcPXn1q0lPqi2GKMk0TD0jmt/3eo/g7xGXqy3e4raF8ePm+PoSX5Ll81bCWWMouScogCBI/n/X8WH/y1b9BlM12bG7VHcI1n6ofClI1XNP6ur2k6heEKG+VNEXUDLlc/Swx3d3/L4Eh+u7+Tn+/ud08/+SYiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiI6Ht+A9S5L9Rnr75qAAAAAElFTkSuQmCC"
                  />
                </Figure>
                <Figure className="img-thumbnail w-25 m-1 p-1">
                  <Figure.Image
                    width={150}
                    height={180}
                    alt="171x180"
                    src="https://1000logos.net/wp-content/uploads/2019/06/Adidas-Logo-1991.jpg"
                  />
                </Figure>
                <Figure className="img-thumbnail w-25 m-1 p-1">
                  <Figure.Image
                    width={150}
                    height={180}
                    alt="171x180"
                    src="data:image/png;base64,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"
                  />
                </Figure>

                <Figure className="img-thumbnail w-25 m-1 p-1">
                  <Figure.Image
                    width={150}
                    height={180}
                    alt="171x180"
                    src="data:image/png;base64,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"
                  />
                </Figure>
                <Figure className="img-thumbnail w-25 m-1 p-1">
                  <Figure.Image
                    width={150}
                    height={180}
                    alt="171x180"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTuGAWQ2QaobVdkBuhtFLfywb2AhypcmSUtAIWB4SkE03n4vKElhSLgXFjKuAoo-cfGAKH-7w0oEA&usqp=CAU&ec=48665698"
                  />
                </Figure>
                <Figure className="img-thumbnail w-25 m-1 p-1">
                  <Figure.Image
                    width={150}
                    height={180}
                    alt="171x180"
                    src="data:image/png;base64,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"
                  />
                </Figure>
              </Col>
              <Col className=" col-1 col-sm-2 col-lg-2"></Col>
              <Col className="col-4 col-lg-2 col-sm-3 text-center  ">
                <span>
                  <p className="pt-3 text-uppercase fw-bold fs-6  text-center m-0">
                    Contect width us
                  </p>
                  <ul className="d-flex justify-content-end border-bottom">
                    <li className="list-group p-3 pt-1 hover-icon ">
                      <a className="nav-link fs-3" href="/#">
                        <FaFacebookSquare></FaFacebookSquare>
                      </a>
                    </li>
                    <li className="list-group p-3 pt-1 hover-icon">
                      <a className="nav-link fs-3" href="/#">
                        <FaTwitter></FaTwitter>
                      </a>
                    </li>
                    <li className="list-group p-3 pt-1 hover-icon">
                      <a className="nav-link fs-3" href="/#">
                        <FaInstagram></FaInstagram>
                      </a>
                    </li>
                  </ul>
                </span>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="border-top bg-body-secondary fs-10p ">
        © {date.getFullYear()} All Rights Reserved
        <span className="fs-10p text-center d-block ">
          .Coded by
          <a href="https://github.com/abdelfattah-el2">Abdelfattah</a>.
        </span>
      </div>
    </>
  );
}

export default Footer;

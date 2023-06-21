import {
  faClockRotateLeft,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Collapse, Container, Form, Row } from "react-bootstrap";

function ContactUsApp() {
  return (
    <>
      <div className="bg-red">
        <Container className="mt-5 py-5  text-white">
          <Row className=" flex-column-reverse mx-2 flex-sm-column-reverse  flex-md-row  ">
            <Col className="  col-md-5 d-flex justify-content-around flex-column mt-4 ">
              <div>
                <h5 className=" uppercase mt-1 ">
                  <FontAwesomeIcon icon={faPhone} /> Call us{" "}
                </h5>

                <span>1 (234) 567-891, 1 (234) 987-654</span>
              </div>
              <div>
                <h5 className=" uppercase mt-1 ">
                  <FontAwesomeIcon icon={faLocationDot} /> Location
                </h5>
                <span>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</span>
              </div>
              <div className=" mb-7">
                <h5 className=" uppercase mt-1 ">
                  <FontAwesomeIcon icon={faClockRotateLeft} />
                  Busiiness Hours
                </h5>
                <span>Mon – Fri …… 10 am – 8 pm, Sat, Sun ....… Closed</span>
              </div>
            </Col>
            <Col className="col-1 col-md-2"></Col>
            <Col className="col-md-5  py-4 shadow bg-white text-slate-900">
              <h2 className=" uppercase ps-3 ">Contact us</h2>

              <Form className="py-5 px-3">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label> Your Name</Form.Label>
                  <Form.Control
                    className="contact-us-Control"
                    type="text"
                    placeholder="Enter-Your-Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="name@example.com ">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    className="contact-us-Control"
                    type="email"
                    placeholder="Enter Your Email address "
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label></Form.Label>
                  <Form.Control
                    className="contact-us-Control"
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  className=" text-black fw-bold uppercase  rounded-0 contact-us-hover border-black bg-transparent "
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ContactUsApp;

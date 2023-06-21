import { Col, Container, Figure, Row } from "react-bootstrap";
import "../App.css";

function AboutApp() {
  return (
    <div className="bg-blow text-white">
      <Container className="mt-5 py-5 ">
        <Figure>
          <Row className="flex-column flex-lg-row  ">
            <Col className="  col-lg-4">
              <div className="containerAbout py-5">
                <div className="shape  ">
                  {" "}
                  <Figure.Image
                    className="w-4/5"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4CRzQ4aQyvjgJAtTqDXi3xBn9Umf0NFqaqg&usqp=CAU "
                  />{" "}
                </div>
              </div>
            </Col>
            <Col className=" col-lg-2"></Col>
            <Col className="  col-lg-6 py-3">
              <h1 className=" uppercase">About Us</h1>
              <p className=" text-white py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                ipsum, possimus asperiores nam facere veritatis eligendi,
                maiores perspiciatis enim atque quod consequuntur nemo a
                similique natus dignissimos, voluptatem voluptatum totam! Modi
                fugit reiciendis, repellat dolores quam quibusdam, distinctio
                ullam deserunt in maiores tempore dolor dolore repudiandae
                obcaecati recusandae, iusto ducimus. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Est ipsum, possimus asperiores nam
                facere veritatis eligendi, maiores perspiciatis enim atque quod
                consequuntur nemo a similique natus dignissimos, voluptatem
                voluptatum totam! Modi fugit reiciendis, repellat dolores quam
                quibusdam, distinctio ullam deserunt in maiores tempore dolor
                dolore repudiandae obcaecati recusandae, iusto ducimus.
              </p>
            </Col>
          </Row>
        </Figure>
      </Container>
    </div>
  );
}

export default AboutApp;

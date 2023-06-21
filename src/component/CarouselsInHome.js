import { Carousel } from "react-bootstrap";
import "../App.css";
function CarouselsHome() {
  return (
    <Carousel className="mb-3 ">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets-static.invideo.io/images/large/Fashion_Clothing_Ad_Strategies_To_Grow_Your_Brand_3_c64b8163a9.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dablew.pk/file/2022/06/Buy-Xiaomi-Redmi-Buds-3-Lite-Wireless-Earbuds-in-Pakistan-at-Dab-Lew-Tech-10-1-1400x584.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets-static.invideo.io/images/large/Creative_Clothing_Advertisement_Ideas_To_Boost_Sales_revised_3_1_cefa9cda88.webp"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://store.univapo.com/wp-content/uploads/2021/09/MISO-C-%E8%AF%A6%E6%83%85%E9%A1%B5-0823_18-1400x584.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselsHome;

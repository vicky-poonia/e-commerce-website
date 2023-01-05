import React from "react";
import Card from "react-bootstrap/Card";
import "./Home.css";
// import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Card className="bg-light text-white border-0">
        <Card.Img src="/bg.jpg" alt="Card image" width="100vw" />
        <Card.ImgOverlay className="text d-flex align-items-start justify-content-center flex-column ">
          <Card.Title className="display-5  fw-bolder text-warning ">
            NEW ITEMS
          </Card.Title>
          <Card.Text>
            <div className="container fs-2 text-danger">CHECK !!</div>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      {/* <Products /> */}
    </div>
  );
};

export default Home;

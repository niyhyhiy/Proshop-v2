import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <div className="product">
              <Product product={product} />
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;

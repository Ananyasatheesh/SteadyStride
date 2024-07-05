import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import loginImage from "../assets/loginImage.jpg"; // Import your login image

const AdminLogin = () => {
  return (
    <Container fluid class="mt-5 px-5">
        <br/><br/><br/>
      <Row>
        <Col md={6} className="login-image">
          <img src={loginImage} alt="Login" className="img-fluid" />
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="login-form">
            <h2>LOGIN</h2>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 form-check">
                {/* <input type="checkbox" class="form-check-input" id="exampleCheck1"/> */}
                {/* <label class="form-check-label" for="exampleCheck1">Check me out</label> */}
                <p>Don't have an account..!?
                <a href="/adsign" style={{ color: 'black'}}>Sign In</a></p>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLogin;

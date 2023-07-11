import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
const Footer = () => {
  return (
    <MDBFooter bgColor="dark" className="text-center text-lg-start text-white">
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                ALBATSUKI
              </h6>
              <p>
                Your one-stop shop for anime clothes and accessories in Albania
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>Tirana, Albania</p>
              <p>Email: infoalbatsuki@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        ©2023 Copyright by
        <a className="text-reset fw-bold" href="#!">
          {" "}
          ALBATSUKI
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;

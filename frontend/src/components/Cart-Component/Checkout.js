import React, { useState, useContext } from "react";
import { ShopContext } from "../../cart-context/Shop-Context";

import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRadio,
  MDBRow,
  MDBTable,
  MDBTableHead,
} from "mdb-react-ui-kit";

import { Button, Container } from "react-bootstrap";
import CheckoutItem from "./Checkout-Item";

const Checkout = () => {
  const [expiration, setExpiration] = useState("");
  const { productsData, cartItems, getTotalCartAmount } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const handleInputChange = (event) => {
    const { value } = event.target;
    const formattedValue = value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{2})/, "$1/$2");
    setExpiration(formattedValue);
  };

  return (
    <Container>
      <section className="h-100 h-custom">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBTable responsive>
                <MDBTableHead>
                  <tr>
                    <th scope="col" className="h5">
                      Shopping Bag
                    </th>
                    <th scope="col">Format</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </MDBTableHead>
                {productsData.map((product, id) => {
                  if (cartItems[product.id] !== 0) {
                    return <CheckoutItem key={id} product={product} />;
                  } else {
                    return null;
                  }
                })}
              </MDBTable>
            </MDBCol>
            <MDBCard
              className="shadow-2-strong mb-5 mb-lg-0"
              style={{ borderRadius: "16px" }}
            >
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol md="6" lg="4" xl="3" className="mb-4 mb-md-0">
                    <form>
                      <div className="d-flex flex-row pb-3">
                        <div className="d-flex align-items-center pe-2">
                          <MDBRadio
                            type="radio"
                            name="radio1"
                            defaultChecked
                            value=""
                            aria-label="..."
                          />
                        </div>
                        <div className="rounded border w-100 p-3">
                          <p className="d-flex align-items-center mb-0">
                            <MDBIcon
                              fab
                              icon="cc-mastercard fa-2x text-dark pe-2"
                            />
                            Credit Card
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-row pb-3">
                        <div className="d-flex align-items-center pe-2">
                          <MDBRadio
                            type="radio"
                            name="radio1"
                            defaultChecked
                            value=""
                            aria-label="..."
                          />
                        </div>
                        <div className="rounded border w-100 p-3">
                          <p className="d-flex align-items-center mb-0">
                            <MDBIcon fab icon="cc-visa fa-2x text-dark pe-2" />
                            Debit Card
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-row pb-3">
                        <div className="d-flex align-items-center pe-2">
                          <MDBRadio
                            type="radio"
                            name="radio1"
                            defaultChecked
                            value=""
                            aria-label="..."
                          />
                        </div>
                        <div className="rounded border w-100 p-3">
                          <p className="d-flex align-items-center mb-0">
                            <MDBIcon
                              fab
                              icon="cc-paypal fa-2x text-dark pe-2"
                            />
                            PayPal
                          </p>
                        </div>
                      </div>
                    </form>
                  </MDBCol>
                  <MDBCol md="6" lg="4" xl="6">
                    <MDBRow>
                      <MDBCol size="12" xl="6">
                        <label htmlFor="cardName">Name on card</label>
                        <MDBInput
                          className="mb-4 mb-xl-5"
                          id="cardName"
                          placeholder="JOHN SMITHS"
                          size="lg"
                        />
                        <label htmlFor="Expiration">Expiration</label>
                        <MDBInput
                          className="mb-4 mb-xl-5"
                          id="Expiration"
                          placeholder="MM/YY"
                          value={expiration}
                          onChange={handleInputChange}
                          size="lg"
                          maxLength={5}
                          minLength={5}
                        />
                      </MDBCol>

                      <MDBCol size="12" xl="6">
                        <label htmlFor="cardNumber">Card Number</label>
                        <MDBInput
                          className="mb-4 mb-xl-5"
                          id="cardNumber"
                          placeholder="1111 2222 3333 4444"
                          size="lg"
                          minLength="19"
                          maxLength="19"
                        />
                        <label htmlFor="Cvv">Cvv</label>
                        <MDBInput
                          className="mb-4 mb-xl-5"
                          id="Cvv"
                          placeholder="&#9679;&#9679;&#9679;"
                          size="lg"
                          minLength="3"
                          maxLength="3"
                          type="password"
                        />
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol lg="4" xl="3">
                    <div
                      className="d-flex justify-content-between"
                      style={{ fontWeight: "500" }}
                    >
                      <p className="mb-2">Subtotal</p>
                      <p className="mb-2">
                        ${totalAmount !== 0 ? totalAmount : 0}
                      </p>
                    </div>

                    <div
                      className="d-flex justify-content-between"
                      style={{ fontWeight: "500" }}
                    >
                      <p className="mb-0">Shipping</p>
                      <p className="mb-0">${totalAmount > 0 ? 3 : 0}</p>
                    </div>

                    <hr className="my-4" />

                    <div
                      className="d-flex justify-content-between mb-4"
                      style={{ fontWeight: "500" }}
                    >
                      <p className="mb-2">Total (tax included)</p>
                      <p className="mb-2">
                        ${totalAmount > 0 ? totalAmount + 3 : 0}
                      </p>
                    </div>

                    <Button>
                      <div className="d-flex justify-content-between">
                        <span>Checkout</span>
                        <span> ${totalAmount > 0 ? totalAmount + 3 : 0}</span>
                      </div>
                    </Button>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBRow>
        </MDBContainer>
      </section>
    </Container>
  );
};

export default Checkout;

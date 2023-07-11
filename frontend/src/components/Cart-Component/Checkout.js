import React, { useContext, useState } from "react";
import { ShopContext } from "../../cart-context/Shop-Context";
import {
  MDBBtn,
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
import { Container } from "react-bootstrap";
import CheckoutItem from "./Checkout-Item";

const Checkout = () => {
  const { productsData, cartItems, getTotalCartAmount } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const [cardType, setCardType] = useState("");

  const handleCardNumberChange = (e) => {
    const cardNumber = e.target.value.replace(/\s/g, ""); // Remove whitespace from the card number

    // Regular expressions for card types
    const cardRegexes = {
      visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
      mastercard: /^5[1-5][0-9]{14}$/,
      amex: /^3[47][0-9]{13}$/,
      discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    };

    let newCardType = "";

    // Check the card number against the regexes
    if (cardRegexes.visa.test(cardNumber)) {
      newCardType = "Visa";
    } else if (cardRegexes.mastercard.test(cardNumber)) {
      newCardType = "Mastercard";
    } else if (cardRegexes.amex.test(cardNumber)) {
      newCardType = "American Express";
    } else if (cardRegexes.discover.test(cardNumber)) {
      newCardType = "Discover";
    }

    setCardType(newCardType);
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
                        <label htmlFor="name">Name on Card</label>
                        <MDBInput
                          className="mb-4 mb-xl-5"
                          id="name"
                          placeholder="John Smiths"
                          size="lg"
                        />

                        <label htmlFor="expiration">Expiration</label>
                        <MDBInput
                          className="mb-4 mb-xl-5"
                          id="expiration"
                          placeholder="MM/YY"
                          size="lg"
                          maxLength={4}
                          minLength={4}
                        />
                      </MDBCol>

                      <MDBCol size="12" xl="6">
                        <label htmlFor="cardNumber">Card Number</label>
                        <MDBInput
                          id="cardNumber"
                          className="mb-4 mb-xl-5"
                          placeholder="1111 2222 3333 4444"
                          size="lg"
                          minLength="19"
                          maxLength="19"
                          onChange={handleCardNumberChange}
                        />
                        {cardType && (
                          <p className="mb-0 mt-2">Card Type: {cardType}</p>
                        )}

                        <label htmlFor="cvv">CVV</label>
                        <MDBInput
                          className="mb-4 mb-xl-5"
                          id="cvv"
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
                      <p className="mb-2">${totalAmount}</p>
                    </div>

                    <div
                      className="d-flex justify-content-between"
                      style={{ fontWeight: "500" }}
                    >
                      <p className="mb-0">Shipping</p>
                      <p className="mb-0">{totalAmount > 0 ? 3 : 0}</p>
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

                    <MDBBtn block size="lg">
                      <div className="d-flex justify-content-between">
                        <span>Checkout</span>
                        <span>${totalAmount > 0 ? totalAmount + 3 : 0}</span>
                      </div>
                    </MDBBtn>
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

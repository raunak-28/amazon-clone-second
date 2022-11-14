import React, { useState } from "react";
import { Button, message, Radio, Row, Col } from "antd";
import "antd/dist/antd.css";
import { useStateValue } from "./StateProvider";
import NewAddressModal from "./NewAddressModal";
import "./Address.css";
function Address() {
  const [{ cart, user, addresses }, dispatch] = useStateValue();
  const [showAddAdressMOdal, setShowAddAdressMOdal] = useState(false);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);

  const toggleAddAddressModal = () => {
    console.log("toggle");
    setShowAddAdressMOdal(!showAddAdressMOdal);
  };

  return (
    <div>
      {addresses?.length ? (
        // Display the list of addresses as radio buttons
        <Radio.Group
          className="addresses"
          defaultValue={selectedAddressIndex}
          onChange={(e) => {
            setSelectedAddressIndex(e.target.value);
          }}
        >
          <Row>
            {/* Create a view for each of the user's addresses */}
            {addresses?.map((address, index) => (
              <Col xs={24} lg={12} key={address._id}>
                <div className="address">
                  <Radio.Button value={index}>
                    <div className="address-box">
                      <div className="address-text">
                        <h5>{address.fullName}</h5>
                        <p>
                          {address.flat}, {address.area}, {address.landmark} ,
                          {address.city}, {address.state}, {address.country},
                          Phone number: {address.mobileNumber}
                        </p>
                      </div>
                      {/* TODO: CRIO_TASK_MODULE_CHECKOUT - Clicking on Delete button should call "deleteAddress" function with the correct argument*/}
                      {/* Display button to delete address from user's list */}
                      <div className="delete-address-btn">
                        <Button type="primary">Delete</Button>
                      </div>
                    </div>
                  </Radio.Button>
                </div>
              </Col>
            ))}
          </Row>
        </Radio.Group>
      ) : (
        // Display static text banner if no addresses are added
        <div className="red-text checkout-row">
          No addresses found. Please add one to proceed.
        </div>
      )}
      <Button type="primary" onClick={() => toggleAddAddressModal()}>
        <large>+</large> Add a new address
      </Button>
      {showAddAdressMOdal && (
        <NewAddressModal handleClose={toggleAddAddressModal} />
      )}
    </div>
  );
}

export default Address;

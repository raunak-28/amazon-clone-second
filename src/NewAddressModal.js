import React, { useState } from "react";
import "./NewAddressModal.css";
import { useStateValue } from "./StateProvider";

const initialAddress = {
  fullName: "",
  mobileNumber: "",
  flat: "",
  area: "",
  landmark: "",
  city: "",
  state: "",
  country: "",
};

function NewAddressModal({ handleClose }) {
  const [address, setAddress] = useState(initialAddress);
  const [{ cart, user, addresses }, dispatch] = useStateValue();

  const handleChange = (field, event) => {
    setAddress({
      ...address,
      [field]: event.target.value,
    });
  };

  const handleSaveAddress = () => {
    dispatch({
      type: "ADD_ADDRESS",
      item: address,
    });
  };
  console.log(address, "address");
  return (
    <div className="modal">
      <section className="modal-main">
        <div className="modal_title">
          <h4>Enter a new delivery address</h4>
          <span onClick={handleClose}>
            <h5>X</h5>
          </span>
        </div>
        <form className="form_items">
          <div className="form_element">
            <h5>Full Name</h5>
            <input
              type="text"
              value={address.fullName}
              onChange={(e) => handleChange("fullName", e)}
            />
          </div>
          <div className="form_element">
            <h5>Mobile number</h5>
            <input
              type="text"
              value={address.mobileNumber}
              onChange={(e) => handleChange("mobileNumber", e)}
            />
          </div>
          <div className="form_element">
            <h5>Flat, House no., Building, Company, Apartment</h5>
            <input
              type="text"
              value={address.flat}
              onChange={(e) => handleChange("flat", e)}
            />
          </div>
          <div className="form_element">
            <h5>Area, Street, Sector, Village</h5>
            <input
              type="text"
              value={address.area}
              onChange={(e) => handleChange("area", e)}
            />
          </div>
          <div className="form_element">
            <h5>Landmark</h5>
            <input
              type="text"
              value={address.landmark}
              onChange={(e) => handleChange("landmark", e)}
            />
          </div>
          <div className="form_element">
            <h5>City</h5>
            <input
              type="text"
              value={address.city}
              onChange={(e) => handleChange("city", e)}
            />
          </div>
          <div className="form_element">
            <h5>State</h5>
            <input
              type="text"
              value={address.state}
              onChange={(e) => handleChange("state", e)}
            />
          </div>
          <div className="form_element">
            <h5>Country</h5>
            <input
              type="text"
              value={address.country}
              onChange={(e) => handleChange("country", e)}
            />
          </div>
          <div className="saveButton">
            <button type="button" onClick={handleSaveAddress}>
              Use this address
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default NewAddressModal;

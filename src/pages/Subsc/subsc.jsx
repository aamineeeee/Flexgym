import React, { useState } from "react";
import "./subsc.css"; // Assurez-vous de créer ce fichier CSS

const Subsc = () => {
  const [selectedPack, setSelectedPack] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [confirmation, setConfirmation] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePackSelection = (pack) => {
    setSelectedPack(pack);
    setTotalPrice(pack.price);
    setConfirmation(false); // Reset confirmation if a new pack is selected
    setOrderPlaced(false); // Reset order placed state if a new pack is selected
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    if (name === "startDate") {
      setStartDate(value);
    } else if (name === "endDate") {
      setEndDate(value);
    }
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const calculateTotalPrice = () => {
    if (startDate && endDate && selectedPack) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const months = diffDays / 30;
      setTotalPrice((months * selectedPack.price).toFixed(2)); // Assuming price is per month
      setConfirmation(true); // Show confirmation form
    } else {
      alert("Please select a start date, end date, and membership pack.");
    }
  };

  const handleConfirm = () => {
    if (phoneNumber) {
      setOrderPlaced(true);
      setConfirmation(false); // Hide confirmation form when order is placed
    } else {
      alert("Please enter your phone number.");
    }
  };

  return (
    <div className="subsc-wrapper">
      {/* Memberships banner */}
      <section className="memberships-banner banner">
        <div className="container center">
          <div className="banner-heading">
            <h1>Memberships</h1>
          </div>
        </div>
      </section>

      <section className="memberships center">
        <div className="container py-5">
          <div className="heading center">
            <h1
              className="text-4xl uppercase font-bold p-3"
              style={{ color: "orangered" }}
            >
              Memberships
            </h1>
          </div>
          <div className="membrshp-row center flex-wrap my-5">
            {[
              {
                name: "Basic Membership",
                price: 1000,
                benefits:
                  "Access to our state-of-the-art facilities, group fitness classes, and cardio equipment.",
              },
              {
                name: "Premium Membership",
                price: 1600,
                benefits:
                  "All the benefits of basic membership, plus unlimited access to specialized training areas and personal swimming sessions.",
              },
              {
                name: "Gold Membership",
                price: 2000,
                benefits:
                  "The ultimate package, including all the benefits of the Premium Membership, exclusive access to premium amenities, and priority registration for fitness workshops and events.",
              },
            ].map((pack) => (
              <div
                key={pack.name}
                className="membrshp-col around flex-col hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group"
                onClick={() => handlePackSelection(pack)}
              >
                <div className="membrshp-title">
                  <h3>{pack.name}</h3>
                </div>
                <div className="pricing">
                  <h4 className="font-semibold text-slate-700 group-hover:text-white">
                    From {pack.price} dhs/month
                  </h4>
                </div>
                <div className="membrshp-text text-justify">
                  <p className="text-slate-700 group-hover:text-white">
                    {pack.benefits}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedPack && !orderPlaced && (
        <section className="subscription-details center animate__animated animate__fadeIn">
          <div className="container py-5">
            <div className="details-form">
              <h2 className="text-2xl font-bold">Subscription Details</h2>
              <form>
                <div className="form-group">
                  <label>Start Date:</label>
                  <input
                    type="date"
                    name="startDate"
                    value={startDate}
                    onChange={handleDateChange}
                  />
                </div>
                <div className="form-group">
                  <label>End Date:</label>
                  <input
                    type="date"
                    name="endDate"
                    value={endDate}
                    onChange={handleDateChange}
                  />
                </div>
                <div className="form-group">
                  <label>Location:</label>
                  <input
                    type="text"
                    name="location"
                    value={location}
                    onChange={handleLocationChange}
                  />
                </div>
                <button type="button" onClick={calculateTotalPrice}>
                  Calculate Total Price
                </button>
                <div className="form-group">
                  <label>Total Price:</label>
                  <input
                    type="text"
                    name="totalPrice"
                    value={totalPrice}
                    readOnly
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {confirmation && !orderPlaced && (
        <section className="confirmation-details center animate__animated animate__fadeIn">
          <div className="container py-5">
            <div className="confirmation-form">
              <h2 className="text-2xl font-bold">Confirmation</h2>
              <p>Please review your subscription details:</p>
              <p>Pack: {selectedPack.name}</p>
              <p>Start Date: {startDate}</p>
              <p>End Date: {endDate}</p>
              <p>Location: {location}</p>
              <p>Total Price: {totalPrice} dhs</p>
              <div className="form-group">
                <label>Phone Number:</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={phoneNumber}
                  placeholder="+212 652 52 09 69"
                  className="input-controls"
                  pattern="[0-9]{10}"
                  onChange={handlePhoneNumberChange}
                  required
                />
              </div>
              <button type="button" onClick={handleConfirm}>
                Confirm
              </button>
            </div>
          </div>
        </section>
      )}

      {orderPlaced && (
        <div className="order-success center animate__animated animate__fadeIn">
          <div className="container py-5">
            <div className="success-message">
              <h2 className="text-2xl font-bold">
                <span role="img" aria-label="check" style={{ color: "green" }}>
                  ✔️
                </span>{" "}
                Order Placed Successfully!
              </h2>
              <p>
                Your order has been placed successfully. You will receive your
                card within 12 hours at the location: {location}.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subsc;

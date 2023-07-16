import React from "react";

const DonationData = ({ Donationdata }) => {
  const getTotalDonation = () => {
    let total = 0;
    Donationdata.map(({ Donation }) => {
      return (total += Donation);
    });
    return total;
  };
  const totalDonation = getTotalDonation();
  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Donation Data</h1>
      <ul style={{ listStyle: "none" }}>
        {Donationdata.map(({ id, name, Donation }) => (
          <li style={{ padding: "10px" }} key={id}>
            {id}. {name} {Donation}
          </li>
        ))}
      </ul>
      <p>
        Total Donation Collected:{" "}
        <span style={{ color: "green" }}>${totalDonation}</span>
      </p>
    </div>
  );
};

export default DonationData;

import React, { useEffect, useState } from "react";
import { fakeFetch } from "./api";

const Users = () => {
  const [showUsers, setShowUsers] = useState([]);
  const [showUserInfo, setShowUserInfo] = useState("");

  const getUserData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/users");
      setShowUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const companyName = showUsers.map(({ company }) => company);

  const hanldeCompany = (cname) => {
    setShowUserInfo(cname);
  };

  const handleChange = (e) => {
    hanldeCompany(e.target.value);
  };

  const filtedredItems = showUserInfo
    ? showUsers.filter(({ company }) => company === showUserInfo)
    : showUsers;

  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Employee Details</h1>
      <label>Employee Detail's: </label>
      <select
        style={{ padding: "5px", fontSize: "40px" }}
        onChange={handleChange}
      >
        <option value="">All</option>
        {companyName.map((company) => (
          <option key={company} value={company}>
            {company}
          </option>
        ))}
      </select>
      <ul>
        {filtedredItems.map(({ name, email, website, company }) => (
          <li key={name}>
            <p>
              <b>Name:</b> {name}
            </p>
            <p>
              <b>Email:</b> {email}
            </p>
            <p>
              <b>Website:</b> {website}
            </p>
            <p>
              <b>Company:</b> {company}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;

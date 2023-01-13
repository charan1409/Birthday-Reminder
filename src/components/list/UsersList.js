import React, { useState } from "react";
import "./UsersList.css";
import Card from "../../UI/Card";
import UserBox from "./UserBox";

const List = (props) => {
  const [filteredYear, setfilteredYear] = useState("2001");

  const filteredUsers = [];

  const setFilteredYearHandler = (e) => {
    setfilteredYear(e.target.value);
  };

  props.userList.forEach((element) => {
    if (filteredYear === element.DOB.split("/")[2]) {
      filteredUsers.push(element);
    }
  });

  let userData = <p className="data">No users available from this year</p>;
    if(filteredUsers.length > 0){
      userData = <div>
      {filteredUsers.map((user) => (
        <UserBox key={user.id} user={user}></UserBox>
      ))}
    </div>
    }
  return (
    <Card className="user-list-card">
      <div className="year-selector">
        <label htmlFor="year">Select Year Of Birth: </label>
        <select
          name="year"
          onChange={setFilteredYearHandler}
          value={filteredYear}
        >
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
        </select>
      </div>
      {userData}
    </Card>
  );
};

export default List;

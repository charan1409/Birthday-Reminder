import React, { useState } from "react";
import "./App.css";
import Card from "./UI/Card";
import Form from "./components/form/Form";
import List from "./components/list/UsersList";

const users = [
  {
    id: "2022-07-16T11:11:58.631Z",
    name: "rahul",
    email: "rahul@gmail.com",
    phoneNumber: "9876543210",
    DOB: "9/12/2001",
  },
  {
    id: "2022-07-16T11:11:58.631Z",
    name: "kamal",
    email: "kamal@gmail.com",
    phoneNumber: "9874563210",
    DOB: "9/29/2002",
  },
  {
    id: "2022-07-16T11:11:58.631Z",
    name: "charan",
    email: "charan@gmail.com",
    phoneNumber: "9392756484",
    DOB: "9/14/2003",
  },
  {
    id: "2022-07-16T11:11:58.631Z",
    name: "rohith",
    email: "rohith@gmail.com",
    phoneNumber: "1234567890",
    DOB: "9/19/2004",
  },
];
function App() {
  const [userslist, setUser] = useState(users);
  const saveNewUser = (newUserData) => {
    setUser((prevState) => {
      return [newUserData, ...prevState];
    });
  };

  const [displayClass, setDisplayClass] = useState("hide");
  const showForm = () => {
      setDisplayClass("show");
  };

  const hideForm = () => {
    setDisplayClass("hide");
  };

  if (displayClass === "show") {
    return (
      <div>
        <Card className="App">
          <h1>Add User</h1>
          <Form onAddUser={saveNewUser} onCancel={hideForm}></Form>
        </Card>
        <List userList={userslist} />
      </div>
    );
  } else if(displayClass === "hide") {
    return (
      <div>
        <Card className="App-btn">
          <button onClick={showForm}>Add User</button>
        </Card>
        <List userList={userslist} />
      </div>
    );
  }

}

export default App;

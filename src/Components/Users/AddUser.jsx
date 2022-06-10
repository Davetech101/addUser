import { useState } from "react";

import Card from "../UI/Card";
import "./AddUser.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");

  const [enteredAge, setEnteredAge] = useState("");

  const [inputValid, setInputValid] = useState(true);

  const getNameHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const getAgeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    e.target.reset();

    if (enteredAge <= 0 || enteredUsername.trim() === "") {
      setInputValid(false);
    }

    const userData = {
      username: enteredUsername,
      age: enteredAge,
    };

    props.getuserHandler(userData);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setInputValid(true);
  };

  return (
    <>
      {!inputValid && (
        <ErrorModal
          title="An Error occured!"
          message="Something went wrong"
          onConfirm={errorHandler}
        />
      )}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={getNameHandler} />

          <label htmlFor="age">Age</label>
          <input id="age" type="number" onChange={getAgeHandler} />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;

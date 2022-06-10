import { useState } from "react";

import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
  const [usersData, setUsersData] = useState([])
  

  const userInfo = (recievedData) => {
    setUsersData(prev => {
      return [recievedData, ...prev]
    })
  }

  return (
    <div className="app">
      <AddUser usersData={usersData} getuserHandler={userInfo}/>

      <UserList usersData={usersData}/>
    </div>
  );
}

export default App;

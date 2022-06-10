import Card from "../UI/Card";
import "./UserList.css"

function UserList(props) {
  return (
    <Card className="users">
      <ul>
        {props.usersData.map((user, id) => (
          <li key={id}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;

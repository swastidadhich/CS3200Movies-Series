import userService from "./user-service"

const {Link, useHistory} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const UserList = () => {
  const [users, setUsers] = useState([])
  const history = useHistory()

  useEffect(() => {
    findAllUsers()
  }, [])
  const findAllUsers = () =>
      userService.findAllUsers()
      .then(users => setUsers(users))

  return(
        <div>
            <h2>User List</h2>
            <button className="btn btn-primary">
                Add User
            </button>
          <button onClick={() => history.push("/users/new")}>
            Add User
          </button>
          <ul className="list-group">
              {
                users.map(user =>
                    <li key={user.id}>
                      <Link to={`/users/${user.id}`}>
                      {user.firstName},
                      {user.lastName},
                      {user.username}
                      </Link>
                    </li>)
              }
              <li className="list-group-item">
                    <Link to="/users/123">
                        Mirah Gordon
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link to="/users/123">
                        Emily Gringorten
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link to="/users/123">
                        Anika Das
                    </Link>
                </li>
              <li className="list-group-item">
                  <Link to="/users/123">
                      Swasti Dadhich
                  </Link>
              </li>
            </ul>
        </div>
    )
}

export default UserList;
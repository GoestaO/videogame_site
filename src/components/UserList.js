import React from 'react';
import PropTypes from 'prop-types';
import AddUser from "./AddUser";

// Features
// - when the user is added, the number of games that he/she has played is defaulted to 0.
// - each username has to be unique, so we cannot add multiple users with the same username.
// - when someone clicks "Add" but the username already exists, the app should not allow for a duplicate user to be added and should show an error message instead.

const UserList = (props) => {
  const userList = props.userList;
  const showGamesPlayed = props.showGamesPlayed;
  return (<div>
    <table>
      <thead>
        <tr>
          <th>Nr.</th>
          <th>Username</th>
          <th>Games played</th>
        </tr>
      </thead>
      <tbody>
        {
          userList.map((user, index) => <tr key={index}>
            <td>{index+1}</td>
            <td>{user.userName}</td>
            <td>{showGamesPlayed ? user.gamesPlayed : "*"}</td>
          </tr>)
        }
      </tbody>
    </table>
  </div>);

}

UserList.propTypes = {
  userList: PropTypes.array.isRequired,
  showGamesPlayed: PropTypes.bool.isRequired,
}

export default UserList;

import React from 'react';
import PropTypes from 'prop-types';

// Features:
// - add a user's first name, last name, and username
// - when the user is added, the number of games that he/she has played is defaulted to 0.
// - If someone tries to add a user when one of the fields is empty, the "Add" button should be disabled.

class AddUser extends React.Component {

  // Initial empty user object
  state = {
    user: {
      firstName: '',
      lastName: '',
      userName: '',
      gamesPlayed: 0
    }
  }

  // Updates the state when something was typed in an input field, depends on in which inputField
  handleChange = (event) => {
    let user = this.state.user;
    switch (event.target.name) {
      case "firstName":
        user.firstName = event.target.value;
        break;
      case "lastName":
        user.lastName = event.target.value;
        break;
      case "userName":
        user.userName = event.target.value;
        break;
    }
    this.setState({user: user})
  }

  inputIsEmpty = () => {
    return (this.state.user.firstName === '' || this.state.user.lastName === '' || this.state.user.userName === '');
  }

  // Invokes the addUser function in UserList component
  addUser = (event) => {
    event.preventDefault();
    this
      .props
      .addUser(this.state.user);
    this.setState({
      user: {
        firstName: '',
        lastName: '',
        userName: '',
        gamesPlayed: 0
      }
    })
  }

  render() {
    return (<form onSubmit={this.addUser}>
      <input type="text" name="firstName" value={this.state.user.firstName} onChange={this.handleChange} placeholder="First Name"/>
      <input type="text" name="lastName" value={this.state.user.lastName} onChange={this.handleChange} placeholder="Last Name"/>
      <input type="text" name="userName" value={this.state.user.userName} onChange={this.handleChange} placeholder="Username"/>
      <button disabled={this.inputIsEmpty()}>Add</button>
    </form>);
  }
}

AddUser.propTypes = {
  addUser: PropTypes.func.isRequired
}

export default AddUser;

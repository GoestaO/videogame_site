import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import AddUser from "./components/AddUser";
import ShowGamesPlayedToggle from './components/ShowGamesPlayedToggle';
import ErrorMessage from './components/ErrorMessage';

/* This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file. */

class App extends Component {

  state = {
    userList: [],
    showGamesPlayed: true,
    userNameExists: false
  };

  handleAddUser = user => {
    this.hideErrorMessage();
    const userNameExists = this.userNameExists(user);
    console.log(userNameExists);
    if (!userNameExists) {
      this.setState(prevState => ({
        userList: [
          ...prevState.userList,
          user
        ]
      }));
    } else {
      this.setState({userNameExists: true});
    }
  }

  handleGamesPlayedToggle = () => {
    let showGamesPlayed = this.state.showGamesPlayed;
    this.setState({
      showGamesPlayed: !showGamesPlayed
    });
  }

  hideErrorMessage = () => {
    this.setState({userNameExists: false});
  }

  userNameExists = (user) => {
    const userList = this.state.userList;
    return (userList.filter(userInList => user.userName === userInList.userName).length > 0);
  }

  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <ErrorMessage errorMessage="The username already exists!" isActive={this.state.userNameExists} hideErrorMessage={this.hideErrorMessage}/>
      <AddUser addUser={this.handleAddUser}/>
      <UserList userList={this.state.userList} showGamesPlayed={this.state.showGamesPlayed}/>
      <ShowGamesPlayedToggle toggleGamesPlayed={this.handleGamesPlayedToggle} text="Toggle"/>
    </div>);
  }
}

export default App;

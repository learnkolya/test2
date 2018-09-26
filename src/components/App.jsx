import React, { Component } from 'react';
import "../styles/exodus.css";
import Auth from './Auth'
import NotAuth from './NotAuth'

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      // auth: false,
      // token: "",
      logState: null
    }
  }

  componentDidMount(){
     this.setState({logState: localStorage.getItem('auth')}) 
  }

  authorisation(variable) {

    this.setState({
      auth: variable
    }, () => console.log(this.state.auth)); 

  }
  

  handleLogState(val) {
    this.setState({logState: val})
  }

  render() {

    return (
      <div>
        <div className="header">
          <div className="logo"></div>
        </div>

        <div className = "center">
          {this.state.logState ? <Auth logState = { this.handleLogState.bind(this)} prop={this.state}  /> : <NotAuth logState = { this.handleLogState.bind(this)}/>}
        </div>

      </div>
    );
  }
}

export default App;

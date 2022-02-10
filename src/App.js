import logo from './logo.svg';
import './App.css';
//import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import React, {Component} from 'react'
//import MenuComponents from './components/MenuComponents';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: false
    };
  }
  handleLoginEvent=(param)=>{
    console.log("HereIm", param);
    this.setState({isLogginActive: true})
  }
  render() {
    const { isLogginActive } = this.state;
    console.log("isLogginActive", isLogginActive)
    return (
      <div className="App">
        <div className="login">
          <div className="container" >
            {/* {!isLogginActive && <LoginForm  handleLoginEvent={this.handleLoginEvent(false)}/>}
            {isLogginActive && <HomePage  />} */}
            <HomePage />
           
          </div>
        </div>
      </div>
    );
  }
}
export default App;

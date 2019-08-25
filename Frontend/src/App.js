import React,{Component} from 'react';
import fire from './Fire.js'
import Login from './Login.js'
import Home from './Home.js'
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });
  }

  render(){
    return (
        <div>
        {this.state.user ? (<Home />) : (<Login />)}
        </div>
    );
  }
}

export default App;

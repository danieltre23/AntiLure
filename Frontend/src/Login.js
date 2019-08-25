import React,{Component} from 'react';
import background from './img/mbi.jpg';
import './App.css';
import fire from './Fire.js';
import logo from './img/antilure.png';


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            fireErrors: '',
        }
  }
  
  login = e => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .catch((error) => {
        this.setState({fireErrors: error.message})
    });
}

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
}

render(){
    return(
        <div className="container">
            <img src={background} className="background" alt="logo"/>
            <img src={logo} className="logoLogin" alt="logo"/>
            <div className="whiteSpace">
            <div className='signIn'>Sign in</div>
            <div className='tocont'>To continue to AntiLure</div>
            <form className="email">
                <input className='emailBox' type="text" placeholder="Username "
                value={this.state.email}
                onChange={this.handleChange}
                name ="email" />
              </form>
              <form className="password" >
                <input className='passwordBox' type="text" placeholder="Password "
                value={this.state.password}
                onChange={this.handleChange}
                name ="password" />
              </form>
              <button className="loginButton" onClick={this.login}>
                Sign In
             </button>
            </div>
        
            </div>
    )
}
}

export default Login;
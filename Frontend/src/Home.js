import React,{Component} from 'react';
import fire from './Fire.js';
import logo from './img/antilure.png';
import './App.css';
import ActivityList from './activityList'





class Home extends Component {
    logout = () => {
        fire.auth().signOut();
        }
    render(){
        return(
            <div className="container">
                <div className="header">
                <img src={logo} className="logo" alt="logo"/>
           
            
            
                <button onClick={this.logout} className="logoutB">
                    LogOut
                    </button>

                   
                   
                    </div>
                <div className="rest">
                <ActivityList/>
                    </div>
                </div>
        )
    }
}
export default Home;
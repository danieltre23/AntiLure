import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';

import ActivityDetaile from './activityDetaile'


const ActivitySummary = ({activitys})=>{
        console.log(activitys)
    return( 
        <div className="pprruueebbaa">
            <ul className="ulllll">

        {activitys && activitys.map(activity =>{
            return(
                
                <ActivityDetaile activity={activity} key={activity.id}/>
               
            )
        })}
      
        </ul>
          </div>
        
        )}

export default ActivitySummary;
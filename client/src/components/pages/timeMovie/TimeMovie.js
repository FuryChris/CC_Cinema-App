import React from 'react';
import { Link } from 'react-router-dom';
import './timeMovie.css'

class TimeMovie extends React.Component {

       render() {
           var items2d = [
            {id: "2d1", t: "9:00"},
            {id: "2d2", t: "12:00"},
            {id: "2d3", t: "15:00"},
            {id: "2d4", t: "18:00"}
           ]
           var items3d = [
            {id: "3d1", t: "9:00"},
            {id: "3d2", t: "12:00"},
            {id: "3d3", t: "15:00"},
            {id: "3d4", t: "18:00"}
           ]
           return (

            <div className="ui four column grid">
              <div className="two column row">
                <p><span className="label">2D</span></p>
              </div>
                {items2d.map(el => (
                <Link className="link" key={el.id}  to={{pathname: '/time',}}>
                   <div className="time" key={el.id}>{el.t}</div>
                </Link>
                ))}
         
              <div className="two column row">
                <p><span className="label">3D</span></p>
              </div>
                {items3d.map(el => ( 
                <Link className="link" key={el.id}  to={{pathname: '/time',}} >
                   <div className="time" key={el.id}>{el.t}</div>
                 </Link>
                 ))}
            </div>
           );
       }  
};

    export default TimeMovie;
import React from 'react';
import { Link } from 'react-router-dom';
import './timeMovie.css'

class TimeMovie extends React.Component {
            
       render() {
           var items2d = [
            {timeId: "2d1", time_movie: "9:00"},
            {timeId: "2d2", time_movie: "12:00"},
            {timeId: "2d3", time_movie: "15:00"},
            {timeId: "2d4", time_movie: "18:00"}
           ]
           var items3d = [
            {timeId: "3d1", time_movie: "9:00"},
            {timeId: "3d2", time_movie: "12:00"},
            {timeId: "3d3", time_movie: "15:00"},
            {timeId: "3d4", time_movie: "18:00"}
           ]
           return (

            <div className="ui four column grid">
              <div className="two column row">
                <p><span className="label">2D</span></p>
              </div>
                {items2d.map(el => (
                <Link className="link" key={el.id}  to={{pathname: '/tickets', 
                state: {
                    timeId : el.timeId,
                    time_movie: el.time_movie
                }}}>
                   <div className="time" key={el.id}>{el.time_movie}</div>
                </Link>
                ))}
         
              <div className="two column row">
                <p><span className="label">3D</span></p>
              </div>
                {items3d.map(el => ( 
                <Link className="link" key={el.id}  to={{pathname: '/tickets',
                state: {
                    timeId : el.timeId,
                    time_movie: el.time_movie
                }}}>
                   <div className="time" key={el.id}>{el.time_movie}</div>
                 </Link>
                 ))}
            </div>
           );
       }  
};

    export default TimeMovie;
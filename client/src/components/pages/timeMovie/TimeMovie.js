import React from 'react';
import './timeMovie.css'

class TimeMovie extends React.Component {


        render() {
            return ( 
            
                <div className="ui four column grid">
  <div className="two column row">
  <p><span className="label">2D</span></p>
  </div>
  <div className="time">9:00</div>
  <div className="time">12:00</div>
  <div className="time">15:00</div>
  <div className="time">18:00</div>

  <div className="two column row">
  <p><span className="label">3D</span></p>
  </div>
  <div className="time">9:00</div>
  <div className="time">12:00</div>
  <div className="time">15:00</div>
  <div className="time">18:00</div>
</div>

            )
    }
};
    
    export default TimeMovie;
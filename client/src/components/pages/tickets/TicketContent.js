import React from 'react';
import './Ticket.scss'


class TicketContent extends React.Component {

      render() {
                  return (   
                    <div id="cardWrap">
                    <div className="cardMain cardLeft">
                      <h1>Startup <span>Cinema</span></h1>
                      <div className="title">
                        <h2>Star Wars: Episode IX - The Rise of Skywalker</h2>
                        <span>movie</span>
                      </div>
                      <div className="name">
                        <h2>John Johnovsky</h2>
                        <span>name</span>
                      </div>
                      <div className="seat">
                        <h2>156</h2>
                        <span>seat</span>
                      </div>
            
                      <div className="row">
                        <h2>2</h2>
                        <span>row</span>
                      </div>
            
                      <div className="row">
                        <h2>C</h2>
                        <span>hall</span>
                      </div>  
                
                      <div className="time">
                        <h2>12:15</h2>
                        <span>time</span>
                      </div>
                    </div>
                    <div className="cardMain cardRight">
                      <div className ="number" id="hall">
                        <h3>Hall: C</h3>
                      </div>
                      <div className="number">
                        <h3>156</h3>
                        <span>seat</span>
                      </div>
                      <div className ="number" id="rowcut">
                        <h3>2</h3>
                        <span>row</span>
                      </div>
                      <div className="barcode"></div>
                    </div>
              </div>
                  )
          }
        }

export default TicketContent;
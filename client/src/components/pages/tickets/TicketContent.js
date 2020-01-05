import React from 'react';
import './Ticket.scss'


class TicketContent extends React.Component {
  
  state = {
    userName: 'John Smith', // <-- id użytkownika
    seat: '22', // <-- zarezerwowane siedzenia, można wrzucić do potwierdzenia rezerwacji
    movieTitle: 'Star Wars: Episode IX - The Rise of Skywalker',
    row: 'B',
    hall: 'C',
    date: '12.05.2020 18:00'
}


      render() {
                  return (   
                    <div id="cardWrap">
                    <div className="cardMain cardLeft">
                      <h1>Babylon <span>Cinema</span></h1>
                      <div className="title">
                        <h2>{this.state.movieTitle}</h2>
                        <span>movie</span>
                      </div>
                      <div className="name">
                        <h2>{this.state.userName}</h2>
                        <span>name</span>
                      </div>
                      <div className="seat">
                        <h2>{this.state.seat}</h2>
                        <span>seat</span>
                      </div>
            
                      <div className="row">
                        <h2>{this.state.row}</h2>
                        <span>row</span>
                      </div>
            
                      <div className="row">
                        <h2>{this.state.hall}</h2>
                        <span>hall</span>
                      </div>  
                
                      <div className="time">
                        <h2>{this.state.date}</h2>
                        <span>date</span>
                      </div>
                    </div>
                    <div className="cardMain cardRight">
                      <div className ="number" id="hall">
                        <h3>Hall: {this.state.hall}</h3>
                      </div>
                      <div className="number">
                        <h3>{this.state.seat}</h3>
                        <span>seat</span>
                      </div>
                      <div className ="number" id="rowcut">
                        <h3>{this.state.row}</h3>
                        <span>row</span>
                      </div>
                      <div className="barcode"></div>
                    </div>
              </div>
                  )
          }
        }

export default TicketContent;
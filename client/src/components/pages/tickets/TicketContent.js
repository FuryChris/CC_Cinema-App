import React from 'react';
import './Ticket.scss'


class TicketContent extends React.Component {

  state = {
    userName: 'John Smith', // <-- id użytkownika
    seats: ['22', '23', '24', '25', '26', '27'], // <-- zarezerwowane siedzenia, można wrzucić do potwierdzenia rezerwacji
    movieTitle: 'Star Wars: Episode IX - The Rise of Skywalker',
    row: ['B', 'B', 'C', 'B', 'D', 'B'],
    hall: 'C',
    date: '12.05.2020 18:00'
}


      render() {


        const elements = this.state.seats;
        const items = []

        for (const [index, value] of elements.entries()) {
          items.push(
                    
            <div key={index} className="cardWrap">
              <div className="divCenter">
                <div className="card cardMain cardLeft">
                  <h1>Babylon <span>Cinema</span></h1>
                  <div className="title">
                    <h2>{this.state.movieTitle}</h2>
                    <span>movie</span>
                  </div>
                  <div className="name">
                    <h2>{this.state.userName}</h2>
                    <span>name</span>
                  </div>
                  <div className="seattick">
                    <h2>{value}</h2>
                    <span>seat</span>
                  </div>
        
                  <div className="rowtick">
                    <h2>{this.state.row[index]}</h2>
                    <span>row</span>
                  </div>
        
                  <div className="rowtick">
                    <h2>{this.state.hall}</h2>
                    <span>hall</span>
                  </div>  
            
                  <div className="timetick">
                    <h2>{this.state.date}</h2>
                    <span>date</span>
                  </div>
                </div>
                <div className="cardMain cardRight">
                  <div className ="number" id="hall">
                    <h3>Hall: {this.state.hall}</h3>
                  </div>
                  <div className="number">
                    <h3>{value}</h3>
                    <span>seat</span>
                  </div>
                  <div className ="number" id="rowcut">
                    <h3>{this.state.row[index]}</h3>
                    <span>row</span>
                  </div>
                  <div className="barcode"></div>
                </div>
               </div>
            </div>   
            )
        }
      
        return (
          <div>
            {items}
          </div>
 
                  )
          }
        } 

export default TicketContent;
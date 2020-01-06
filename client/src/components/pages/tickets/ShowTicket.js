import React from 'react';
import './Ticket.scss';
import TicketContent from './TicketContent';


class ShowTicket extends React.Component {

  constructor(props) {

    super(props);
    this.  state = {
    userName: 'John Smith', // <-- id użytkownika
    seats: [22, 23, 24, 25, 26, 27], // <-- zarezerwowane siedzenia, można wrzucić do potwierdzenia rezerwacji
    movieTitle: 'TestMovie',
    row: ['B', 'B', 'C', 'B', 'D', 'B'],
    hall: 'C',
    date: '12.05.2020',
    time: '12:00',
    isToggleOn: true
};
    this.handleClick = this.handleClick.bind(this);
    
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: false
    }));
    }

      render() {
                  return ( 
                    <div className="ticketPop"> 
                      <div className="divCenter" >
                        {this.state.isToggleOn ? <button id="btnTicket" onClick={this.handleClick}> Show Ticket(s)  </button> :<TicketContent 
                        {...this.state} />}
                      </div>
                    </div>
                  )
          }
        }




export default ShowTicket;
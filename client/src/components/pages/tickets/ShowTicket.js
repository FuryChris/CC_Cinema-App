import React from 'react';
import './Ticket.scss';
import TicketContent from './TicketContent';



class ShowTicket extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
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
                      <div className="divCenter">
                        {this.state.isToggleOn ? <button id="btnTicket" onClick={this.handleClick}>Show Ticket(s)  </button> :<TicketContent />}
                      </div>
                    </div>
                  )
          }
        }




export default ShowTicket;
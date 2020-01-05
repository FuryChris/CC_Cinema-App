import React from 'react';
import './Ticket.scss';
import { Link } from 'react-router-dom';
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
                    <div id="ticketPop"> 
                    {this.state.isToggleOn ? <button id="btnTicket" onClick={this.handleClick}>Pokaż bilet  </button> :<TicketContent />}
                    </div>

                  )
          }
        }




export default ShowTicket;
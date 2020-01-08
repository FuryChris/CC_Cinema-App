import React from 'react';
import './Ticket.scss';
import TicketContent from './TicketContent';


class ShowTicket extends React.Component {

  constructor(props) {

    super(props);
    this.  state = {   // ZAMOCKOWANY BILET DO PRZESLANIA
      userName: 'John Smith', 
      seats: [22, 23, 24, 25, 26, 27],
      movieTitle: 'This Ticket is made for Test',
      row: ['B', 'B', 'C', 'B', 'D', 'B'],
      hall: 'C',
      date: '12.05.2020',
      time: '12:00',
      isToggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

        // // // // //    ComponentDidMount ---> To dodać gdy  już stan z poprzedniego elementu będzie przesyłany. Zmienić nazwy propsów na te odpowiadające stanowi rodzica
  componentDidMount() {
    this.setState({
      // movieTitle: this.props.movieTitle,
      // seats: this.props.seats,
      // userName: this.props.userName,
      // row: this.props.row,
      //hall: this.props.location.state.hallNumber,
      //date: this.props.location.state.startDate,
      time: this.props.location.state.time_movie
    })
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
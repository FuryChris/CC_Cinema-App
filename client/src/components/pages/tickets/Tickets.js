import React from 'react';
import { Link } from 'react-router-dom';

class Tickets extends React.Component {
  state = {
    tickets: [
      { type: 'normal', price: '25 zł', amount: 0 },
      { type: 'child', price: '18 zł', amount: 0 },
      { type: 'student', price: '20 zł', amount: 0 },
      { type: 'senior', price: '20 zł', amount: 0 },
      { type: 'veteran', price: '18 zł', amount: 0 },
      { type: 'CinemaCard', price: '15 zł', amount: 0 }
    ]
  };
  
  handleInputChange = (e) => {
    const ticketType = e.target.name;
    const ticketValue = e.target.value;

    this.setState(prevState => {
      const tickets = prevState.tickets.map(ticket => {
        if (ticket.type === ticketType) {
          return { ...ticket, amount: ticketValue };
        } else {
          return ticket;
        }
      });
      return { tickets };
    });
  }

  render() {
    return (
      <div className='Tickets'>
        <h1>Choose your tickets</h1>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.tickets.map(ticket => {
                return (
                  <tr key={ticket.type}>
                    <td>{ticket.type}</td>
                    <td>{ticket.price}</td>
                    <td>
                      <input 
                        type='number' 
                        min='0' 
                        max='10' 
                        name={ticket.type} 
                        value={ticket.amount} 
                        onChange={this.handleInputChange} 
                      />
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        <button className='ui button primary'>
          <Link to='/halls'>Choose your seats</Link>
        </button>
      </div>
    );
  }
}

export default Tickets;
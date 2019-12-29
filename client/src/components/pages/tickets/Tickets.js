import React from 'react';

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
            <tr>
              <td>{this.state.tickets[0].type}</td>
              <td>{this.state.tickets[0].price}</td>
              <td>{this.state.tickets[0].amount}</td>
            </tr>
          </tbody>
        </table>
        <input type='submit' value='Choose your seats' />
      </div>
    );
  }
}

export default Tickets;
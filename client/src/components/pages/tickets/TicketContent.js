import React from 'react';
import './Ticket.scss';

class TicketContent extends React.Component {

constructor(props) {
  super(props);
  this.  state = {
    userName: 'example User',
    seats: [22],  
    movieTitle: 'example Movie',
    row: ['B'],
    hall: 'C',
    date: 'xx.xx.xxx',
    time: 'xx:xx'
}
}

componentDidMount() {
  this.setState({
    movieTitle: this.props.movieTitle,
    seats: this.props.seats,
    userName: this.props.userName,
    row: this.props.row,
    hall: this.props.hall,
    date: this.props.date,
    time: this.props.time
  })
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
                    <h2>{this.state.date}  {this.state.time}</h2>
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

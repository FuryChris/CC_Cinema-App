import React from 'react';
import './seats.css'
import { Link } from 'react-router-dom';

class Seats extends React.Component {

  constructor(props) {
    super(props);
    this.  state = {
      selectedTickets: [],
      timeid:'',
      time_movie:'',
      chosenSeats:[],
      seats:[{ id:1, isAvailable:true,row:1, reserved:false},{ id:2, isAvailable:true,row:1,reserved:false},{ id:3, isAvailable:true,row:1,reserved:false},{ id:4, isAvailable:true,row:1,reserved:false},{ id:5, isAvailable:true,row:1,reserved:false},{ id:6, isAvailable:true,row:1,reserved:false},{ id:7, isAvailable:true,row:1,reserved:false},{ id:8, isAvailable:true,row:1,reserved:false},{ id:9, isAvailable:true,row:1,reserved:false},{ id:10, isAvailable:true,row:1,reserved:false},{ id:11, isAvailable:false,row:2,reserved:false},{ id:12, isAvailable:false,row:2,reserved:false},{ id:13, isAvailable:true,row:2,reserved:false},{ id:14, isAvailable:true,row:2,reserved:false},{ id:15, isAvailable:true,row:2,reserved:false},{ id:16, isAvailable:true,row:2,reserved:false},{ id:17, isAvailable:true,row:2,reserved:false},{ id:18, isAvailable:true,row:2,reserved:false},{ id:19, isAvailable:true,row:2,reserved:false},{ id:20, isAvailable:true,row:2,reserved:false}]
  }
}
componentDidMount() {
  this.setState({
    selectedTickets: this.props.location.state.selectedTickets,
    timeId:this.props.location.state.timeId,
    time_movie: this.props.location.state.time_movie
  })
}

  handleClickButton=(e,seat)=>{
    const seatID=seat.id;
    const seatAvailable=seat.isAvailable;
    const seatReserved=seat.reserved;
let count=0;

this.state.seats.map(seat=>{
  if(seat.reserved==true)
  {
    count=count+1;

  }
})

let ticketAmount=0;
this.state.selectedTickets.map(ticket=>{
  ticketAmount+=parseInt(ticket.amount);
})
console.log(ticketAmount)

if(count<ticketAmount || seatReserved===true)
if(seatAvailable===true){
  this.setState(prevState => {
    const seats = prevState.seats.map(seat => {
      if (seat.id=== seatID) {
        return { ...seat, reserved:!seatReserved};
      } else {
        return seat;
      }
    });
    return { seats};
  });
  if(seatReserved===true){
    let tempSeat=[...this.state.chosenSeats];
    tempSeat.splice( tempSeat.indexOf(seatID), 1 );
    this.setState({chosenSeats:tempSeat})
  }
else{this.state.chosenSeats.push(seatID)}
   }
  }
  render() {
    return (
      <div className='Seats'>
        <h1>Choose your seats</h1>

        <div className="screen"> Screen </div>
<div className="seatsContainer" >

        {this.state.seats.map(seat=>{
            return(
            <button className="seat" style={{backgroundColor:seat.isAvailable?seat.reserved?"green":"grey":"rgb(228, 73, 17)"}}name={seat.id} onClick={(e)=>this.handleClickButton(e,seat)} key={seat.id}>{seat.id}</button>
            )
          })}
        </div>
        <div className="btnbuy">
          <Link to={{
						pathname: '/showticket',
						// state: {
						// 	movieId : movie.id,
						// 	hallNumber: movie.hall_number
						// }
					}}>
        <button className="buyTicket">Buy Ticket</button>
        </Link>
        </div>
        </div>
    
   
         
      //   <input type='submit' value='Payment' />
    
    );
  }
}

export default Seats;
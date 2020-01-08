import React from 'react';
import './seats.css'
class Seats extends React.Component {

  constructor(props) {
    super(props);
    this.  state = {
      selectedTickets: [],
      seats:[{ id:1, isAvailable:true,row:1, reserved:false},{ id:2, isAvailable:true,row:1,reserved:false},{ id:3, isAvailable:true,row:1,reserved:false},{ id:4, isAvailable:true,row:1,reserved:false},{ id:5, isAvailable:true,row:1,reserved:false},{ id:6, isAvailable:true,row:1,reserved:false},{ id:7, isAvailable:true,row:1,reserved:false},{ id:8, isAvailable:true,row:1,reserved:false},{ id:9, isAvailable:true,row:1,reserved:false},{ id:10, isAvailable:true,row:1,reserved:false},{ id:11, isAvailable:false,row:2,reserved:false},{ id:12, isAvailable:false,row:2,reserved:false},{ id:13, isAvailable:true,row:2,reserved:false},{ id:14, isAvailable:true,row:2,reserved:false},{ id:15, isAvailable:true,row:2,reserved:false},{ id:16, isAvailable:true,row:2,reserved:false},{ id:17, isAvailable:true,row:2,reserved:false},{ id:18, isAvailable:true,row:2,reserved:false},{ id:19, isAvailable:true,row:2,reserved:false},{ id:20, isAvailable:true,row:2,reserved:false}]
  }
}
componentDidMount() {
  this.setState({
    selectedTickets: this.props.selectedTickets
  })
}

  handleClickButton=(e,seat)=>{
   const nextseatID=seat.id-1;
    const seatID=seat.id;
    const seatAvailable=seat.isAvailable;
    const seatReserved=seat.reserved;
//     this.state.seats.map(seat=>{
//       if(seat.id===nextseatID){
//         console.log("1if")
//         if(seat.isAvailable){
//           console.log("2if")

//           this.state.seats.map(seat2=>{
//           if(seat2===nextseatID-1)
//           {
//             console.log("3if")
// console.log(nextseatID-1)
//             alert("nie mozesz")
//           }
          
//           })
//         }
//       }
//     })
let count=0;

this.state.seats.map(seat=>{
  if(seat.reserved==true)
  {
    count=count+1;

  }
})


console.log(this.props.location.state.selectedTickets.length)
console.log(count)
console.log(count)
if(count<this.props.location.state.selectedTickets.length || seatReserved===true)
if(seatAvailable===true){
  this.setState(prevState => {
    const seats = prevState.seats.map(seat => {
      if (seat.id=== seatID) {
        return { ...seat, reserved:!seatReserved};
      } else {
        return seat;
      }
    });
    return { seats };
  });
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
     
           {/* {this.state.secondRow.map(seat=>{
            return(
            <button key={seat.id}>{seat.id}</button>
            )
          })} */}
      
        </div>
        </div>
    
   
         
      //   <input type='submit' value='Payment' />
    
    );
  }
}

export default Seats;
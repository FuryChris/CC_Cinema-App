import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import subDays from "date-fns/subDays";
import addDays from "date-fns/addDays";
import './dateMovie.css'

class DateMovie extends React.Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
 
  render() {
    return (
      <div className="datepicker">
        <p><span className="label">Date: </span></p>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={this.state.startDate}
        onChange={this.handleChange}
        minDate={subDays(new Date(), 0)}
        maxDate={addDays(new Date(), 7)}
        placeholderText="Select a date after 5 days ago"
      />
      </div>
    );
  }
}

export default DateMovie;
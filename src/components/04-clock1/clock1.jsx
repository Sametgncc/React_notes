import React from "react";
import "../../assets/sass/clock.scss"
import moment from "moment";

const Clock1 = () => {
    const dateTime =moment();
    const timeStr = dateTime.format("HH:mm");
    const dateStr = dateTime.format("LL");
    const dayStr = dateTime.format("dddd");
    const hour = dateTime.format("H");

    let message = "";

    if(hour >=5 && hour<12){
        message = "Morning";
    }
    else if (hour >=11 && hour < 14){
        message = "Noon";

    }else if (hour> 12 && hour < 14){
        message = "Afternoon";
    }
    else if (hour >= 14 && hour < 18){
        message = "Evening";
    }
    else {
        message = "Night";
    }
    

  return (
    <div className="clock-container">
      <div className="time">{timeStr}</div>

      <div>
        <div className="date">{dateStr}</div>
        <div className="day">{dayStr} {message}</div>
      </div>
    </div>
  );
};

export default Clock1;

import { useState } from "react";
import { get_all_from_location } from '../api/queue'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Realtime = (props) => {
    
  const [lowerBound, setLowerBound] = useState(0);
  const [latestHour, setLatestHour] = useState(0);
  const [latestMinute, setLatestMinute] = useState(0);

  const update = () => {
    var latest = props.filterCurrData(props.rawData)
    setLatestHour(latest[3].getHours())
    setLatestMinute(latest[3].getMinutes())
    setLowerBound(latest[2])
  }

    return (
        <div class = "p-4" style = {{width:"390px"}}>
            <h4 class = "subtitle is-6" style = {{fontWeight:"800"}}>Real Time Queue</h4>
            <p>Latest Update at {latestHour} : {latestMinute}</p>
            <p>There were at least {lowerBound} people waiting in line.</p>
            <p>You need to wait approximately {lowerBound * 2} minutes.</p>
            <div class = "column is-two-thirds">
              <div class = "is-flex is-justify-content-center ">
                <button class = "button is-success"style = {{ background: "#F6CF57"}} onClick={update}>Refresh</button>
              </div>
            </div>
        </div>
    );
}


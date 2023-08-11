import { useEffect, useState } from 'react';
import { useNavigate, useParams, Outlet } from 'react-router-dom';
import axios from 'axios';
import { add_record, get_all_from_location } from '../api/queue';

export const HomePage = (props)=>{
    const checkpoint = useParams()
    console.log(checkpoint)

    const [count,setCount] = useState(checkpoint['checkpoint'] * 10)
    const navigate = useNavigate()
    function handle_submit(){
      let text;
      let user_netID = prompt("Thank you! Please enter your netID to record your contribution.", "ab123")
      add_record('MailCenter', user_netID, count)
    }
    const [data, setData] = useState(null); 
    useEffect(() => {
      if (!("checkpoint" in checkpoint)){
        setCount(0)
      }

    }, []);

    return (
      <div class="hero-body">
        <Outlet />
        <div class="container">
          <div class="columns is-multiline is-mobile is-centered">
  
            <center><div class = "column is-two-thirds">
              <span class = "title is-6">
                Where are you in the queue?
              </span>
            </div></center>
  
            <div class = "column is-two-thirds">
            <center><div class = "is-flex is-justify-content-center is-flex-direction-column">
              <div class = "field is-grouped is-flex is-justify-content-center">
                <p class = "control is-justify-content-center">
                <input
                class = "input "
                aria-label="data-input"
                value={count}
                style = {{width:"80px"}}
                onChange={(e) => setCount(e.target.value)}
                type="number"
                id="new_count"
                />
                  {/* <span class = "title ">{count}</span> */}
                </p>
                <p class = "control is-justify-content-center">
                  <img src = "https://cdn.dribbble.com/users/740477/screenshots/6549643/pikachurundrib.gif" width = "50px" height = "40px" />
                </p>
              </div>
                <span style={{fontSize:"1em"}}>people in front of me</span>
              </div></center>
              
            </div>
  
            <div class = "column is-two-thirds m-5 pt-6">
              <div class = "is-flex is-justify-content-center ">
                <div class = "field is-grouped">
                  <p class = "control">
                    <button class = "button is-success is-medium " style = {{ background: "#F6CF57"}} onClick={()=>setCount(parseInt(count)+1)}>+1</button>
                  </p>
                  <p class = "control">
                    <button class = "button is-success is-medium " style = {{ background: "#F6CF57"}} onClick={()=>setCount(count>0?parseInt(count)-1:0)}>-1</button>
                  </p>
                </div>
              </div>
            </div>
  
            <div class = "column is-two-thirds">
              <div class = "is-flex is-justify-content-center ">
                <button class = "button is-success is-large " style = {{ background: "#F6CF57"}} onClick={handle_submit}>Submit</button>
              </div>
            </div>
  
            
  
          </div>
        </div>
      </div>
    )
  }
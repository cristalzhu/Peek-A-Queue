import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
  Legend,
} from "recharts";

export const AnalysisPage = ()=>{
    const data = [
      {
        "name": "Mon",
        "bc": 30,
      },
      {
        "name": "Tue",
        "bc": 50,
      },
      {
        "name": "Wed",
        "bc": 60,
      },
      {
        "name": "Thu",
        "bc": 80,
      },
      {
        "name": "Fri",
        "bc": 100,
      },
      {
        "name": "Sat",
        "bc": 20,
      },
      {
        "name": "Sun",
        "bc": 10,
      }
    ]
  

    return (
  
      <div class="container">
        <div class="columns is-multiline is-mobile is-centered mt-6">
          <div class = "column is-full ml-6" style={{height:"300px",width:"500pxs"}}>
            <span class = "subtitle ml-6">Traffic By Day of Week</span>
            <div class ="mb-3"></div>
            <ResponsiveContainer width="80%" height="80%">
              <LineChart width="100%" height="100%" data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" style={{fontSize:"10px"}}/>
                <YAxis style={{fontSize:"10px"}}/>
                <Tooltip />
                <Legend style={{fontSize:"10px"}}/>
                <Line name = "Bryan Center Mailroom" type="monotone" dataKey="bc" stroke="#8884d8" />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
  
    )
  }
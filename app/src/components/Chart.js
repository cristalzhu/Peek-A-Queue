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

export const Chart = (props) => {
    return (
        <ResponsiveContainer width="80%" height="80%">
        <LineChart width="100%" height="100%" data={props.data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Hour" style={{fontSize:"10px"}}/>
            <YAxis style={{fontSize:"10px"}}/>
            <Tooltip />
            <Legend style={{fontSize:"10px"}}/>
            <Line name = "Bryan Center Mailroom" type="monotone" dataKey="QueueLength" stroke="#8884d8" />
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
        </ResponsiveContainer>
    );
}
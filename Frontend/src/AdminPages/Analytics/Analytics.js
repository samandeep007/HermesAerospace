import { useState, useEffect } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, ReferenceLine, Tooltip, Legend, BarChart, Bar, PieChart, Pie } from "recharts";

const Analytics = () => {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [timeRange, setTimeRange] = useState("week");
  const [chartType, setChartType] = useState("line");

  useEffect(() => {
    const fetchData = async () => {
        let startDate, endDate, endpoint, api;
        const now = new Date();
      
     
switch (timeRange) {
    case "hour":
        startDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);
        endDate = now;
        endpoint = "hourly-income-stats";
        api = "hourly-user-stats";
        break;
      
    case "day":
      startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      endDate = now;
      endpoint = "daily-income-stats";
      api = "daily-user-stats";
      break;
    case "week":
      startDate = new Date(now.getTime() - 4 * 7 * 24 * 60 * 60 * 1000);
      endDate = now;
      endpoint = "weekly-income-stats";
      api = "weekly-user-stats";
      break;
    case "month":
      startDate = new Date(now.getTime() - 12 * 30 * 24 * 60 * 60 * 1000);
      endDate = now;
      endpoint = "monthly-income-stats";
      api = "monthly-user-stats";
      break;
    case "year":
      startDate = new Date(now.getTime() - 5 * 365 * 24 * 60 * 60 * 1000);
      endDate = now;
      endpoint = "yearly-income-stats";
      api = "yearly-user-stats";
      break;
    default:
      startDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      endDate = now;
      endpoint = "hourly-income-stats";
      api = "hourly-user-stats";
      break;
  }
      
        try {
          const response = await axios.get(`http://localhost:5000/api/orders/${endpoint}?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`);
          setData(response.data);

          const response2 = await axios.get(`http://localhost:5000/api/users/${api}?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`);
          setUserData(response2.data);
        } catch (error) {
          console.error(error);
        }
      };
      

    fetchData();
  }, [timeRange]);

  const handleTimeRangeChange = (event) => {
    setTimeRange(event.target.value);
  };

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };

  let chart;
  let chart2;
  let chart3;
  if (chartType === "line") {
    chart = (
    
        // your component
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <XAxis dataKey="_id" stroke="#fff" />
            <YAxis stroke="#fff" />
            <CartesianGrid stroke="white" strokeDasharray="5 5" />
            <Tooltip contentStyle={{ backgroundColor: "#333", border: "none", borderRadius: "5px", color: "#fff" }} />
            <Line type="monotone" dataKey="total" stroke="#48bb78" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
        
  
    );

    chart2 = (
    
        // your component
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <XAxis dataKey="_id" stroke="#fff" />
            <YAxis stroke="#fff" />
            <CartesianGrid stroke="white" strokeDasharray="5 5" />
            <Tooltip contentStyle={{ backgroundColor: "#333", border: "none", borderRadius: "5px", color: "#fff" }} />
            <Line type="monotone" dataKey="orders" stroke="#48bb78" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
        
  
    );

    chart3 = (
    
        // your component
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={userData}>
            <XAxis dataKey="_id" stroke="#fff" />
            <YAxis stroke="#fff" />
            <CartesianGrid stroke="white" strokeDasharray="5 5" />
            <Tooltip contentStyle={{ backgroundColor: "#333", border: "none", borderRadius: "5px", color: "#fff" }} />
            <Line type="monotone"  dataKey="users" stroke="#48bb78" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
        
  
    );

  } else if (chartType === "bar") {
    chart = (
        <ResponsiveContainer width="100%" height={350}>
        <BarChart  data={data}>
        <XAxis dataKey="_id" stroke="#fff" />
        <YAxis stroke="#fff" />
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <Tooltip contentStyle={{ backgroundColor: "#333", border: "none", borderRadius: "5px", color: "#fff" }} />
        <Bar dataKey="total" fill="#48bb78" barSize={40}  />
        <ReferenceLine y={0} stroke="#fff" />
      </BarChart>
      </ResponsiveContainer>
      
    );

    chart2 = (
        <ResponsiveContainer width="100%" height={350}>
        <BarChart  data={data}>
        <XAxis dataKey="_id" stroke="#fff" />
        <YAxis stroke="#fff" />
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <Tooltip contentStyle={{ backgroundColor: "#333", border: "none", borderRadius: "5px", color: "#fff" }} />
        <Bar dataKey="orders" fill="#48bb78" barSize={40}  />
        <ReferenceLine y={0} stroke="#fff" />
      </BarChart>
      </ResponsiveContainer>
      
    );

    chart3 = (
        <ResponsiveContainer width="100%" height={350}>
        <BarChart  data={userData}>
        <XAxis dataKey="_id" stroke="#fff" />
        <YAxis stroke="#fff" />
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <Tooltip contentStyle={{ backgroundColor: "#333", border: "none", borderRadius: "5px", color: "#fff" }} />
        <Bar  dataKey="users" fill="#48bb78" barSize={40}  />
        <ReferenceLine y={0} stroke="#fff" />
      </BarChart>
      </ResponsiveContainer>
      
    );


  } else if (chartType
=== "pie") {
chart = (
    <ResponsiveContainer width="100%" height={350}>
<PieChart>
  <Pie
    data={data}
    dataKey="total"
    nameKey="_id"
    cx="50%"
    cy="50%"
    outerRadius={120}
    innerRadius={60}
    fill="#48bb78"
    label={(entry) => `${entry.name}: ${entry.value}`}
    labelLine={false}
    startAngle={0}
    endAngle={360}
    paddingAngle={2}

  >
    {data.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#48bb78" : "#50c4ee"} />
    ))}
  </Pie>
  <Tooltip contentStyle={{ backgroundColor: "white", border: "none", borderRadius: "5px", color: "#fff" }} />
  <Legend iconType="circle" wrapperStyle={{ color: "#fff" }} />
</PieChart>
</ResponsiveContainer>

);


chart2 = (
    <ResponsiveContainer width="100%" height={350}>
<PieChart>
  <Pie
    data={data}
    dataKey="orders"
    nameKey="_id"
    cx="50%"
    cy="50%"
    outerRadius={120}
    innerRadius={60}
    fill="#48bb78"
    label={(entry) => `${entry.name}: ${entry.value}`}
    labelLine={false}
    startAngle={0}
    endAngle={360}
    paddingAngle={2}

  >
    {data.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#48bb78" : "#50c4ee"} />
    ))}
  </Pie>
  <Tooltip contentStyle={{ backgroundColor: "white", border: "none", borderRadius: "5px", color: "#fff" }} />
  <Legend iconType="circle" wrapperStyle={{ color: "#fff" }} />
</PieChart>
</ResponsiveContainer>

);


chart3 = (
    <ResponsiveContainer width="100%" height={350}>
<PieChart>
  <Pie
    data={userData}
    dataKey="users"
    nameKey="_id"
    cx="50%"
    cy="50%"
    outerRadius={120}
    innerRadius={60}
    fill="#48bb78"
    label={(entry) => `${entry.name}: ${entry.value}`}
    labelLine={false}
    startAngle={0}
    endAngle={360}
    paddingAngle={2}

  >
    {data.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#48bb78" : "#50c4ee"} />
    ))}
  </Pie>
  <Tooltip contentStyle={{ backgroundColor: "white", border: "none", borderRadius: "5px", color: "#fff" }} />
  <Legend iconType="circle" wrapperStyle={{ color: "#fff" }} />
</PieChart>
</ResponsiveContainer>

);


}

return (
    <>
    <div style={{display: "block", width: "100%"}}>
    <div style={{ display: "flex", flexWrap: "wrap", width: "100%"}}>
<div style={{ background: "black", width: "49%", margin: "0 auto", marginTop: "10px",  height: "470px", overflowX: "auto"}} className="rounded-lg shadow-lg p-6">
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-white text-lg ">Income Statistics</h1>
    <div className="flex">
      <select className="time-range bg-gray-900 text-white mr-4" value={timeRange} onChange={handleTimeRangeChange}>
        <option value="hour">24 hours</option>
        <option value="day">7 days</option>
        <option value="week">4 weeks</option>
        <option value="month">12 Months</option>
        <option value="year">5 years</option>
      </select>
      <select className="chart-type bg-gray-900 text-white" value={chartType} onChange={handleChartTypeChange}>
        <option value="line">Line Chart</option>
        <option value="bar">Bar Chart</option>
        <option value="pie">Pie Chart</option>
      </select>
    </div>
  </div>
  <div className="chart-container">
    {chart}
  </div>
</div>
<div style={{ background: "black", width: "49%", margin: "0 auto", marginTop: "10px",  height: "470px", overflowX: "auto"}} className="rounded-lg shadow-lg p-6">
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-white text-lg">Orders Statistics</h1>
    <div className="flex">
      <select className="time-range bg-gray-900 text-white mr-4" value={timeRange} onChange={handleTimeRangeChange}>
        <option value="hour">24 hours</option>
        <option value="day">7 days</option>
        <option value="week">4 weeks</option>
        <option value="month">12 Months</option>
        <option value="year">5 years</option>
      </select>
      <select className="chart-type bg-gray-900 text-white" value={chartType} onChange={handleChartTypeChange}>
        <option value="line">Line Chart</option>
        <option value="bar">Bar Chart</option>
        <option value="pie">Pie Chart</option>
      </select>
    </div>
  </div>
  <div className="chart-container">
    {chart2}
  </div>
</div>
</div>
<div style={{display: "block"}}>
<div style={{ background: "black", width: "99%", margin: "0 auto", marginTop: "15px", height: "470px", overflowX: "auto"}} className="rounded-lg shadow-lg p-6">
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-white text-lg">User Statistics</h1>
    <div className="flex">
      <select className="time-range bg-gray-900 text-white mr-4" value={timeRange} onChange={handleTimeRangeChange}>
        <option value="hour">24 hours</option>
        <option value="day">7 days</option>
        <option value="week">4 weeks</option>
        <option value="month">12 Months</option>
        <option value="year">5 years</option>
      </select>
      <select className="chart-type bg-gray-900 text-white" value={chartType} onChange={handleChartTypeChange}>
        <option value="line">Line Chart</option>
        <option value="bar">Bar Chart</option>
        <option value="pie">Pie Chart</option>
      </select>
    </div>
  </div>
  <div className="chart-container">
    {chart3}
  </div>
</div>
</div>
</div>
</>

);
};

export default Analytics;
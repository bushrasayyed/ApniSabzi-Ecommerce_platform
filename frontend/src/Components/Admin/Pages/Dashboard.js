import React from 'react'
// import {
//     DollarCircleOutlined,
//     ShoppingCartOutlined,
//     ShoppingOutlined,
//     UserOutlined,
//   } from "@ant-design/icons";
//   import { Card, Space, Statistic, Table, Typography } from "antd";
  import { Card} from "antd";
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const Dashboard = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Revenue',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };
      
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
          title: {
            display: true,
            text: "Order Revenue",
          },
        },
      };
  return (
    <>
  
    <div>
       <Card style={{ width: 500, height: 250 }}>
      {/* <Bar options={options} data={reveneuData} /> */}
      <Bar options={options} data={data}/>
    </Card>
    </div>
    
    </>
  )
}

export default Dashboard

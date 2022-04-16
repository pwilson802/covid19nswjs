import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Box from "@mui/material/Box";
import "chartjs-adapter-date-fns";
import { useEffect, useState } from "react";
import { setDate } from "date-fns";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

function makeData(data, startDate, endDate) {
  const dates = Array.from(
    new Set(data.map((item) => item.notification_date.getTime()))
  );
  const newData = dates.map((item) => {
    // let date = item;
    let count = data
      .filter((i) => i.notification_date.getTime() == item)
      .map((item) => item.confirmed_cases_count)
      .reduce((acc, curr) => {
        return acc + Number(curr);
      }, 0);
    return {
      x: item,
      y: count,
    };
  });
  return {
    label: "All Cases",
    backgroundColor: "#DB7F74",
    borderColor: "#4C6570",
    data: newData,
  };
}

function makeFirstDates(data) {
  return data[0];
}

function Charts({ data }) {
  const [endDate] = useState(data[0].notification_date.getTime());
  const [startDate] = useState(data[30].notification_date.getTime());
  const [loaded, setLoaded] = useState(false);

  const chartData = makeData(data, endDate, startDate);
  // console.log(chartData);
  return (
    <Box sx={{ margin: "0 30%" }}>
      <Bar
        data={{
          datasets: [chartData],
        }}
        options={{
          scales: {
            x: {
              type: "time",
              time: {
                unit: "day",
                tooltipFormat: "MMM d yy",
              },
            },
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </Box>
  );
}

export default Charts;

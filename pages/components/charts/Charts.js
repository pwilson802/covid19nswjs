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
import Slider from "@mui/material/Slider";

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
  ).filter((item) => item <= startDate && item >= endDate);
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

function Charts({ data }) {
  const [value, setValue] = useState([
    data[0].notification_date.getTime() || 0,
    data[90].notification_date.getTime() || 0,
  ]);
  // const [loaded, setLoaded] = useState(false);
  //const [marks, setMarks] = useState([]);

  const handleChange = (event, newValue) => {
    console.log("newValue", newValue);
    setValue([newValue[1], newValue[0]]);
  };

  function valuetext(value) {
    return new Date(value).toLocaleDateString();
  }

  const chartData = makeData(data, value[0], value[1]);
  return (
    <div>
      <Box
        sx={{
          margin: "0 5%",
          "@media(min-width: 768px)": {
            margin: "0 10%",
          },
        }}
      >
        <div style={{ height: "250px" }}>
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
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
        <Slider
          onChange={handleChange}
          value={value}
          step={86400000}
          valueLabelDisplay="auto"
          valueLabelFormat={valuetext}
          // getAriaLabel={valuetext}
          max={data[0].notification_date.getTime()}
          min={data[data.length - 1].notification_date.getTime()}
        />
      </Box>
    </div>
  );
}

export default Charts;

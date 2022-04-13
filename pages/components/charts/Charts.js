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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

// export const fakeData = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# Cases",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: ["rgba(255, 99, 132, 0.2)"],
//       borderColor: ["rgba(255, 99, 132, 1)"],
//       borderWidth: 1,
//     },
//   ],
// };

function makeData(data) {
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

function Charts({ data }) {
  const chartData = makeData(data);
  console.log(chartData);
  return (
    <Box sx={{ margin: "0 20%" }}>
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

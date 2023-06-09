import { useEffect, useState } from "react";
import { getRevenueData } from "../../Data";
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

const Chart = () => {
  const [revenueData, setRevenueData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getRevenueData().then((res) => {
      let labels = res.carts.map((value) => {
        return `User-${value.userId}`;
      });

      let datas = res.carts.map((value) => {
        return value.discountedTotal;
      });

      const data = {
        labels,
        datasets: [
          {
            label: "Revenue",
            data: datas,
            backgroundColor: "red",
          },
        ],
      };
      setRevenueData(data);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Order Revenue",
      },
    },
  };

  return (
    <div className="chartshow">
      <Bar options={options} data={revenueData} style={{ width: 400 }} />
    </div>
  );
};

export default Chart;

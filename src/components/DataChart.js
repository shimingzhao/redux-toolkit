import React, { useEffect } from "react";
import { dataSelector, fetchData } from "../slices/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { Bar } from 'react-chartjs-2';

const DataChart = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(dataSelector);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  let lables = [];

  const ne = [];
  const ns = [];
  const nw = [];
  const nrl = [];
  const nlr = [];

  const plot = data.plot;
  if (plot) {
    lables = plot.x;
  };

  for (const key in data.data) {
    const item = data.data[key];
    const templeteItem = { ne: 0, ns: 0, nw: 0, nrl: 0, nlr: 0 };
    const resultItem = { ...templeteItem, ...item };

    for (const yKey in resultItem) {
      const yValue = resultItem[yKey];

      switch (yKey) {
        case "ne":
          ne.push(yValue);
          break;
        case "ns":
          ns.push(yValue);
          break;
        case "nw":
          nw.push(yValue);
          break;
        case "nrl":
          nrl.push(yValue);
          break;
        case "nlr":
          nlr.push(yValue);
          break;
        default:
          break;
      }
    }
  };

  const groupedBarData = {
    labels: lables,
    datasets: [
      {
        label: "ne",
        data: ne,
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "ns",
        data: ns,
        backgroundColor: "rgb(54, 162, 235)",
      },
      {
        label: "nw",
        data: nw,
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "nrl",
        data: nrl,
        backgroundColor: "rgb(32, 255, 192)",
      },
      {
        label: "nlr",
        data: nlr,
        backgroundColor: "rgb(111, 192, 35)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return <Bar data={groupedBarData} options={options} height={55} />;
};

export default DataChart;
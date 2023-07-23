import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { H6 } from "./Heading";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const desktopLabels = [
  "20",
  "",
  "25",
  "",
  "30",
  "",
  "35",
  "",
  "40",
  "",
  "60",
  "",
  "65",
];

const options = {
  plugins: {
    title: {
      display: true,
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export default function BarChart() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isDesktop = windowWidth >= 768;

  const mobileLabels = ["20", "25", "30", "35", "40", "60", "65"];

  const dataset1Data = [25, 30, 35, 40, 55, 60, 65, 70, 75, 80, 85, 90, 100];
  const dataset2Data = [25, 30, 35, 40, 55, 60, 65, 70, 75, 80, 85, 90, 100];
  const dataset3Data = [25, 30, 35, 40, 55, 60, 65, 70, 75, 80, 85, 90, 100];

  const dataset4Data = [35, 55, 65, 75, 85, 90, 100];
  const dataset5Data = [35, 55, 65, 75, 85, 90, 100];
  const dataset6Data = [35, 55, 65, 75, 85, 90, 100];
  const data = {
    datasets: [
      {
        label: "Employer: K 73,500",
        data: isDesktop ? dataset1Data : dataset4Data,
        backgroundColor: "#0800a3",
      },
      {
        label: "Employee: K 53,500",
        data: isDesktop ? dataset2Data : dataset5Data,

        backgroundColor: "#4935ff",
      },
      {
        label: "Total Interest: K 244,313",
        data: isDesktop ? dataset3Data : dataset6Data,

        backgroundColor: "#85afff",
      },
    ],
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <H6 className="py-1 pt-4">Contributions Overtime</H6>
      <Bar
        options={options}
        data={{ ...data, labels: isDesktop ? desktopLabels : mobileLabels }}
        height="180px"
      />
    </>
  );
}

ChartJS.register(ArcElement, Tooltip, Legend);

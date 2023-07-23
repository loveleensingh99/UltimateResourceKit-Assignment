import { Bar } from "react-chartjs-2";
import { H2, H3, H6, H1, H4, H5 } from "./Heading";
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
import { VictoryPie } from "victory";
import { useEffect, useState } from "react";

export const Goal = () => (
  <>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 py-2 place-content-center">
      <div className="py-1 col-span-2 md:col-span-1">
        <H4 className="font-bold">$300,000</H4>
        <H6 className="!text-sm  text-gray-400">My Goal</H6>
        <hr className="border border-primary my-1.5 w-full" />
      </div>
      <div className="py-1">
        <H4 className="font-bold">59%</H4>
        <H6 className="!text-sm  text-gray-400">Goal Achieved</H6>
        <hr className="border border-primary my-1.5 w-full" />
      </div>
      <div className="py-1">
        <H4 className="font-bold">K 300</H4>
        <H6 className="!text-sm  text-gray-400">Est. Income</H6>
        <hr className="border border-primary my-1.5 w-full" />
      </div>
    </div>
  </>
);
export const data1 = {
  labels: [],
  datasets: [
    {
      label: "# of Votes",
      data: [78, 22],
      backgroundColor: ["#2ed6ae", "#d9f8f0"],

      borderWidth: 1,
    },
  ],
};

export const circleChartData1 = [
  {
    y: 10,
  },
  {
    y: 2,
  },
];

export const circleChartData2 = [
  {
    y: 30,
  },
  {
    y: 3,
  },
];

export const circleChartData3 = [
  {
    y: 40,
  },
  {
    y: 19,
  },
];
export const CircleChart = () => (
  <>
    <H6 className="py-1">How do I compare to my peers?</H6>
    <H6 className="!text-xs  text-gray-400">
      These numbers represent current goal achievement
    </H6>
    <div className="flex py-2 items-center flex-col md:flex-row">
      <div className="space-y-2 md:pr-4 py-2 mr-auto w-full md:w-auto my-2 md:my-0">
        <div className="">
          <H6 className="!text-sm  text-gray-600">
            Age: <span className="text-gray-500">Under 30</span>
          </H6>
          <hr className="w-auto my-1"></hr>
        </div>

        <div className="">
          <H6 className="!text-sm  text-gray-600">
            Salary: <span className="text-gray-500">K 20-K 30</span>
          </H6>
          <hr className="w-auto my-1"></hr>
        </div>

        <div className="">
          <H6 className="!text-sm  text-gray-600">
            Gender: <span className="text-gray-500">Male</span>
          </H6>
          <hr className="w-auto my-1"></hr>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 h-full">
        <CircleChartMain
          data={circleChartData1}
          text={"78"}
          title={"Average"}
        />
        <CircleChartMain data={circleChartData2} text={"95"} title={"Top"} />
        <CircleChartMain data={circleChartData3} text={"59"} title={"Me"} />
      </div>
    </div>
  </>
);
export const CircleChartMain = ({ data, text, title }) => (
  <>
    <div className="relative">
      <div
        style={{
          position: "relative",
          borderRadius: "50%",
          overflow: "hidden",
          height: "80px",
          width: "80px",
        }}
      >
        <VictoryPie
          data={data}
          innerRadius={160}
          padAngle={0}
          colorScale={["#2ed6ae", "#d9f8f0"]}
          labels={() => null}
          style={{
            data: {
              filter: "drop-shadow(0px -5px 20px rgba(0, 0, 0, 0.12))",
            },
          }}
          radius={({ datum }) => 150 + datum.y * 50}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="flex flex-col text-center">
          <H4 className="text-secondary-gray-13">
            {text}
            <span className="absolute -top-0.5 -right-3 text-sm">%</span>
          </H4>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "-30px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          fontSize: "12px",
          color: "#6b7280",
        }}
      >
        {title}
      </div>
    </div>
  </>
);

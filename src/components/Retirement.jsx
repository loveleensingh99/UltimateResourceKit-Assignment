import React from "react";
import { H2, H3, H6, H1, H4, H5 } from "./Heading";
import { CircleChart, Contributions, Goal } from "./RetirementSubComponents";
import BarChart from "./BarChart";

export default function Retirement() {
  return (
    <>
      <div className=" col-span-3 px-6 p-12  md:py-12 md:px-20 bg-white ">
        <div className="space-y-3">
          <div className="py-1">
            <H6 className=" text-primary">Retirement Income</H6>
            <H4 className="">Starting Year 2056</H4>
          </div>
        </div>
        <Goal />

        <BarChart />
        <CircleChart />
      </div>
    </>
  );
}

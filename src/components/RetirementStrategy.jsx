import { AiOutlineRight } from "react-icons/ai";
import React from "react";
import { H2, H3, H6, H1, H4, H5 } from "./Heading";
import { Button, Slider } from "@material-tailwind/react";

export default function RetirementStrategy() {
  return (
    <>
      <div className=" relative col-span-2    md:p-12 bg-white w-full ">
        <div className="bg-gray-50 p-6 rounded-md md:rounded-md rounded-tr-[50px] rounded-tl-[50px]">
          <H6 className="py-1 mb-2">Retirement Strategy</H6>

          <div className="w-auto space-y-2">
            <H6 className="!text-sm  text-gray-600 py-1">
              Employee Contribution
            </H6>
            <div className="flex  items-center justify-center ">
              <Slider defaultValue={50} barClassName="  bg-[#85afff]" />
              <H6 className="!text-sm pt-3  text-gray-600">12%</H6>
            </div>

            <H6 className="!text-sm  text-gray-600 py-1">Retirement Age</H6>

            <div className="flex  items-center justify-center">
              <Slider defaultValue={50} barClassName="  bg-[#85afff]" />
              <H6 className="!text-sm pt-3 text-gray-600">12%</H6>
            </div>

            <hr></hr>

            <div className="flex justify-between">
              <H6 className="!text-sm pt-3 text-gray-600">
                Employer Contribution
              </H6>
              <H6 className="!text-sm pt-3 text-gray-600">8.4%</H6>
            </div>

            <div className="flex justify-between pb-16 md:pb-0">
              <H6 className="!text-sm pt-3 text-gray-600 ">Interest Rate</H6>
              <H6 className="!text-sm pt-3 text-gray-600 ">5%</H6>
            </div>

            <div className="">
              <Button className="hidden md:flex bg-primary w-full text-white px-5 py-1.5 my-3 justify-center">
                Update{" "}
              </Button>
              <H6 className="hidden md:flex !text-sm pt-3 text-primary  items-center justify-center">
                Veiw Help Docs
                <AiOutlineRight />
              </H6>
            </div>
          </div>
          <Button className="absolute z-40 bottom-0  left-0 flex md:hidden bg-primary w-full text-white px-5 py-[20px]   text-center rounded-t-none justify-center">
            Update
          </Button>
        </div>

        <div className="border-l border-primary pl-3 my-5 space-y-2 hidden md:block">
          <H6 className="!text-sm  text-gray-600  first-letter:">
            Are you considering a
          </H6>

          <H6 className="!text-sm  text-gray-600   font-semibold">
            Housing Advance?
          </H6>
          <H6 className="!text-sm  text-primary flex items-center justify-start">
            Learn More
            <AiOutlineRight />
          </H6>
        </div>
      </div>
    </>
  );
}

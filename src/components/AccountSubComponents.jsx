import { Button } from "@material-tailwind/react";
import { H2, H3, H6, H1, H4, H5 } from "./Heading";
import { TransactionsData } from "../Data/data";

export const ProfileImgName = () => (
  <div className="flex ">
    <img
      src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
      className="w-16 rounded-full shadow-lg"
      alt="Profile"
    ></img>

    <div className="flex  pl-3 justify-center flex-col">
      <H3 className="!text-xl">Hi Mike,</H3>
      <H6 className="!text-sm">welcome back</H6>
    </div>
  </div>
);

export const Balance = () => (
  <>
    <div className="flex space-y-2 flex-col bg-gray-50  p-6 md:p-0 rounded-lg md:rounded-none mt-5 md:mt-0">
      <H6 className="py-1">Today</H6>
      <div className="py-1">
        <H3 className="font-bold">$19,892</H3>
        <H6 className="!text-sm  text-gray-400">Account Balance</H6>
      </div>

      <div className="py-1">
        <H5>$4,000</H5>
        <H6 className="!text-sm  text-gray-400">Year-to-Date Contributions</H6>
      </div>

      <div className="py-1">
        <H5>$1,892</H5>
        <H6 className="!text-sm  text-gray-400">Total Interest</H6>
      </div>

      <div className="">
        <Button className="bg-primary text-white px-5 py-1.5 w-full md:w-fit">I want to</Button>
      </div>
    </div>
  </>
);

export const Transactions = () => (
  <>
    <div className=" bg-gray-50  p-6 md:p-0 rounded-lg md:rounded-none mt-5 md:mt-0 ">
      <div className="flex space-y-2 flex-col">
        <H6 className="py-1">Recent Transactions</H6>

        {TransactionsData.map(({ date }) => (
          <>
            <div className="py-1">
              <H6 className="!text-sm  text-gray-400">{date}</H6>
              <H6 className="!text-sm  text-gray-600">
                Withdrawl Transfer to Bank-XXX11
              </H6>
            </div>
            <hr className="w-auto"></hr>
          </>
        ))}
      </div>
    </div>
  </>
);

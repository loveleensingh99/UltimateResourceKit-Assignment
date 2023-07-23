import React from "react";
import {
  Balance,
  Profile,
  ProfileImgName,
  Transactions,
} from "./AccountSubComponents";
import { AiOutlineBell } from "react-icons/ai";

export default function AccountDetail() {
  return (
    <>
      <AiOutlineBell
        size={35}
        className="top-6 right-6 absolute flex md:hidden items-center justify-center p-2 text-gray-500"
      />
      <div className=" sm:ml-16  md:col-span-2 px-6 p-12 md:p-12 bg-white md:bg-gray-50 ">
        <ProfileImgName />
        <Balance />
        <Transactions />
      </div>
    </>
  );
}

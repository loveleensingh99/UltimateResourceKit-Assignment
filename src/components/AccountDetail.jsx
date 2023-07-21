import React from "react";
import {
  Balance,
  Profile,
  ProfileImgName,
  Transactions,
} from "./AccountSubComponents";

export default function AccountDetail() {
  return (
    <>
      <div className="sm:ml-16 col-span-2 p-12 bg-gray-50 ">
        <ProfileImgName />
        <Balance />
        <Transactions />
      </div>
    </>
  );
}

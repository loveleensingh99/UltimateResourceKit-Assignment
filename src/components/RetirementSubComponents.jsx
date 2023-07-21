import { H2, H3, H6, H1, H4, H5 } from "./Heading";

export const Goal = () => (
  <>
    <div className="grid grid-cols-3 gap-3 py-2">
      <div className="py-1">
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
        <H4 className="font-bold">$300</H4>
        <H6 className="!text-sm  text-gray-400">Monthly Income</H6>
        <hr className="border border-primary my-1.5 w-full" />
      </div>
    </div>
  </>
);


export const ContributionsOvertime=()=>(



)
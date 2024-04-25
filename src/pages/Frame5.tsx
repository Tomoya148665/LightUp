import { FunctionComponent } from "react";
import Sidebar from "../components/Sidebar";
import UsageStatus from "../components/UsageStatus";

const Frame5: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-200 h-[764px] overflow-hidden flex flex-row items-start justify-start">
      <Sidebar
        image1="/image-1@2x.png"
        menu="/menu@2x.png"
        walletpassfill="/walletpassfill.svg"
      />
      <UsageStatus />
    </div>
  );
};

export default Frame5;

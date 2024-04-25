import { FunctionComponent } from "react";
import Sidebar from "../components/Sidebar";
import Inquiry from "../components/Inquiry";

const Frame6: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white h-[764px] overflow-hidden flex flex-row items-start justify-start">
      <Sidebar
        image1="/image-1@2x.png"
        menu="/menu@2x.png"
        walletpassfill="/walletpassfill.svg"
      />
      <Inquiry />
    </div>
  );
};

export default Frame6;

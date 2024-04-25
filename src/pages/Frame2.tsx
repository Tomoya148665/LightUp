import { FunctionComponent } from "react";
import Sidebar from "../components/Sidebar";
import CoachResignation from "../components/CoachResignation";

const Frame2: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[764px] overflow-hidden flex flex-row items-start justify-start">
      <Sidebar
        image1="/image-1@2x.png"
        menu="/menu@2x.png"
        walletpassfill="/walletpassfill.svg"
      />
      <CoachResignation />
    </div>
  );
};

export default Frame2;

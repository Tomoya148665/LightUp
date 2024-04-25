import { FunctionComponent } from "react";
import Sidebar from "../components/Sidebar";
import SignUp from "../components/SignUp";

const Frame3: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start">
      <Sidebar
        image1="/image-1@2x.png"
        menu="/menu@2x.png"
        walletpassfill="/walletpassfill.svg"
      />
      <SignUp />
    </div>
  );
};

export default Frame3;

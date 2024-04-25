import { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import MentorResignation from "../components/MentorResignation";
import CoachResignation from "../components/CoachResignation";
import DashBoard from "../components/DashBoard";
import UsageStatus from "../components/UsageStatus";
import Inquiry from "../components/Inquiry";

const Frame: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start">
      <Sidebar
        image1="/image-1@2x.png"
        menu="/menu@2x.png"
        walletpassfill="/walletpassfill.svg"
      />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mentor-resignation" element={<MentorResignation />} />
        <Route path="/coach-resignation" element={<CoachResignation />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/usage-status" element={<UsageStatus />} />
        <Route path="/inquiry" element={<Inquiry />} />
      </Routes>
    </div>
  );
};

export default Frame;

import { FunctionComponent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type SidebarType = {
  image1?: string;
  menu?: string;
  walletpassfill?: string;
};

const Sidebar: FunctionComponent<SidebarType> = ({
  image1,
  menu,
  walletpassfill,
}) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const navigate = useNavigate();
  const handleSignin = () => {
    navigate("/signin");
  };
  const handleDashboard = () => {
    navigate("/dashboard");
  };
  const handleMentorResignation = () => {
    navigate("/mentor-resignation");
  };
  const handleCoachResignation = () => {
    navigate("/coach-resignation");
  };
  const handleUsageStatus = () => {
    navigate("/usage-status");
  };
  const handleInquiry = () => {
    navigate("/inquiry");
  };

  return (
    <div className="box-border self-stretch bg-black flex flex-col items-center justify-start p-8 gap-4 h-screen text-left text-base text-white font-libre-franklin">
      <img className="relative h-10 object-cover" alt="" src={image1} />
      <div className="w-[225.5px] flex flex-col items-center justify-start">
        <div className="relative font-semibold">伊藤　だいち</div>
        <div className="relative text-sm font-medium text-light-border-grey text-center">
          hello@uladluch.com
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-2">
        <div
          className={`${
            isActive("/signin")
              ? "bg-darkslategray-100 rounded-3xl "
              : "bg-transparent"
          } self-stretch flex flex-row items-center justify-start px-4 py-3 gap-[19px]`}
        >
          <button
            onClick={handleSignin}
            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch w-7 h-8 relative bg-[url('/public/menu@2x.png')] bg-cover bg-no-repeat bg-[top]"
          />
          <button
            onClick={handleSignin}
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[23px] font-semibold font-libre-franklin text-lavender text-left inline-block"
          >
            サインイン
          </button>
        </div>
        <div
          className={`${
            isActive("/dashboard")
              ? "bg-darkslategray-100 rounded-3xl"
              : "bg-transparent"
          } self-stretch flex flex-row items-center justify-start px-4 py-3 gap-[19px]`}
        >
          <button
            onClick={handleDashboard}
            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch w-7 h-8 relative bg-[url('/public/control-panel@3x.png')] bg-cover bg-no-repeat bg-[top]"
          />
          <button
            onClick={handleDashboard}
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[23px] font-semibold font-libre-franklin text-lavender text-left inline-block"
          >
            ダッシュボード
          </button>
        </div>
        <div
          className={`${
            isActive("/mentor-resignation")
              ? "bg-darkslategray-100 rounded-3xl "
              : "bg-transparent"
          } self-stretch flex flex-row items-center justify-start px-4 py-3 gap-[19px]`}
        >
          {" "}
          <button
            onClick={handleMentorResignation}
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-7 relative h-8 bg-[url('/public/teacher@3x.png')] bg-cover bg-no-repeat bg-[top]"
          />
          <button
            onClick={handleMentorResignation}
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[23px] font-semibold font-libre-franklin text-lavender text-left inline-block"
          >
            メンター登録
          </button>
        </div>
        <div
          className={`${
            isActive("/coach-resignation")
              ? "bg-darkslategray-100 rounded-3xl "
              : "bg-transparent"
          } self-stretch flex flex-row items-center justify-start px-4 py-3 gap-[19px]`}
        >
          {" "}
          <button
            onClick={handleCoachResignation}
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-7 relative h-8 bg-[url('/public/personal-trainer@3x.png')] bg-cover bg-no-repeat bg-[top]"
          />
          <button
            onClick={handleCoachResignation}
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[23px] font-semibold font-libre-franklin text-lavender text-left inline-block"
          >
            コーチ登録
          </button>
        </div>
        <div
          className={`${
            isActive("/usage-status")
              ? "bg-darkslategray-100 rounded-3xl "
              : "bg-transparent"
          } self-stretch flex flex-row items-center justify-start px-4 py-3 gap-[19px]`}
        >
          {" "}
          <button
            onClick={handleUsageStatus}
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-7 relative h-8 bg-[url('/public/control-panel@3x.png')] bg-cover bg-no-repeat bg-[top]"
          />
          <button
            onClick={handleUsageStatus}
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[23px] font-semibold font-libre-franklin text-lavender text-left inline-block"
          >
            利用状況確認
          </button>
        </div>
        <div
          className={`${
            isActive("/inquiry")
              ? "bg-darkslategray-100 rounded-3xl "
              : "bg-transparent"
          } self-stretch flex flex-row items-center justify-start px-4 py-3 gap-[19px]`}
        >
          {" "}
          <button
            onClick={handleInquiry}
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-7 relative h-8 bg-[url('/public/request-service@3x.png')] bg-cover bg-no-repeat bg-[top]"
          />
          <button
            onClick={handleInquiry}
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[23px] font-semibold font-libre-franklin text-lavender text-left inline-block"
          >
            お問い合わせ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

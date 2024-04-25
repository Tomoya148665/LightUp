import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";

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

  return (
    <div className="self-stretch bg-black flex flex-col items-center justify-start p-8 gap-[33px] text-left text-lg text-white font-libre-franklin">
      <img
        className="w-[135px] relative h-[87px] object-cover"
        alt=""
        src={image1}
      />
      <div className="w-[225.5px] overflow-hidden flex flex-col items-center justify-start">
        <div className="relative font-semibold">伊藤　だいち</div>
        <div className="relative text-sm font-medium text-light-border-grey text-center">
          hello@uladluch.com
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-7">
        <button
          className={`cursor-pointer [border:none]  px-4 ${
            isActive("/signin")
              ? "bg-darkslategray-100  rounded-3xl"
              : "bg-transparent"
          } self-stretch flex flex-row items-center justify-start py-4 gap-[19px]`}
        >
          <img
            className="w-[21px] relative h-[34px] object-cover"
            alt=""
            src={menu}
          />
          <div className="relative text-lg leading-[23px] font-semibold font-libre-franklin text-light-border-grey text-left">
            サインイン
          </div>
        </button>
        <div
          className={`${
            isActive("/dashboard")
              ? "bg-darkslategray-100 rounded-3xl py-4"
              : "bg-transparent"
          } self-stretch flex flex-row items-center justify-start px-4 gap-[19px]`}
        >
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch w-[27px] relative bg-[url('/public/control-panel@3x.png')] bg-cover bg-no-repeat bg-[top]" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg leading-[23px] font-semibold font-libre-franklin text-lavender text-left inline-block">
            ダッシュボード
          </button>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-4 px-4 gap-[19px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-8 relative h-10 bg-[url('/public/teacher@3x.png')] bg-cover bg-no-repeat bg-[top]" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg leading-[23px] font-semibold font-libre-franklin text-lavender text-left inline-block">
            メンター登録
          </button>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-4 px-4 gap-[19px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-7 relative h-[33px] bg-[url('/public/personal-trainer@3x.png')] bg-cover bg-no-repeat bg-[top]" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg leading-[23px] font-semibold font-libre-franklin text-lavender text-left inline-block">
            コーチ登録
          </button>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-4 px-4 gap-[19px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-7 relative h-[33px] bg-[url('/public/control-panel@3x.png')] bg-cover bg-no-repeat bg-[top]" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg leading-[23px] font-semibold font-libre-franklin text-lavender text-left inline-block">
            利用状況確認
          </button>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-4 px-4 gap-[19px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[30px] relative h-7 bg-[url('/public/request-service@3x.png')] bg-cover bg-no-repeat bg-[top]" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg leading-[23px] font-semibold font-libre-franklin text-lavender text-left inline-block">
            お問い合わせ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

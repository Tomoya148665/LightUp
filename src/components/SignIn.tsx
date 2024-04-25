import { FunctionComponent } from "react";

const SignIn: FunctionComponent = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col items-center justify-start text-left text-xs text-gray-100 font-libre-franklin">
      <div className="self-stretch flex-1 rounded-xl bg-white overflow-hidden flex flex-col items-center justify-start py-[100px] px-[104px] gap-[24px]">
        <div className="relative text-13xl font-semibold">サインイン</div>
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[8px] text-darkslategray-200 font-mulish">
          <div className="relative uppercase font-semibold">メール / ID</div>
          <div className="overflow-hidden flex flex-col items-start justify-start">
            <input
              className="[outline:none] bg-white w-[364px] relative rounded-xl box-border h-[42px] border-[1px] border-solid border-light-border-grey"
              type="text"
            />
          </div>
        </div>
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[8px] text-darkslategray-200 font-mulish">
          <div className="relative uppercase font-semibold">Password</div>
          <div className="w-[364px] relative rounded-xl h-[42px] overflow-hidden shrink-0 text-sm text-darkgray-100 font-font-awesome-6-pro">
            <input
              className="[outline:none] bg-white absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl box-border border-[1px] border-solid border-light-border-grey"
              type="text"
            />
            <div className="absolute top-[15px] right-[16px]"></div>
          </div>
        </div>
        <div className="w-[369px] flex flex-row items-start justify-between text-sm text-black">
          <div className="w-[114px] relative h-4">
            <div className="absolute top-[0px] left-[0px] w-4 h-4">
              <input
                className="m-0 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded box-border border-[1px] border-solid border-light-border-grey"
                type="checkbox"
              />
            </div>
            <div className="absolute top-[-1px] left-[24px] font-medium">
              情報を記憶する
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-medium font-libre-franklin text-black text-left inline-block">
            パスワードを忘れた
          </button>
        </div>
        <div className="w-[364px] relative h-12 text-base text-white">
          <button className="cursor-pointer [border:none] p-0 bg-royalblue-100 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl" />
          <div className="absolute h-[40.42%] w-[30.77%] top-[28.54%] right-[38.6%] bottom-[31.04%] left-[30.63%] overflow-hidden">
            <div className="absolute top-[calc(50%_-_9.4px)] left-[calc(50%_-_26px)] font-medium">
              サインイン
            </div>
          </div>
        </div>
        <div className="w-[364px] relative h-4 overflow-hidden shrink-0 text-smi text-black">
          <div className="absolute h-[6.25%] w-[40.66%] top-[50%] right-[59.34%] bottom-[43.75%] left-[0%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white box-border border-[1px] border-solid border-light-border-grey" />
          </div>
          <div className="absolute h-[6.25%] w-[40.66%] top-[50%] right-[0%] bottom-[43.75%] left-[59.34%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white box-border border-[1px] border-solid border-light-border-grey" />
          </div>
          <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_10px)] uppercase font-medium">
            or
          </div>
        </div>
        <div className="overflow-hidden flex flex-row items-start justify-center gap-[10px] text-sm font-mulish">
          <div className="relative font-medium">
            アカウントの登録がまだですか？
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-libre-franklin text-royalblue-100 text-left inline-block">
            サインアップ
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

import { FunctionComponent } from "react";

const SignUp: FunctionComponent = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col items-center justify-start text-left text-xs text-darkslategray-200 font-mulish">
      <div className="self-stretch flex-1 rounded-xl bg-white overflow-hidden flex flex-col items-center justify-start pt-[72px] px-[104px] pb-[100px] gap-[12px]">
        <div className="relative text-13xl font-semibold font-libre-franklin text-gray-100">
          サインアップ
        </div>
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[8px]">
          <div className="relative uppercase font-semibold">氏名</div>
          <input
            className="[outline:none] bg-white rounded-xl overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-light-border-grey"
            type="text"
          />
        </div>
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[8px]">
          <div className="relative uppercase font-semibold">メール</div>
          <div className="overflow-hidden flex flex-col items-start justify-start">
            <input
              className="[outline:none] bg-white w-[364px] relative rounded-xl box-border h-[42px] border-[1px] border-solid border-light-border-grey"
              type="text"
            />
          </div>
        </div>
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[8px]">
          <div className="relative uppercase font-semibold">ID</div>
          <div className="overflow-hidden flex flex-col items-start justify-start">
            <input
              className="[outline:none] bg-white w-[364px] relative rounded-xl box-border h-[42px] border-[1px] border-solid border-light-border-grey"
              type="text"
            />
          </div>
        </div>
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[8px]">
          <div className="relative uppercase font-semibold">Password</div>
          <div className="w-[364px] relative h-[42px] overflow-hidden shrink-0 text-sm text-darkgray-100 font-font-awesome-6-pro">
            <input
              className="[outline:none] bg-white absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl box-border border-[1px] border-solid border-light-border-grey"
              type="text"
            />
            <div className="absolute top-[15px] right-[16px]"></div>
          </div>
        </div>
        <div className="w-[369px] flex flex-row items-start justify-center text-sm text-black font-libre-franklin">
          <div className="w-[114px] relative h-4">
            <div className="absolute top-[0px] left-[0px] w-4 h-4">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-white box-border border-[1px] border-solid border-light-border-grey" />
            </div>
            <div className="absolute top-[-1px] left-[24px] font-medium">
              情報を記憶する
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[364px] relative h-12">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl bg-royalblue-100" />
          <div className="absolute h-[40.42%] w-[30.77%] top-[28.54%] right-[38.6%] bottom-[31.04%] left-[30.63%] overflow-hidden">
            <div className="absolute top-[calc(50%_-_9.4px)] left-[calc(50%_-_26px)] text-base font-medium font-libre-franklin text-white text-left">
              サインイン
            </div>
          </div>
        </button>
        <div className="w-[364px] relative h-4 overflow-hidden shrink-0 text-smi text-black font-libre-franklin">
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
        <div className="overflow-hidden flex flex-row items-start justify-center gap-[10px] text-sm text-gray-100">
          <div className="relative font-medium">
            アカウントの登録がまだですか？
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-libre-franklin text-royalblue-100 text-left inline-block">
            サインアップ
          </button>
        </div>
        <div className="overflow-hidden flex flex-row items-start justify-center gap-[10px] text-sm text-gray-100">
          <div className="relative font-medium">
            アカウントの登録がまだですか？
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-libre-franklin text-royalblue-100 text-left inline-block">
            CSVを提出
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import { FunctionComponent } from "react";

const UsageStatus: FunctionComponent = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col items-center justify-start text-left text-3xl text-black font-libre-franklin">
      <div className="self-stretch flex-1 rounded-xl bg-white overflow-hidden flex flex-row items-start justify-center py-[50px] px-[104px]">
        <div className="flex flex-col items-center justify-start gap-[16px]">
          <div className="relative font-semibold">利用状況確認</div>
          <div className="w-[364px] relative h-[476px] overflow-hidden shrink-0 text-base">
            <div className="absolute bottom-[0px] left-[0px] rounded-xl box-border w-[364px] h-[476px] border-[1px] border-solid border-light-border-grey" />
            <div className="absolute h-[17.44%] w-[86.95%] top-[77.52%] right-[6.46%] bottom-[5.04%] left-[6.59%] overflow-hidden font-mulish">
              <div className="absolute bottom-[62px] left-[0px]">請求料金</div>
              <div className="absolute top-[0px] right-[0.5px] text-lg font-semibold font-libre-franklin text-center">
                ０円
              </div>
              <div className="absolute bottom-[31px] left-[0px]">
                上限トークン
              </div>
              <div className="absolute right-[0.5px] bottom-[30px] text-lg font-semibold font-libre-franklin text-center">
                200000
              </div>
              <div className="absolute bottom-[0px] left-[0px]">
                利用トークン
              </div>
              <div className="absolute right-[0.5px] bottom-[-2px] text-lg font-semibold font-libre-franklin text-center">
                2000
              </div>
            </div>
            <img
              className="absolute h-[50.84%] w-[66.48%] top-[18.49%] right-[17.86%] bottom-[30.67%] left-[15.66%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/chart1.svg"
            />
            <img
              className="absolute h-[50.84%] w-[66.48%] top-[18.49%] right-[17.86%] bottom-[30.67%] left-[15.66%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/chart1.svg"
            />
            <div className="absolute w-[calc(100%_-_173px)] top-[calc(50%_-_65px)] right-[91px] left-[82px] h-[71px] overflow-hidden text-23xl">
              <div className="absolute top-[0px] left-[47px] font-semibold">
                95%
              </div>
            </div>
            <div className="absolute top-[26px] left-[24px] text-3xl font-semibold">
              今月の請求
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsageStatus;

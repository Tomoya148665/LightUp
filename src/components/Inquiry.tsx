import { FunctionComponent } from "react";

const Inquiry: FunctionComponent = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col items-center justify-start text-left text-xs text-darkslategray-200 font-mulish">
      <div className="self-stretch flex-1 rounded-xl bg-white overflow-hidden flex flex-row items-start justify-center py-[50px] px-[104px]">
        <div className="self-stretch flex-1 rounded-xl bg-white overflow-hidden flex flex-col items-center justify-start py-[50px] px-[104px] gap-[18px]">
          <div className="relative text-13xl font-semibold font-libre-franklin text-gray-100">
            お問い合わせ
          </div>
          <div className="relative text-sm font-medium">
            お問い合わせはこちらのフォームから送信ください
          </div>
          <div className="w-[364px] relative h-[65px] overflow-hidden shrink-0">
            <input
              className="[outline:none] bg-white absolute h-[64.62%] w-full top-[35.38%] right-[0%] bottom-[0%] left-[0%] rounded-xl box-border overflow-hidden border-[1px] border-solid border-light-border-grey"
              type="text"
            />
            <div className="absolute top-[0px] left-[16px] uppercase font-semibold">
              氏名
            </div>
          </div>
          <div className="w-[364px] relative h-[65px] overflow-hidden shrink-0">
            <div className="absolute h-[64.62%] w-full top-[35.38%] right-[0%] bottom-[0%] left-[0%] overflow-hidden">
              <input
                className="[outline:none] bg-white absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl box-border border-[1px] border-solid border-light-border-grey"
                type="text"
              />
            </div>
            <div className="absolute top-[0px] left-[16px] uppercase font-semibold">
              メールアドレス
            </div>
          </div>
          <div className="w-[364px] flex-1 relative overflow-hidden">
            <div className="absolute top-[0px] left-[16px] uppercase font-semibold">
              お問い合わせ詳細
            </div>
            <textarea className="bg-white [outline:none] absolute h-[90.36%] w-[100.27%] top-[9.64%] right-[-0.14%] bottom-[0%] left-[-0.14%] rounded-xl box-border overflow-hidden border-[1px] border-solid border-light-border-grey" />
          </div>
          <button className="cursor-pointer [border:none] py-2 px-[72px] bg-royalblue-100 rounded-2xl flex flex-row items-center justify-start">
            <div className="relative text-base font-medium font-libre-franklin text-white text-left">
              送信する
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;

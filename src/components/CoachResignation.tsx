import { FunctionComponent } from "react";

const CoachResignation: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start text-left text-xl text-black font-libre-franklin">
      <div className="self-stretch flex-1 rounded-xl bg-white overflow-hidden flex flex-row items-start justify-center py-[50px] px-[104px] gap-[60px]">
        <div className="flex flex-col items-end justify-start gap-[10px]">
          <div className="flex flex-col items-center justify-start gap-[16px]">
            <div className="relative text-3xl font-semibold">コーチを選ぶ</div>
            <div className="self-stretch rounded-xl bg-white box-border h-[178.9px] overflow-hidden shrink-0 flex flex-col items-center justify-start py-[23px] px-[9px] gap-[4px] border-[1px] border-solid border-light-border-grey">
              <div className="flex flex-row items-center justify-center gap-[4px]">
                <div className="w-[99.2px] relative h-[90.9px]">
                  <img
                    className="absolute h-[72.94%] w-[70.56%] top-[4.4%] right-[14.31%] bottom-[22.66%] left-[15.12%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/mask@2x.png"
                  />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                </div>
                <div className="relative font-medium">コーチA</div>
              </div>
              <div className="w-[298px] relative text-base font-medium text-gray-100 inline-block">
                目標達成のための具体的な計画を立て、指導します。
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-white box-border h-[178.9px] overflow-hidden shrink-0 flex flex-col items-center justify-start py-[23px] px-[9px] gap-[4px] border-[1px] border-solid border-light-border-grey">
              <div className="flex flex-row items-center justify-center gap-[4px]">
                <div className="w-[99.2px] relative h-[90.9px]">
                  <img
                    className="absolute h-[72.94%] w-[70.56%] top-[4.4%] right-[14.31%] bottom-[22.66%] left-[15.12%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/mask1@2x.png"
                  />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                </div>
                <div className="relative font-medium">コーチB</div>
              </div>
              <div className="w-[298px] relative text-base font-medium text-gray-100 inline-block">
                <p className="m-0">
                  エンゲージメントを高め、従業員のやる気を引き出します。
                </p>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-white box-border h-[178.9px] overflow-hidden shrink-0 flex flex-col items-center justify-start py-[23px] px-[9px] gap-[4px] border-[1px] border-solid border-light-border-grey">
              <div className="flex flex-row items-center justify-center gap-[4px]">
                <div className="w-[99.2px] relative h-[90.9px]">
                  <img
                    className="absolute h-[72.94%] w-[70.56%] top-[4.4%] right-[14.31%] bottom-[22.66%] left-[15.12%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/mask2@2x.png"
                  />
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                </div>
                <div className="relative font-medium">コーチC</div>
              </div>
              <div className="w-[298px] relative text-base font-medium text-gray-100 inline-block">
                専門スキルの向上をサポートし、パフォーマンスを改善します。
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[11px] px-[21px] bg-royalblue-200 rounded-3xl flex flex-row items-center justify-start">
            <div className="relative text-base font-medium font-libre-franklin text-white text-left">
              コーチを登録する
            </div>
          </button>
        </div>
        <div className="flex flex-col items-end justify-start gap-[48px] text-mid-6">
          <div className="flex flex-col items-end justify-start gap-[12.8px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[13px]">
              <div className="relative font-semibold">口調を登録する</div>
              <div className="relative font-semibold">
                コーチの口調を入力してください
              </div>
            </div>
            <textarea className="bg-white [outline:none] w-[393.6px] relative rounded-3xs-6 box-border h-[168.6px] border-[0.8px] border-solid border-text-dart" />
            <button className="cursor-pointer [border:none] py-[8.8px] px-[16.8px] bg-royalblue-200 rounded-mid-6 flex flex-row items-center justify-end">
              <div className="relative text-smi-8 font-medium font-libre-franklin text-white text-left">
                口調を登録する
              </div>
            </button>
          </div>
          <div className="flex flex-col items-end justify-start gap-[12.8px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[13px]">
              <div className="relative font-semibold">口調を登録する</div>
              <div className="relative font-semibold">
                コーチの口調を入力してください
              </div>
            </div>
            <textarea className="bg-white [outline:none] w-[393.6px] relative rounded-3xs-6 box-border h-[168.6px] border-[0.8px] border-solid border-text-dart" />
            <button className="cursor-pointer [border:none] py-[8.8px] px-[16.8px] bg-royalblue-200 rounded-mid-6 flex flex-row items-center justify-end">
              <div className="relative text-smi-8 font-medium font-libre-franklin text-white text-left">
                口調を登録する
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachResignation;

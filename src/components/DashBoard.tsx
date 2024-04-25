import { FunctionComponent } from "react";

const DashBoard: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-center gap-[30px] text-left text-sm text-black font-libre-franklin">
      <div className="w-[617px] rounded-xl overflow-hidden shrink-0 flex flex-col items-center justify-start py-4 px-6 box-border gap-[9px]">
        <div className="relative text-3xl font-semibold">利用状況</div>
        <div className="w-[104px] relative h-[30px] text-3xs text-darkslategray-200 font-font-awesome-6-pro">
          <div className="absolute top-[0px] right-[0px] rounded-mini bg-ultralight w-[104px] h-[30px]" />
          <div className="absolute h-3/6 w-[78.85%] top-[23.33%] right-[10.58%] bottom-[26.67%] left-[10.58%] overflow-hidden">
            <div className="absolute top-[3px] right-[0px]"></div>
            <div className="absolute top-[0px] left-[0px] text-xs font-mulish">
              Nov, 01 - 07
            </div>
          </div>
        </div>
        <div className="w-[569px] relative h-48 overflow-hidden shrink-0 text-dimgray font-mulish">
          <div className="absolute h-[9.38%] w-[89.28%] top-[90.63%] right-[1.93%] bottom-[0%] left-[8.79%] overflow-hidden">
            <div className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_254px)]">
              01/09
            </div>
            <div className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_176px)]">
              02/09
            </div>
            <div className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_98px)]">
              03/09
            </div>
            <div className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_19px)]">
              04/09
            </div>
            <div className="absolute top-[calc(50%_-_9px)] left-[calc(50%_+_60px)]">
              05/09
            </div>
            <div className="absolute top-[calc(50%_-_9px)] left-[calc(50%_+_138px)]">
              06/09
            </div>
            <div className="absolute top-[calc(50%_-_9px)] left-[calc(50%_+_216px)]">
              07/09
            </div>
          </div>
          <div className="absolute h-[84.9%] w-full top-[0%] right-[0%] bottom-[15.1%] left-[0%] overflow-hidden">
            <div className="absolute w-[calc(100%_-_1px)] right-[1px] bottom-[0px] left-[0px] h-[54px]">
              <div className="absolute h-full w-[96.3%] top-[0%] right-[0%] bottom-[0%] left-[3.7%] bg-gainsboro box-border hidden border-[1px] border-solid border-darkgray-200" />
              <div className="absolute top-[0px] left-[0px] inline-block w-8 h-5">
                25%
              </div>
              <div className="absolute w-[calc(100%_-_36px)] right-[0px] bottom-[0px] left-[36px] h-px">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white box-border border-[1px] border-solid border-light-border-grey" />
              </div>
              <div className="absolute w-[calc(100%_-_36px)] top-[0px] right-[0px] left-[36px] h-px">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white box-border border-[1px] border-solid border-light-border-grey" />
              </div>
            </div>
            <div className="absolute h-[34.97%] w-[99.82%] top-[32.52%] right-[0.18%] bottom-[32.52%] left-[0%]">
              <div className="absolute h-full w-[96.3%] top-[0%] right-[0%] bottom-[0%] left-[3.7%] bg-gainsboro box-border hidden border-[1px] border-solid border-darkgray-200" />
              <div className="absolute top-[0px] left-[0px] inline-block w-8 h-5">
                50%
              </div>
              <div className="absolute w-[calc(100%_-_36px)] right-[0px] bottom-[0px] left-[36px] h-px">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white box-border border-[1px] border-solid border-light-border-grey" />
              </div>
              <div className="absolute w-[calc(100%_-_36px)] top-[0px] right-[0px] left-[36px] h-px">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white box-border border-[1px] border-solid border-light-border-grey" />
              </div>
            </div>
            <div className="absolute h-[33.13%] w-[99.82%] top-[0%] right-[0%] bottom-[66.87%] left-[0.18%]">
              <div className="absolute h-full w-[96.3%] top-[0%] right-[0%] bottom-[0%] left-[3.7%] bg-gainsboro box-border hidden border-[1px] border-solid border-darkgray-200" />
              <div className="absolute top-[0px] left-[0px] inline-block w-8 h-5">
                75%
              </div>
              <div className="absolute w-[calc(100%_-_36px)] right-[0px] bottom-[0px] left-[36px] h-px">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white box-border border-[1px] border-solid border-light-border-grey" />
              </div>
              <div className="absolute w-[calc(100%_-_36px)] top-[0px] right-[0px] left-[36px] h-px">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white box-border border-[1px] border-solid border-light-border-grey" />
              </div>
            </div>
          </div>
          <div className="absolute h-[calc(100%_-_55px)] w-[calc(100%_-_58px)] top-[25px] right-[11px] bottom-[30px] left-[47px] overflow-hidden">
            <div className="absolute h-[87.96%] w-[8.02%] top-[12.04%] right-[61.45%] bottom-[0%] left-[30.53%]">
              <div className="absolute h-full w-[21.95%] top-[0%] right-[39.02%] bottom-[0%] left-[39.02%] rounded-t-81xl rounded-b-none bg-lime" />
              <div className="absolute h-[68.46%] w-[21.95%] top-[31.45%] right-[0%] bottom-[0.08%] left-[78.05%] rounded-t-81xl rounded-b-none bg-orange-normal" />
              <div className="absolute h-[42.07%] w-[21.95%] top-[57.93%] right-[78.05%] bottom-[0%] left-[0%] rounded-t-81xl rounded-b-none bg-mediumslateblue" />
            </div>
            <div className="absolute h-[46.28%] w-[8.02%] top-[53.72%] right-[0%] bottom-[0%] left-[91.98%]">
              <div className="absolute h-full w-[21.95%] top-[0%] right-[39.02%] bottom-[0%] left-[39.02%] rounded-t-81xl rounded-b-none bg-lime" />
              <div className="absolute h-[50.32%] w-[21.95%] top-[49.68%] right-[0%] bottom-[0%] left-[78.05%] rounded-t-81xl rounded-b-none bg-orange-normal" />
              <div className="absolute h-[50.32%] w-[21.95%] top-[49.68%] right-[78.05%] bottom-[0%] left-[0%] rounded-t-81xl rounded-b-none bg-mediumslateblue" />
            </div>
            <div className="absolute h-[97.23%] w-[8.02%] top-[2.77%] right-[76.71%] bottom-[0%] left-[15.26%]">
              <div className="absolute h-[26.65%] w-[21.95%] top-[73.35%] right-[39.02%] bottom-[0%] left-[39.02%] rounded-t-81xl rounded-b-none bg-lime" />
              <div className="absolute h-[84.76%] w-[21.95%] top-[15.24%] right-[0%] bottom-[0%] left-[78.05%] rounded-t-81xl rounded-b-none bg-orange-normal" />
              <div className="absolute h-full w-[21.95%] top-[0%] right-[78.05%] bottom-[0%] left-[0%] rounded-t-81xl rounded-b-none bg-mediumslateblue" />
            </div>
            <div className="absolute h-[89.78%] w-[8.02%] top-[10.22%] right-[15.26%] bottom-[0%] left-[76.71%]">
              <div className="absolute h-[51.87%] w-[21.95%] top-[48.05%] right-[39.02%] bottom-[0.08%] left-[39.02%] rounded-t-81xl rounded-b-none bg-lime" />
              <div className="absolute h-[70.16%] w-[21.95%] top-[29.92%] right-[0%] bottom-[-0.08%] left-[78.05%] rounded-t-81xl rounded-b-none bg-orange-normal" />
              <div className="absolute h-full w-[21.95%] top-[0%] right-[78.05%] bottom-[0%] left-[0%] rounded-t-81xl rounded-b-none bg-mediumslateblue" />
            </div>
            <div className="absolute h-full w-[8.02%] top-[0%] right-[30.53%] bottom-[0%] left-[61.45%]">
              <div className="absolute h-[42.55%] w-[21.95%] top-[57.45%] right-[0%] bottom-[0%] left-[78.05%] rounded-t-81xl rounded-b-none bg-orange-normal" />
              <div className="absolute h-[49.64%] w-[21.95%] top-[50.36%] right-[78.05%] bottom-[0%] left-[0%] rounded-t-81xl rounded-b-none bg-mediumslateblue" />
              <div className="absolute h-full w-[21.95%] top-[0%] right-[39.02%] bottom-[0%] left-[39.02%] rounded-t-81xl rounded-b-none bg-lime" />
            </div>
            <div className="absolute h-[79.64%] w-[8.02%] top-[20.29%] right-[91.98%] bottom-[0.07%] left-[0%]">
              <div className="absolute h-full w-[21.95%] top-[0%] right-[39.02%] bottom-[0%] left-[39.02%] rounded-t-81xl rounded-b-none bg-lime" />
              <div className="absolute h-[19.07%] w-[21.95%] top-[80.93%] right-[0%] bottom-[0%] left-[78.05%] rounded-t-81xl rounded-b-none bg-orange-normal" />
              <div className="absolute h-[61.59%] w-[21.95%] top-[38.41%] right-[78.05%] bottom-[0%] left-[0%] rounded-t-81xl rounded-b-none bg-mediumslateblue" />
            </div>
            <div className="absolute h-[71.31%] w-[8.22%] top-[28.69%] right-[45.99%] bottom-[0%] left-[45.79%]">
              <div className="absolute h-[68.17%] w-[21.43%] top-[31.83%] right-[40.48%] bottom-[0%] left-[38.1%] rounded-t-81xl rounded-b-none bg-lime" />
              <div className="absolute h-full w-[21.43%] top-[0%] right-[0%] bottom-[0%] left-[78.57%] rounded-t-81xl rounded-b-none bg-orange-normal" />
              <div className="absolute h-[33.78%] w-[21.43%] top-[66.22%] right-[78.57%] bottom-[0%] left-[0%] rounded-t-81xl rounded-b-none bg-mediumslateblue" />
            </div>
          </div>
        </div>
        <div className="w-[238px] relative h-[15px]">
          <div className="absolute h-full w-[calc(100%_-_12px)] top-[0%] right-[12px] bottom-[0%] left-[0px] overflow-hidden">
            <div className="absolute h-full w-[30.97%] top-[0%] right-[69.03%] bottom-[0%] left-[0%]">
              <div className="absolute top-[4px] left-[0px] rounded-[50%] bg-mediumblue w-2 h-2" />
              <div className="absolute top-[-2px] left-[15px] font-medium">
                達成度
              </div>
            </div>
            <div className="absolute h-full w-[27.43%] top-[0%] right-[34.51%] bottom-[0%] left-[38.05%]">
              <div className="absolute top-[4px] left-[0px] rounded-[50%] bg-green-accent w-2 h-2" />
              <div className="absolute top-[-2px] left-[15px] font-medium">
                利用状況
              </div>
            </div>
            <div className="absolute h-full w-[27.43%] top-[0%] right-[0%] bottom-[0%] left-[72.57%]">
              <div className="absolute top-[4px] left-[0px] rounded-[50%] bg-orange-normal w-2 h-2" />
              <div className="absolute top-[-2px] left-[15px] font-medium">
                LinkedIn
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[364.5px] rounded-xl overflow-hidden shrink-0 flex flex-col items-center justify-start p-6 box-border relative gap-[5px] text-3xl">
        <div className="relative font-semibold z-[0]">ネガティブ度</div>
        <div className="w-[63px] relative h-[30px] z-[1] text-xs font-font-awesome-6-pro">
          <div className="absolute top-[0px] left-[0px] rounded-81xl bg-ultralight flex flex-row items-center justify-start py-1.5 px-[9px] gap-[6px]">
            <div className="relative"></div>
            <div className="relative text-sm font-medium font-libre-franklin">
              24%
            </div>
          </div>
        </div>
        <img
          className="w-[242px] relative h-[242px] z-[2]"
          alt=""
          src="/chart.svg"
        />
        <div className="w-[316.5px] relative h-[83px] overflow-hidden shrink-0 z-[3] text-base font-mulish">
          <div className="absolute bottom-[62px] left-[0px]">
            ネガティブ発言の数
          </div>
          <div className="absolute top-[0px] right-[12.5px] text-lg font-semibold font-libre-franklin text-center">
            2
          </div>
          <div className="absolute bottom-[31px] left-[0px]">先週の数</div>
          <div className="absolute right-[2px] bottom-[8px] text-lg font-semibold font-libre-franklin text-center">
            <p className="m-0">３</p>
          </div>
        </div>
        <div className="w-[calc(100%_-_173.5px)] absolute !m-[0] top-[calc(50%_-_51px)] right-[86.5px] left-[87px] h-[71px] overflow-hidden shrink-0 z-[4] text-23xl">
          <div className="absolute top-[0px] left-[47px] font-semibold">
            95%
          </div>
          <div className="absolute top-[55px] left-[0px] text-smi uppercase font-medium text-darkslategray-200 text-center inline-block w-[191px]">
            ネガティブ度
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

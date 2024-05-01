import { FunctionComponent } from "react";

export type PersonType = {
  personName?: string;
  personId: string;
  personMail?: string;
  personImage?: string;
  onClick: () => void;
  isSelected: boolean;
  role: string;
};

const Person: FunctionComponent<PersonType> = ({
  personName,
  personId,
  personMail,
  personImage,
  onClick,
  isSelected,
  role,
}) => {
  const personClass = isSelected
    ? role === "mentor"
      ? "bg-red-100"
      : "bg-blue-100"
    : "";

  return (
    <div
      className={`${personClass} cursor-pointer w-[259px] box-border flex flex-row items-center justify-start py-1.5 px-[15px] gap-[8px] text-left text-5xs text-text-dart font-roboto border-[1px] border-solid border-darkgray-100`}
      onClick={onClick}
    >
      <div className="w-[34px] relative h-[42px]">
        <img
          className="absolute top-[calc(50%_-_21px)] left-[0px] w-[34px] h-[42px] object-cover"
          alt=""
          src={personImage}
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[4px] text-mid">
        <div className="w-[146.7px] relative leading-[18px] inline-block">
          {personName}
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-sm text-text-light">
          <div className="self-stretch relative leading-[18px]">{personId}</div>
          <div className="self-stretch relative leading-[18px]">
            {personMail}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;

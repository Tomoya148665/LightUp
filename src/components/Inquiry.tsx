import { FunctionComponent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

type Inputs = {
  name: string;
  email: string;
  inquiry: string;
};

export default function Inquiry() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const submitMail: SubmitHandler<Inputs> = async (data) => {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicId = process.env.REACT_APP_EMAILJS_PUBLIC_ID;

    try {
      await emailjs.send(serviceId, templateId, data, publicId);
    } catch (error) {
      console.error("エラーが出ました" + error);
    }
  };

  return (
    <div className="self-stretch flex-1 flex flex-col items-center justify-start text-left text-xs text-darkslategray-200 font-libre-franklin">
      <div className="self-stretch flex-1  bg-white  flex flex-row items-start justify-center py-9 px-[104px]">
        <form onSubmit={handleSubmit(submitMail)}>
          <div className="self-stretch flex-1  bg-white  flex flex-col items-center justify-start py-7 gap-[18px]">
            <div className="relative text-13xl font-libre-franklin  text-gray-100">
              お問い合わせ
            </div>
            <div className="relative text-sm font-libre-franklin">
              お問い合わせはこちらのフォームから送信ください
            </div>
            <div className="w-full relative h-[65px]  shrink-0">
              <div className="top-[0px] pl-3 left-[16px] uppercase font-libre-franklin">
                氏名
              </div>
              <input
                className="[outline:none] bg-white h-[64.62%] w-full top-[35.38%] right-[0%] bottom-[0%] left-[0%] px-3  box-border  border-[1px] border-solid border-darkslategray-100"
                type="text"
                {...register("name", { required: true })}
              />{" "}
              {errors.name && <span>この入力は必須です</span>}
            </div>
            <div className="w-full relative h-[65px]  shrink-0">
              <div className="top-[0px] pl-3 left-[16px] uppercase font-libre-franklin">
                メールアドレス
              </div>
              <div className="h-[64.62%] w-full top-[35.38%] right-[0%] bottom-[0%] left-[0%] ">
                <input
                  className="[outline:none] bg-white h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] px-3  box-border border-[1px] border-solid border-darkslategray-100"
                  type="text"
                  {...register("email", { required: true })}
                />{" "}
                {errors.email && <span>この入力は必須です</span>}
              </div>
            </div>
            <div className="w-full flex-1 relative">
              <div className="pl-3 left-[16px] uppercase font-libre-franklin">
                お問い合わせ詳細
              </div>
              <textarea
                className="bg-white [outline:none] h-[90.36%] w-full top-[5%] right-[-0%] bottom-[0%] left-[-0%] p-3  box-border  border-[1px] border-solid font-libre-franklin border-darkslategray-100"
                {...register("inquiry", { required: true })}
              />{" "}
              {errors.inquiry && <span>この入力は必須です</span>}
            </div>
            <button
              type="submit"
              className="cursor-pointer [border:none] py-2 px-[72px] bg-royalblue-100 rounded-2xl flex flex-row items-center justify-start"
            >
              <div className="relative text-base font-libre-franklin text-white text-left">
                送信する
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

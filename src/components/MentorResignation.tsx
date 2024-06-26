import { FunctionComponent, useEffect, useState } from "react";
import Person, { PersonType } from "./Person";

const MentorResignation: FunctionComponent = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [people, setPeople] = useState<PersonType[]>([]);
  const [selectedPerson, setSelectedPerson] = useState({ id: "", role: "" });

  useEffect(() => {
    const fetchedPeople: PersonType[] = [
      {
        personName: "John Doe",
        personId: "1",
        personMail: "john@example.com",
        personImage: "/path/to/image",
        onClick: () => {},
        isSelected: false,
        role: "mentor",
      },
      {
        personName: "Jane Doe",
        personId: "2",
        personMail: "jane@example.com",
        personImage: "/path/to/image",
        onClick: () => {},
        isSelected: false,
        role: "",
      },
    ];
    setPeople(fetchedPeople);
  }, []);

  const toggleSelection = (id: string, role: "mentor" | "mentee") => {
    if (selectedPerson.id === id && selectedPerson.role === role) {
      setSelectedPerson({ id: "", role: "" });
    } else {
      setSelectedPerson({ id, role });
    }
  };

  return (
    <div className="self-stretch flex-1 flex flex-col items-center justify-start text-left text-3xl text-black font-libre-franklin">
      <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[10px]">
        <div className="self-stretch flex-1 rounded-xl bg-white overflow-hidden flex flex-row items-start justify-center pt-6 px-[89px] pb-0 gap-[40px]">
          <div className="w-[265px] flex flex-col items-center justify-start">
            <div className="flex flex-row items-center justify-start">
              <div className="relative font-semibold">メンター</div>
            </div>
            <div className="h-[563px] overflow-y-auto shrink-0 flex flex-col items-center justify-start py-[3px] px-px box-border text-5xs text-text-dart font-roboto">
              {people.map((person) => (
                <Person
                  key={person.personId}
                  {...person}
                  onClick={() => toggleSelection(person.personId, "mentor")}
                  isSelected={selectedIds.includes(person.personId)}
                />
              ))}
            </div>
          </div>
          <div className="w-[265px] flex flex-col items-center justify-start">
            <div className="flex flex-row items-center justify-start">
              <div className="relative font-semibold">メンティー</div>
            </div>
            <div className="h-[563px] overflow-y-auto shrink-0 flex flex-col items-center justify-start py-[3px] px-px box-border">
              {people.map((person) => (
                <Person
                  key={person.personId}
                  {...person}
                  onClick={() => toggleSelection(person.personId, "mentee")}
                  isSelected={selectedIds.includes(person.personId)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-center pt-0 pb-5 pr-5 pl-[150px] gap-[40px] text-xs text-text-dart">
          <div className="flex-1 flex flex-col items-start justify-center gap-[1px]">
            <div className="flex flex-row items-start justify-center py-0 px-1.5 border-[1px] border-solid border-text-dart">
              <div className="relative font-medium">選択済み</div>
            </div>
            <div className="self-stretch box-border h-[93px] flex flex-row items-start justify-between border-[1px] border-solid border-text-dart">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start border-r-[1px] border-solid border-text-dart">
                <div className="relative font-medium">メンター</div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                <div className="relative font-medium">メンティー</div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-2 px-[15.4px] bg-royalblue-200 rounded-[16.09px] flex flex-row items-center justify-start">
            <div className="relative text-3xs-4 font-medium font-libre-franklin text-white text-left">
              メンターを登録する
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorResignation;

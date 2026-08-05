import { useState } from "react";
import AccordionIcon from "../AccordionIcon";

interface Props {
  title: string;
  content: string;
}

const Accord = ({ title, content }: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className="py-2 border-b-1 border-stone-400 ">
      <button
        className="w-full flex justify-between bg-stone-200 px-3 py-1 items-center cursor-pointer"
        onClick={() => setToggle((prev) => !prev)}
      >
        <div>{title}</div>
        <AccordionIcon rotate={toggle}/>
      </button>
      {toggle && <div className="px-3">{content}</div>}
    </div>
  );
};

export default Accord;

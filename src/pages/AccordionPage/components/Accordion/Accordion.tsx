import { useState, type FC } from "react";
import AccordionIcon from "./components/AccordionIcon";

interface Props {
  title: string;
  content: string;
}

const Accordion: FC<Props> = ({ title, content }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className="border-b-1 border-stone-400 py-2">
      <button
        className="flex w-full cursor-pointer items-center justify-between bg-stone-200 px-3 py-1"
        onClick={() => setToggle((prev) => !prev)}
      >
        <div>{title}</div>
        <AccordionIcon rotate={toggle} />
      </button>
      {toggle && <div className="px-3">{content}</div>}
    </div>
  );
};

export default Accordion;

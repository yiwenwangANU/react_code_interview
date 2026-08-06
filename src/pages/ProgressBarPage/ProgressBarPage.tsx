import { useState, type FC } from "react";
import ProgressBar from "./components/ProgressBar";

const ProgressBarPage: FC = () => {
  const [num, setNum] = useState<number>(0);
  const handleClick = () => setNum((prev) => prev + 1);
  return (
    <div className="mx-auto flex w-200 flex-col gap-2">
      <button
        onClick={handleClick}
        className="w-fit cursor-pointer rounded border-1 bg-stone-200 px-2"
      >
        Add
      </button>
      {Array.from({ length: num }, (_, i) => (
        <ProgressBar key={i} />
      ))}
    </div>
  );
};

export default ProgressBarPage;

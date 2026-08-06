import { useEffect, useState, type FC } from "react";

interface Props {
  delay?: number;
}

const ProgressBar: FC<Props> = ({ delay = 2000 }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  useEffect(() => setExpanded(true), []);
  return (
    <div className="h-3 w-full bg-stone-200">
      <div
        className={`h-full bg-green-800 transition-[width] duration-${delay} ${expanded ? "w-full" : "w-0"}`}
      />
    </div>
  );
};

export default ProgressBar;

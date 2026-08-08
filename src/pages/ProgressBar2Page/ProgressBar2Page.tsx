import type { FC } from "react";

interface Props {
  progress: number;
}

const ProgressBar2Page: FC<Props> = ({ progress }) => {
  const percentage = Math.min(100, Math.max(0, progress)).toFixed(2);
  return (
    <div className="h-4 w-full rounded-full bg-gray-200">
      {percentage && (
        <div
          className="flex h-full items-center justify-center rounded-full bg-blue-600 text-sm text-white"
          style={{ width: `${percentage}%` }}
        >{`${percentage}%`}</div>
      )}
    </div>
  );
};

export default ProgressBar2Page;

import type { FC } from "react";

const HolyGrailPage: FC = () => (
  <div className="flex h-dvh w-full flex-col">
    <div className="flex h-12 justify-center bg-orange-500">Header</div>
    <div className="flex grow">
      <div className="flex w-20 justify-center bg-orange-400 pt-2">
        Navigation
      </div>
      <div className="flex grow justify-center bg-amber-200 pt-2">Main</div>
      <div className="flex w-20 justify-center bg-orange-300 pt-2">Sidebar</div>
    </div>
    <div className="flex h-20 justify-center bg-slate-500 pt-2">Footer</div>
  </div>
);

export default HolyGrailPage;

import type { FC } from "react";
import { MessageCircle, Repeat2, Heart, Share } from "lucide-react";

type Profile = {
  name: string;
  thumbnail: string;
};

interface Props {
  profile: Profile;
  date: string;
  message: string;
  messageNum: number;
  repeat: number;
  heart: number;
}
const Tweet: FC<Props> = ({
  profile,
  date,
  message,
  messageNum,
  repeat,
  heart,
}) => {
  const atName = profile.name
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .trim();

  const formatCount = (num: number) =>
    num >= 10000
      ? new Intl.NumberFormat("en", {
          notation: "compact",
          maximumFractionDigits: 1,
        }).format(num)
      : new Intl.NumberFormat("en").format(num);

  return (
    <div className="m-3 flex gap-3 rounded-xl border-1 border-[#cfd9de] p-3 font-sans text-[15px]">
      <img src={profile.thumbnail} className="h-12 w-12 rounded-full" />
      <div>
        <div>
          <span className="pr-1 font-bold">{profile.name}</span>
          <span className="text-[#71767b]">@{atName}</span>
          <span className="text-[#71767b]"> - {date}</span>
        </div>
        <div className="pt-0.5 pb-3 text-[#0f1419]">{message}</div>
        <div className="flex max-w-[425px] items-center justify-between text-[13px] text-[#536471]">
          <div className="flex items-center gap-3">
            <MessageCircle width={16} height={16} />
            <span>{formatCount(messageNum)}</span>
          </div>
          <div className="flex items-center gap-3">
            <Repeat2 width={16} height={16} />
            <span>{formatCount(repeat)}</span>
          </div>
          <div className="flex items-center gap-3">
            <Heart width={16} height={16} />
            <span>{formatCount(heart)}</span>
          </div>
          <Share width={16} height={16} />
        </div>
      </div>
    </div>
  );
};

export default Tweet;

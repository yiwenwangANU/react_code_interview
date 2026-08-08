import type { FC } from "react";
import Tweet from "./components/Tweet";

const TWEETS = [
  {
    profile: {
      name: "John Doe",
      thumbnail: "https://xsgames.co/randomusers/assets/avatars/male/21.jpg",
    },
    date: "Dec 25",
    message:
      "I got my wife a fridge for Christmas. I can't wait to see her face light up when she opens it.",
    messageNum: 1094,
    repeat: 512,
    heart: 512,
  },
  {
    profile: {
      name: "John Doe",
      thumbnail: "https://xsgames.co/randomusers/assets/avatars/female/2.jpg",
    },
    date: "Oct 24",
    message:
      "I told my husband that he has no sense of direction at all. He got so mad that he packed up his stuff and right.",
    messageNum: 193,
    repeat: 3960,
    heart: 40500,
  },
  {
    profile: {
      name: "WALL-E",
      thumbnail: "https://xsgames.co/randomusers/assets/avatars/pixel/3.jpg",
    },
    date: "Jul 1",
    message: "The best way to predict the future is to invent it.",
    messageNum: 193,
    repeat: 3960,
    heart: 40500,
  },
];

const TweetPage: FC = () => {
  return TWEETS.map((tweet, i) => (
    <Tweet
      key={i}
      profile={tweet.profile}
      date={tweet.date}
      messageNum={tweet.messageNum}
      heart={tweet.heart}
      repeat={tweet.repeat}
      message={tweet.message}
    />
  ));
};

export default TweetPage;

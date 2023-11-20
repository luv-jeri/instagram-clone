import s from "./Stories.module.css";
import { StoryBox } from "@components";

export const Stories = () => {
  return (
    <div className={s.wrapper}>
      <StoryBox />
      <StoryBox />
      <StoryBox />
    </div>
  );
};

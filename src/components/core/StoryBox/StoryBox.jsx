import s from "./StoryBox.module.css";
import dummyUserPhoto from "../../../assets/img/user.avif";

export const StoryBox = ({ userName, userPhoto, story, time, id }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.user_image_wrapper}>
        <img src={dummyUserPhoto} height="100%" width="100%" />
      </div>
    </div>
  );
};

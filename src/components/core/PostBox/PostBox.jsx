import s from "./PostBox.module.css";
import { ThreeDotsIcon, SaveIcon, CommentIcon, HeartIcon } from "@icons";

export const PostBox = ({ contentUrl, createdAt, description, username }) => {
  const date = new Date(createdAt);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.user_details}>
          <div
            style={{
              overflow: "hidden",
            }}
          >
            <img
              src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
              height="50"
              width="50"
            />
          </div>

          <p>
            {username}{" "}
            <span>• {day + "/" + month + "/" + year + " " + hour + ":00"}</span>
          </p>
        </div>
        <div className={s.header_action}>
          <ThreeDotsIcon />
        </div>
      </div>
      <div className={s.wrapper_post}>
        <img src={contentUrl} height="100%" width="100%" alt="post-photo" />
      </div>
      <div className={s.action}>
        <div className={s.right}>
          <HeartIcon />
          <CommentIcon />
        </div>
        <div className={s.left}>
          <SaveIcon />
        </div>
      </div>
      <div className={s.post_data}>
        <p className={s.likes_number}>88 Likes</p>
        <p className={s.caption}>{description}</p>
      </div>
    </div>
  );
};

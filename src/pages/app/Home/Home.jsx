import s from "./Home.module.css";
import { SideBar, Content } from "@components";

export const Home = () => {
  return (
    <div className={s.container}>
      <div className={s.side_bar}>
        <SideBar />
      </div>
      <div className={s.content}>
        <Content />
      </div>
    </div>
  );
};

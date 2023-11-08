import s from "./Home.module.css";
import { SideBar, Content } from "@components";

export const Home = () => {
  return (
    <div className={s.container}>
      <div>
        <SideBar />
      </div>
      <div>
        <Content />
      </div>
    </div>
  );
};

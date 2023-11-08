import s from "./Sidebar.module.css";
import { LogoIcon, HomeIcon } from "@icons";

export const SideBar = () => {
  const list = [
    {
      title: "Home",
      icon: <HomeIcon />,
      navigator: true,
      link: "/",
    },
    {
      title: "Search",
      icon: <HomeIcon />,
      navigator: false,
    },
    {
      title: "Explore",
      icon: <HomeIcon />,
      navigator: true,
      link: "/explore",
    },
    {
      title: "Notifications",
      icon: <HomeIcon />,
      link: "/notifications",
    },
    {
      title: "Create",
      icon: <HomeIcon />,
      navigator: false,
    },

    {
      title: "Profile",
      icon: <HomeIcon />,
      link: "/profile",
    },
  ];

  return (
    <section className={s.container}>
      <div className={s.logo}>
        <LogoIcon />
      </div>
      <div className={s.menu}>
        {list.map((item, index) => {
          return (
            <div key={index} className={s.item}>
              {item.icon}
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
      <div className={s.footer}></div>
    </section>
  );
};

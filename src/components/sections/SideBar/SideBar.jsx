import s from "./Sidebar.module.css";
import { LogoIcon, HomeIcon, PlusIcon } from "@icons";
import { Modal, CreatePostModal } from "@components";
import { useState } from "react";

export const SideBar = () => {
  const [open, setOpen] = useState(false);
 
  const handleModal = () => {
    setOpen(!open);
  };

  const list = [
    {
      title: "Home",
      icon: <HomeIcon />,
      navigator: true,
      link: "/",
      onClick: null,
    },

    {
      title: "Create",
      icon: <PlusIcon />,
      navigator: false,
      onClick: handleModal,
    },
  ];

  return (
    <section className={s.container}>
      <Modal open={open} handleModal={handleModal}>
        <CreatePostModal />
      </Modal>
      <div className={s.logo}>
        <LogoIcon />
      </div>
      <div className={s.menu}>
        {list.map((item, index) => {
          return (
            <div key={index} className={s.item} onClick={item.onClick}>
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

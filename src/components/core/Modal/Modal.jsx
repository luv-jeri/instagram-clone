import s from "./Modal.module.css";
import { CrossIcon } from "@icons";

export const Modal = ({ children, open, handleModal }) => {
  return (
    <div className={`${open ? s.modal_open : s.modal_close} ${s.modal}`}>
      <div className={s.cross} onClick={handleModal}>
        <CrossIcon />
      </div>
      {children}
    </div>
  );
};

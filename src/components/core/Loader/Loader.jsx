import s from "./Loader.module.css";

export const Loader = ({ fullPage = false, size }) => {
  // create a loader component , with fullPage and size props
  return (
    <div
      className={`${s.loader} ${fullPage ? s.fullPage : ""}`}
      style={{ width: size, height: size }}
    ></div>
  );
};

import s from "./Divider.module.css";

export const Divider = ({ children, style, height, color, childrenStyle }) => {
  return (
    <div
      className={s.divider_wrapper}
      style={{
        ...style,
      }}
    >
      <div
        className={s.divider}
        style={{
          height: height || "1px",
          backgroundColor: color || "#dbdbdb",
        }}
      ></div>
      <div
        className={s.divider_text}
        style={{
          ...childrenStyle,
        }}
      >
        {children}
      </div>
      <div
        className={s.divider}
        style={{
          height: height || "1px",
          backgroundColor: color || "#dbdbdb",
        }}
      ></div>
    </div>
  );
};

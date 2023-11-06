import s from "./Input.module.css";

export const Input = ({ style, ...props }) => {
  return (
    <input
      className={s.input}
      style={{
        ...style,
      }}
      {...props}
    />
  );
};

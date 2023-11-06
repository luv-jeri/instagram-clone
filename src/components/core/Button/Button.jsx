import s from "./Button.module.css";

export const Button = ({
  children,
  onClick,
  disabled = false,
  icon,
  style,
}) => {
  return (
    <button
      className={s.button_wrapper}
      onClick={onClick}
      style={{
        pointerEvents: disabled ? "none" : "auto",
        cursor: disabled ? "not-allowed" : "pointer",
        ...style,
      }}
    >
      {icon && (
        <div className={s.icon}>
          <img src={icon} />
        </div>
      )}
      {children}
    </button>
  );
};

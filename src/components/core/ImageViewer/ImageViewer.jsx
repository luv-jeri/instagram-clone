import s from "./ImageViewer.module.css";

export const ImageViewer = ({ src, alt }) => {
  return (
    <div className={s.wrapper}>
      <img
        className={s.photo}
        src={src}
        alt={alt}
        height={"100%"}
        width={"100%"}
      />
    </div>
  );
};

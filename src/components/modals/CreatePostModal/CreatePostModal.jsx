import s from "./CreatePostModal.module.css";
import { DropInput, ImageViewer } from "@components";
import { ArrowIcon } from "@icons";
import { useState } from "react";

export const CreatePostModal = () => {
  const [files, setFiles] = useState([]);

  console.log(files);

  return (
    <div className={s.wrapper}>
      <h4 className={s.title}>
        {files.length !== 0 ? <ArrowIcon /> : null}
        {files.length === 0 ? " Create new post" : "Next"}
      </h4>
      <div className={s.content}>
        {files.length === 0 ? (
          <DropInput files={files} setFiles={setFiles} />
        ) : (
          <ImageViewer
            src={URL.createObjectURL(files[0])}
            alt={files[0].name}
          />
        )}
      </div>
    </div>
  );
};

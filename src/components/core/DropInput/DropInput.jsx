import s from "./DropInput.module.css";
import { MediaIcon, CrossIcon } from "@icons";
import { Button } from "@components";
import { useState, useEffect } from "react";

export const DropInput = ({ files, setFiles }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName = "", setFileName] = useState();

  const handleCancel = () => {
    setFiles([]);
    setFileName("");
  };

  const handleInput = (event) => {
    const files = event.target.files;

    if (files.length > 0) {
      setFiles(files);
    }
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (event) => {
    setIsDragging(true);
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);

    const files = event.dataTransfer.files;

    if (files.length > 0) {
      setFiles(files);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (files.length > 0) {
      setFileName(files[0].name);
    }
  }, [files]);

  return (
    <div
      className={s.wrapper}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: !isDragging ? "transparent" : "#1a1a1a",
      }}
    >
      {fileName && (
        <div className={s.cross} onClick={handleCancel}>
          <CrossIcon color="white" />
        </div>
      )}
      <div className={s.content}>
        <MediaIcon />
        <h1> {fileName ? fileName : "Drag and drop your image here"}</h1>
        {!fileName ? <Button>Select from computer</Button> : null}
      </div>
      {!fileName && (
        <input
          className={s.input}
          type="file"
          onChange={handleInput}
          multiple={false}
        />
      )}
    </div>
  );
};

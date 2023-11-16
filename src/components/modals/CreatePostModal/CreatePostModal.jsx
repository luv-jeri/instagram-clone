import s from "./CreatePostModal.module.css";
import { DropInput, ImageViewer, Input, Button } from "@components";
import { ArrowIcon } from "@icons";
import { useState, useEffect } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../../../firebase";
import axios from "axios";

export const CreatePostModal = () => {
  const [files, setFiles] = useState([]);
  const [uploadedURL, setUploadedURL] = useState("");
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [caption, setCaption] = useState("");

  const post = async () => {
    const res = await axios.post("/posts", {
      description: caption,
      contentUrl: uploadedURL,
    });
  };

  const storage = getStorage(app);

  const uploadFile = (file) => {
    const currentDate = new Date().toDateString();
    const storageRef = ref(storage, `images/${file.name}-${currentDate}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setUploadedURL(downloadURL);
        });
      }
    );
  };

  useEffect(() => {
    console.log(files, "files");
    if (files.length > 0) {
      uploadFile(files[0]);
    }
  }, [files]);

  return (
    <div
      className={s.wrapper}
      style={{
        width: !open ? "45vw" : "65vw",
      }}
    >
      <h4 className={s.title}>
        {files.length !== 0 ? (
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setFiles([]);
              setOpen(false);
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setFiles([]);
              }
            }}
          >
            <ArrowIcon />{" "}
          </div>
        ) : null}
        {files.length === 0 ? (
          " Create new post"
        ) : (
          <span
            onClick={() => {
              setOpen(true);
            }}
            style={{
              cursor: "pointer",
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setOpen(true);
              }
            }}
          >
            Next
          </span>
        )}
      </h4>
      <div className={s.content}>
        <div className={s.left_content}>
          {files.length === 0 ? (
            <DropInput files={files} setFiles={setFiles} />
          ) : (
            <ImageViewer
              src={URL.createObjectURL(files[0])}
              alt={files[0].name}
            />
          )}
        </div>
        <div
          className={s.right_content}
          style={{
            width: !open ? "0" : "15vw",
          }}
        >
          <Input
            onChange={(e) => {
              setCaption(e.target.value);
            }}
          />
          <Button onClick={post}>
            <span>Post</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

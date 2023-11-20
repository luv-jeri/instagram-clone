import s from "./Content.module.css";
import { useState, useEffect } from "react";
import { PostBox, Stories } from "@components";

import axios from "axios";

export const Content = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPost = async () => {
    const res = await axios.get("/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <section className={s.container}>
      <div
        style={{
          width: "100%",
        }}
      >
        <Stories />
      </div>
      {posts.map((el, index) => {
        return (
          <PostBox
            key={index}
            contentUrl={el.contentUrl}
            createdAt={el.createdAt}
            description={el.description}
            username={el.userId.username}
          />
        );
      })}
    </section>
  );
};

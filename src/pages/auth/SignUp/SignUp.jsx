import s from "./SignUp.module.css";
import { Button, Divider, Input } from "@components";
import { FacebookIcon } from "@icons";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

export const SignUp = () => {
  const { signUp } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    signUp({ email, password, fullName, userName });
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.logo_wrapper}>
          <div className={s.logo}></div>
        </div>
        <h4>Sign up to see photos and videos from your friends.</h4>
        <Button
          style={{
            width: "80%",
            margin: "1rem auto",
          }}
        >
          <FacebookIcon
            height="16"
            width="16"
            style={{
              marginRight: "8px",
            }}
          />
          Login with facebook
        </Button>
        <Divider
          style={{
            margin: "1rem auto",
            width: "80%",
          }}
        >
          <h5>OR</h5>
        </Divider>
        <div className={s.form}>
          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
          />
          <Input
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            style={{
              width: "100%",
              margin: "1rem auto",
            }}
            onClick={handleSubmit}
          >
            Sign up
          </Button>
        </div>

        <p>
          Have an account? <Link to="/">Log in</Link>
        </p>
      </div>
    </div>
  );
};

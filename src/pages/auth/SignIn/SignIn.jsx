import s from "./SignIn.module.css";
import { Button, Divider, Input } from "@components";
import { FacebookIcon } from "@icons";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "@context/AuthContext";

export const SignIn = () => {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    signIn({ email, password });
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.logo_wrapper}>
          <div className={s.logo}></div>
        </div>

        <div className={s.form}>
          <Input
            placeholder="Username"
            onChange={(e) => setEmail(e.target.value)}
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
            Sign in
          </Button>
        </div>
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
        <p>
          Don't have an account? <Link to="sign_up">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

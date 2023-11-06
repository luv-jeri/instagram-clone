import s from "./SignUp.module.css";
import { Button, Divider, Input } from "@components";
import { FacebookIcon } from "@icons";
import { Link } from "react-router-dom";

export const SignUp = () => {
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
          <Input placeholder="Email" />
          <Input placeholder="Full Name" />
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button
            style={{
              width: "100%",
              margin: "1rem auto",
            }}
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

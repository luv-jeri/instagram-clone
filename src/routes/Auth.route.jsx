import { SignIn, SignUp } from "@pages";
import { Routes, Route } from "react-router-dom";

const AuthRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign_up" element={<SignUp />} />
    </Routes>
  );
};
export default AuthRoute;

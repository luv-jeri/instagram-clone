import "./App.css";
import AppRoute from "./routes/App.route";
import AuthRoute from "./routes/Auth.route";
import { useContext } from "react";
import { AuthContext } from "@context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return <>{user ? <AppRoute /> : <AuthRoute />}</>;
}

export default App;

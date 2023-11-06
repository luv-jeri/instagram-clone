import "./App.css";
import AppRoute from "./routes/App.route";
import AuthRoute from "./routes/Auth.route";

function App() {
  const user = null;
  return <>{user ? <AppRoute /> : <AuthRoute />}</>;
}

export default App;

import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Loader } from "@components";

export const AuthContext = createContext();

export const AuthWrapper = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const signIn = async ({ email, password }) => {
    try {
      const { data } = await axios.post("/users/login", {
        email,
        password,
      });

      localStorage.setItem(
        "user",
        JSON.stringify({
          token: data.data.token,
          user: data.data.user,
        })
      );

      setUser({
        token: data.data.token,
        user: data.data.user,
      });

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.data.token}`;
    } catch (e) {
      alert("Something went wrong");
      console.log(e);
    }
  };

  const signUp = async ({ email, password, fullName, userName }) => {
    try {
      const { data } = await axios.post("/users/signup", {
        email,
        username: userName,
        password,
        userInfo: {
          name: fullName,
        },
      });

      // local storage saved
      localStorage.setItem(
        "user",
        JSON.stringify({
          token: data.data.token,
          user: data.data.user,
        })
      );

      setUser({
        token: data.data.token,
        user: data.data.user,
      });

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.data.token}`;

      navigate("/");
    } catch (e) {
      console.log(e);
      alert("Something went wrong");
    }
  };

  const verify = async () => {
    try {
      const { status, data } = await axios.get("/users/verify"); // cookies and header are sent automatically

      if (status === 200) {
        const { user } = data;

        setUser({
          user,
          token: user.token,
        });

        localStorage.setItem(
          "user",
          JSON.stringify({
            token: user.token,
            user,
          })
        );

        axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    axios.defaults.headers.common["Authorization"] = "Bearer logout";
    axios.post("/users/logout");
  };

  useEffect(() => {
    verify();
  }, []);

  const value = {
    user,
    signIn,
    signUp,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Loader />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

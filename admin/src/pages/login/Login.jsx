import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ fontSize: 30, marginBottom: 50, fontWeight: 900 }}>
        ADMIN FOR CIAG.COM
      </div>
      <input
        style={{ padding: 10, marginBottom: 20, width: 200 }}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ padding: 10, marginBottom: 20, width: 200 }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleClick}
        style={{
          padding: 10,
          width: 150,
          backgroundColor: "teal",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;

import React from "react";
import { Link } from "react-router-dom";

function LoginButton() {
  return (
    <Link to="/로그인" style={linkStyle}>
      <button style={buttonStyle}>로그인</button>
    </Link>
  );
}

const linkStyle = {
  textDecoration: "none",
};

const buttonStyle = {
  backgroundColor: "white",
  color: "black",
  borderRadius: "50px",
  padding: "10px 20px",
  border: "none",
};

export default LoginButton;

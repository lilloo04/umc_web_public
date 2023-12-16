import React, { useState } from "react";

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center", // 수직 정렬
  };

  const buttonStyle = {
    backgroundColor: "white",
    color: "black",
    borderRadius: "50px",
    padding: "10px 20px",
  };

  const messageStyle = {
    marginRight: "10px",
  };

  let button, message;

  if (isLoggedIn) {
    button = (
      <button style={buttonStyle} onClick={handleLogoutClick}>
        로그인
      </button>
    );
    message = <div style={messageStyle}>로그인 해주세요!</div>;
  } else {
    button = (
      <button style={buttonStyle} onClick={handleLoginClick}>
        로그아웃
      </button>
    );
    message = <div style={messageStyle}>환영합니다!</div>;
  }

  return (
    <div style={containerStyle}>
      {button}
      {message}
    </div>
  );
}

export default LoginControl;

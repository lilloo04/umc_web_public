import React, { useState, useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [buttonColor, setButtonColor] = useState("gray");

  useEffect(() => {
    // 컴포넌트가 처음 마운트될 때 상태 초기화
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
  }, []); // 빈 배열은 컴포넌트가 처음 렌더링될 때만 실행되도록 합니다.

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("올바른 이메일을 입력해주세요.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&!])[A-Za-z\d@#$%^&!]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "비밀번호는 영문, 숫자, 특수문자를 포함하여 8자 이상이어야 합니다."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    validateEmail();
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    validatePassword();
  };

  const handleLogin = () => {
    // 이메일과 비밀번호 검증 로직 추가
    if (!emailError && !passwordError) {
      // 로그인 성공 시 버튼 색상을 파란색으로 변경
      setButtonColor("blue");
    }
  };

  return (
    <div
      style={{
        maxWidth: "100%",
        margin: "0",
        textAlign: "left",
      }}
    >
      <h2>이메일과 비밀번호를 입력해주세요</h2>
      <label style={{ display: "block", marginBottom: "8px" }}>
        <span style={{ display: "block", marginBottom: "4px" }}>
          이메일 주소
        </span>
        <input
          type="text"
          value={email}
          onChange={handleChangeEmail}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            boxSizing: "border-box",
          }}
        />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
      </label>
      <label style={{ display: "block", marginBottom: "8px" }}>
        <span style={{ display: "block", marginBottom: "4px" }}>비밀번호</span>
        <input
          type="password"
          value={password}
          onChange={handleChangePassword}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            boxSizing: "border-box",
          }}
        />
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
      </label>
      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          backgroundColor: buttonColor,
          color: "white",
          borderRadius: "5px",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        확인
      </button>
    </div>
  );
};

export default Login;

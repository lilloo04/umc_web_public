import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";

function Header() {
  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    background: "navy",
    color: "white",
  };

  const logoStyle = {
    width: "100%",
    height: "20px",
  };

  const navStyle = {
    display: "flex",
    flexGrow: 1, // 남은 공간을 채우도록 설정
  };

  const liStyle = {
    margin: "0 10px",
    listStyle: "none",
    display: "flex",
    alignItems: "center", // 세로 정렬
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    textAlign: "center", // 가운데 정렬
    display: "block", // 링크를 블록 요소로 만들어 전체 너비에 가운데 정렬
  };

  return (
    <header style={headerStyle}>
      <Link to="/" style={linkStyle}>
        <img
          style={logoStyle}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
        />
      </Link>

      <nav style={navStyle}>
        <ul style={{ listStyle: "none", display: "flex" }}>
          <li style={liStyle}>
            <Link to="/영화" style={linkStyle}>
              영화
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/TV프로그램" style={linkStyle}>
              TV프로그램
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/인물" style={linkStyle}>
              인물
            </Link>
          </li>
          <li style={liStyle}>
            <LoginButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

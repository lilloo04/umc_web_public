import React from "react";
import { Link as NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>해당 파일을 찾지 못했습니다.</h1>
      <p>주소가 잘못되었거나 더 이상 제공하지 않는 페이지입니다.</p>
      <NavLink to="/">메인 페이지로 이동</NavLink>
    </div>
  );
}

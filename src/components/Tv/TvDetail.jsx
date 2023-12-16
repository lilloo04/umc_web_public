// TvDetail.jsx
import React from "react";

function TvDetail(props) {
  const { tvData, isMouseOver } = props;

  const displayStyle = {
    display: isMouseOver ? "block" : "none", // 마우스를 올렸을 때 보이도록 설정
  };

  return (
    <div className="detailStyle" style={displayStyle}>
      <p>{tvData.title}</p>
      <p>{tvData.overview}</p>
    </div>
  );
}

export default TvDetail;

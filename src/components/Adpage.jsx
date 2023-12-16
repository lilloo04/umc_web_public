import React, { Component } from "react";
import AdImage from "./Ad"; // AdImage 함수를 불러옵니다.

class AdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldDisplayAd: true, // 광고 표시 여부를 초기값으로 설정
    };
  }

  // 광고 토글 메서드
  handleToggleClick = () => {
    this.setState((prevState) => ({
      shouldDisplayAd: !prevState.shouldDisplayAd, // 상태를 토글
    }));
  };

  render() {
    return (
      <div>
        {/* <h1>광고 페이지</h1> */}
        {/* AdImage 함수를 렌더링합니다. */}
        {this.state.shouldDisplayAd ? <AdImage /> : null}

        {/* 버튼을 추가하여 광고를 제어합니다. */}
        <button onClick={this.handleToggleClick}>
          {this.state.shouldDisplayAd ? "광고 숨기기" : "광고 보이기"}
        </button>
      </div>
    );
  }
}

export default AdPage;

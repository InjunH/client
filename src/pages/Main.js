import React from "react";

const Main = () => {
  return (
    <div className="main-container">
      <h2>main Content area</h2>
      <div className="main-area">
        <div>
          <h2>이번주 최다 당첨자</h2>
          <p>황인준</p>
        </div>
        <div>
          <h3>순위</h3>
          <ul>
            <li>1위 황인준</li>
            <li>1위 황인준</li>
            <li>1위 황인준</li>
            <li>1위 황인준</li>
            <li>1위 황인준</li>
            <li>1위 황인준</li>
            <li>1위 황인준</li>
          </ul>
        </div>
      </div>
      <div className="divider"></div>
      <div className="sub-area">
        <div>참여하기</div>
        <div>참여자 추가 하기</div>
        <div>누적 통계 보기</div>
      </div>
    </div>
  );
};

export default Main;

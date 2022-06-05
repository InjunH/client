import { Link } from "react-router-dom";
const ToolBar = () => {
  return (
    <div className="header">
      {/* <span>toolbar</span> */}
      <div>
        <Link to="/">
          <span>홈</span>
        </Link>
      </div>
      <div>
        <Link to="/join/user">
          <span style={{ float: "right" }}>참가자 추가하기</span>
        </Link>
        {/* <Link to="/auth/register">
        <span style={{ float: "right", marginRight: 15 }}>회원가입</span>
      </Link> */}
      </div>
    </div>
  );
};

export default ToolBar;

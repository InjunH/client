import React, { useState, useContext } from "react";
import CustomInput from "../components/CustomInput";
import { toast } from "react-toastify";
import axios from "axios";

const RegistJoinUser = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [department, setDepartment] = useState("");

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      if (userName < 1) throw new Error("참가자 이름이 너무 짧습니다");
      if (department < 2) throw new Error("부서명이 너무 짧습니다");
      console.log(userName, userEmail, department);

      const result = await axios.post("/addJoinUser", {
        userName,
        userEmail,
        department,
      });
      toast.success("회원가입 성공");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="join-container">
      <h2>RegistJoinUser</h2>
      <div className="join-area">
        <div>
          <form onSubmit={submitHandler} className="common-form card">
            {/* <div className="common-text-field">
              <label>프로필 이미지</label>
              <input type="file"></input>
            </div> */}
            <div>
              <CustomInput
                label="이름"
                value={userName}
                setValue={setUserName}
              />
            </div>
            <div>
              <CustomInput
                label="이메일"
                value={userEmail}
                setValue={setUserEmail}
              />
            </div>
            <div>
              {/* 선택하는 방식으로 변경 */}
              <CustomInput
                label="부서"
                value={department}
                setValue={setDepartment}
              />
            </div>
            <div className="common-text-field">
              <button type="submit" className="common-button">
                저장하기
              </button>
            </div>
          </form>
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
    </div>
  );
};

export default RegistJoinUser;

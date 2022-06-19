import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const ShowJoinUser = () => {
  const [joinUser, setJoinuser] = useState([]);
  useEffect(() => {
    axios
      .get("/findAllUser")
      .then((result) => {
        setJoinuser(result.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const userList = joinUser.map((user, index) => (
    <tr key={index}>
      <td>{user.userName}</td>
      <td>{user.department}</td>
      <td>{user.userEmail}</td>
    </tr>
  ));
  return (
    <div className="join-container">
      <h2>참여 유저 확인하기</h2>
      <div className="join-area">
        <table className="join-user-table">
          <thead>
            <tr>
              <th>이름</th>
              <th>부서</th>
              <th>이메일</th>
            </tr>
          </thead>
          <tbody>{userList}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowJoinUser;

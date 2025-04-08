import React from "react";
import "../styles/UserStatus.css"

interface UserStatusProps {
  isOnline: boolean;
}

const UserStatus: React.FC<UserStatusProps> = ({ isOnline }) => {
  console.log(isOnline);
  return <p>
    <span className={`status-dot ${isOnline ? 'online' : 'offline'}`}></span>
    {isOnline ? "온라인 상태입니다" : "오프라인 상태입니다"}</p>;
};

export default UserStatus;

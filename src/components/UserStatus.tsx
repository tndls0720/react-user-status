import React from "react";

interface UserStatusProps {
  isOnline: boolean;
}

const UserStatus: React.FC<UserStatusProps> = ({ isOnline }) => {
  console.log(isOnline);
  return <p>{isOnline ? "온라인 상태입니다" : "오프라인 상태입니다"}</p>;
};

export default UserStatus;

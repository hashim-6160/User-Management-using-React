import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice"
import UserCard from "../global/UserCard";

const UserProfile = ({ userData }) => {
  const dispatch = useDispatch();

  const imageUrl = userData?.image
    ? `http://localhost:3000/${userData.image}`
    : "https://via.placeholder.com/150";

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <UserCard userData={userData} handleLogout={handleLogout} />
    </div>
  );
};

export default UserProfile;

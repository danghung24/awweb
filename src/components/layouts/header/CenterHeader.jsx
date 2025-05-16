import React from "react";
import { useLocation } from "react-router-dom";
import { CenterHeaderContainer, MenuLink } from "./Centerheader.styled";

const menuItems = [
  { label: "Iphone", path: "/iphone" },
  { label: "Mac", path: "/mac" },
  { label: "IPad", path: "/ipad" },
  { label: "Tai Nghe , Loa", path: "/audio" },
  { label: "Phụ Kiện", path: "/accessories" },
  { label: "Tin Tức", path: "/news" },
  { label: "Bảo Hành", path: "/warranty" },
];

const CenterHeader = () => {
  const location = useLocation();

  return (
    <CenterHeaderContainer>
      {menuItems.map((item) => (
        <MenuLink
          key={item.path}
          to={item.path}
          className={location.pathname === item.path ? "active" : ""}
        >
          {item.label}
        </MenuLink>
      ))}
    </CenterHeaderContainer>
  );
};

export default CenterHeader;

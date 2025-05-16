import React from "react";
import { RightHeaderContainer, IconButton } from "./RightHeader.styled";
import { Icons } from "../../../assets/icons/Icons";



const RightHeader = () => {
  return (
    <RightHeaderContainer>
      <IconButton as={Icons.SearchIcon} />
      <IconButton as={Icons.Shopping} />
      <IconButton as={Icons.User} />
    </RightHeaderContainer>
  );
};

export default RightHeader;

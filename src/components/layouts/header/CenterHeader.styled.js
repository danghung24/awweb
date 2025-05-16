import styled from "styled-components";
import { Link } from "react-router-dom";

export const CenterHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  background-color: #fff;
  /* padding: 20px 0; */
  font-family: 'Arial', sans-serif;
`;

export const MenuLink = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  color: black;
  text-decoration: none;
  position: relative;
  padding-bottom: 4px;

  &.active::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: black;
  }

  &:hover {
    opacity: 0.7;
  }
`;

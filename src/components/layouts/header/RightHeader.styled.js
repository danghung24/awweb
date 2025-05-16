import styled from "styled-components";

export const RightHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-right: 20px;
`;

export const IconButton = styled.div`
  font-size: 20px;
  color: black;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #888;
  }
`;

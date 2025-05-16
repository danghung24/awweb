import styled from "styled-components";
import { Theme } from "../../../assets/styels/Theme";

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 500px;
  background-color: ${Theme.body}; 
  overflow: hidden;
`;

export const Slide = styled.div`
  opacity: ${(props) => (props.$active ? "1" : "0")};
  transition: opacity 0.5s ease-in-out;
  position: ${(props) => (props.$active ? "relative" : "absolute")};
  width: 100%;
  height: auto;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  color: white;
  padding: 10px;
  border-radius: 50%;
  z-index: 10;
  cursor: pointer;

  &.left {
    left: 20px;
  }

  &.right {
    right: 20px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 15px;
  width: 100%;
  z-index: 5;
`;

export const Dot = styled.div`
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: ${(props) => (props.$active ? "#007bff" : "#ccc")};
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
`;

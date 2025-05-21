// NewsSlider.styled.js
import styled from "styled-components";
import { Theme } from "../../../assets/styels/Theme";

export const SliderWrapper = styled.div`
  position: relative;
  padding: 24px;
  max-width: 1200px;
  margin: 20px auto;
  background: ${Theme.backgrond};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleBarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

export const TitleText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export const TimeLabel = styled.h3`
  font-size: 14px;
  font-weight: normal;
  color: #aaa;
`;

export const SliderContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

export const Card = styled.div`
  width: 360px;
  height: 480px;
  background: #222;
  padding: 16px;
  border-radius: 16px;
  text-align: left;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.15);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 12px;
`;

export const ProductName = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const ArrButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #666;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.left {
    left: -20px;
  }
  &.right {
    right: -20px;
  }
`;
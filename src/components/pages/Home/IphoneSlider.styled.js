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

export const SliderContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

export const Card = styled.div`
  width: 250px;
  height: 400px;
  background: #222;
  padding: 16px;
  border-radius: 16px;
  text-align: center;
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
  width: 125px;
  height: 140px;
  object-fit: contain;
  margin: 0 auto;
`;

export const ProductName = styled.div`
  font-size: 14px;
  margin-top: 12px;
`;

export const Price = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #ffb700;
`;

export const OldPrice = styled.div`
  font-size: 14px;
  color: #ccc;
  text-decoration: line-through;
  span {
    background: red;
    color: white;
    padding: 2px 4px;
    margin-left: 4px;
    border-radius: 4px;
    font-size: 12px;
  }
`;

export const Note = styled.div`
  font-size: 13px;
  color: orange;
`;

export const ArrowButton = styled.button`
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
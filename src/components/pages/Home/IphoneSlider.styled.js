import styled from "styled-components";

export const SliderWrapper = styled.div`
  position: relative;
  padding: 24px;
  background: #333;
  border-radius: 20px;
  display: flex;
  align-items: center;
`;

export const SliderContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  flex: 1;
`;

export const Card = styled.div`
  background: #222;
  padding: 16px;
  border-radius: 16px;
  text-align: center;
  color: white;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 12px;
`;

export const Title = styled.div`
  font-size: 14px;
  margin-bottom: 6px;
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
  margin-top: 4px;
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

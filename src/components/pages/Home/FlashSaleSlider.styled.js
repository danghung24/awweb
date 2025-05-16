// FlashSaleSlider.styled.js
import styled from "styled-components";

export const SliderContainer = styled.div`
  background: #2c2c2c;
  padding: 20px;
  border-radius: 16px;
  color: #fff;
  position: relative;
  overflow: hidden;
  max-width: 1200px;
  margin: 20px auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const TimeRange = styled.div`
  font-size: 14px;
  color: #ccc;
  text-align: center;
`;

export const Countdown = styled.div`
  font-size: 18px;
  background: #000;
  padding: 6px 12px;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
`;

export const SlideWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  flex: 1;
`;

export const ProductCard = styled.div`
  background: #1e1e1e;
  padding: 12px;
  border-radius: 12px;
  text-align: center;
  position: relative;
  text-decoration: none;
  color: inherit;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export const SoldOutLabel = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-weight: bold;
  padding: 6px;
  transform: rotate(-10deg);
`;

export const Title = styled.div`
  font-size: 14px;
  margin-top: 8px;
`;

export const Price = styled.div`
  color: #fdb927;
  font-size: 20px;
  font-weight: bold;
  margin-top: 4px;
`;

export const OldPrice = styled.div`
  color: #888;
  text-decoration: line-through;
  font-size: 14px;
  margin-top: 2px;
`;

export const DiscountBadge = styled.div`
  background: red;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  display: inline-block;
  font-size: 14px;
  margin-top: 4px;
`;

export const SaleInfo = styled.div`
  margin-top: 6px;
  font-size: 13px;
`;

export const ProgressTrack = styled.div`
  background: #ccc;
  border-radius: 10px;
  height: 10px;
  margin-top: 4px;
`;

export const ProgressFill = styled.div`
  background: orange;
  height: 10px;
  border-radius: 10px 0 0 10px;
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #666;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 0;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;

  &.left {
    left: -20px;
  }

  &.right {
    right: -20px;
  }

  &:hover {
    background: #999;
  }
`;

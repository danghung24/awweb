import React, { useState } from "react";
import {
  SliderWrapper,
  SliderContent,
  Card,
  Image,
  TitleBarWrapper,
  TitleText,
  ProductName,
  TimeLabel,
  ArrButton,
} from "./News.styled";
import { Icons } from "../../../assets/icons/Icons";

const products = [
  {
    id: 1,
    name: "WWDC 2025 khởi động ngày 9 tháng 6: Một tuần lễ bùng nổ công nghệ và đổi mới từ Apple",
    image: "/images/tekzone1.png",
    time: "1 giờ trước",
    link: ""
  },
  {
    id: 2,
    name: "Bí quyết kéo dài thời lượng pin iPhone 16/Plus/Pro/Pro Max/16e cả ngày dài: Hướng dẫn chi tiết từ A-Z",
    image: "/images/tekzone2.png",
    time: "1 ngày trước",
    link: ""
  },
  {
    id: 3,
    name: "Workshop dành cho các nhà làm phim nhí: Ai cũng có thể sáng tạo làm video trên iPad - Dựng bộ phim đầu tay",
    image: "/images/tekzone3.png",
    time: "1 ngày trước",
    link: ""
  },
  {
    id: 4,
    name: "Workshop dành cho các nhà làm phim nhí: Ai cũng có thể sáng tạo làm video trên iPad - Dựng bộ phim đầu tay",
    image: "/images/tekzone3.png",
    time: "1 ngày trước",
    link: ""
  }
];

const itemsPerPage = 3;

const NewsSlider = () => {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((prev) => Math.max(0, prev - itemsPerPage));
  };

  const next = () => {
    setStartIndex((prev) => (prev + itemsPerPage >= products.length ? 0 : prev + itemsPerPage));
  };

  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <SliderWrapper>
      <TitleBarWrapper>
        <TitleText>
          tek<span style={{ color: '#00c6ff' }}>zone</span>
        </TitleText>
      </TitleBarWrapper>

      <ArrButton className="left" onClick={prev}>
        <Icons.ArrowLeft />
      </ArrButton>

      <SliderContent>
        {visibleProducts.map((p) => {
          const CardContent = (
            <Card>
              <Image src={p.image} alt={p.name} />
              <ProductName>{p.name}</ProductName>
              <TimeLabel>{p.time}</TimeLabel>
            </Card>
          );
          return p.link ? (
            <a key={p.id} href={p.link} style={{ textDecoration: "none" }}>{CardContent}</a>
          ) : (
            <div key={p.id}>{CardContent}</div>
          );
        })}
      </SliderContent>

      <ArrButton className="right" onClick={next}>
        <Icons.ArrowRight />
      </ArrButton>
    </SliderWrapper>
  );
};

export default NewsSlider;

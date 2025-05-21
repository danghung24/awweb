import React, { useState } from "react";
import {
  SliderWrapper,
  SliderContent,
  Card,
  Image,
  TitleBarWrapper,
  TitleText,
  ProductName,
  Price,
  OldPrice,
  Note,
  ArrowButton
} from "./IphoneSlider.styled";
import { Icons } from "../../../assets/icons/Icons";

const products = [
  { id: 1, name: "ipad 16 Pro Max 512GB", price: 36990000, oldPrice: 40990000, discount: 9, note: "Online giá rẻ quá", image: "/images/ipadslider1.png", link: "" },
  { id: 2, name: "ipad 16 Pro 256GB", price: 28290000, oldPrice: 31990000, discount: 11, note: "Online giá rẻ quá", image: "/images/ipad-2.png", link: "" },
  { id: 3, name: "ipad 15 256GB", price: 18890000, oldPrice: 22990000, discount: 17, note: "Online giá rẻ quá", image: "/images/ipad-3.png", link: "" },
  { id: 4, name: "ipad 15 Plus 256GB", price: 22590000, oldPrice: 25990000, discount: 13, note: "Online giá rẻ quá", image: "/images/ipad-4.png", link: "" },
  { id: 5, name: "ipad 14 128GB", price: 15990000, oldPrice: 18990000, discount: 16, note: "Online giá rẻ quá", image: "/images/ipad-5.png", link: "" },
  { id: 6, name: "ipad 13 128GB", price: 13990000, oldPrice: 16990000, discount: 18, note: "Online giá rẻ quá", image: "/images/ipad-6.png", link: "" },
];

const itemsPerPage = 4;

const IpadSlider = () => {
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
      <Icons.Apple size={26} color="#FFFFFF"/>
        <TitleText>iPad</TitleText>
      </TitleBarWrapper> 

      <ArrowButton className="left" onClick={prev}>
        <Icons.ArrowLeft />
      </ArrowButton>

      <SliderContent>
        {visibleProducts.map((p) => {
          const CardContent = (
            <Card>
              <Image src={p.image} alt={p.name} />
              <ProductName>{p.name}</ProductName>
              <Price>{p.price.toLocaleString()}₫</Price>
              <OldPrice>{p.oldPrice.toLocaleString()}₫ <span>-{p.discount}%</span></OldPrice>
              <Note>{p.note}</Note>
            </Card>
          );
          return p.link ? (
            <a key={p.id} href={p.link} style={{ textDecoration: "none" }}>{CardContent}</a>
          ) : (
            <div key={p.id}>{CardContent}</div>
          );
        })}
      </SliderContent>

      <ArrowButton className="right" onClick={next}>
        <Icons.ArrowRight />
      </ArrowButton>
    </SliderWrapper>
  );
};

export default IpadSlider;

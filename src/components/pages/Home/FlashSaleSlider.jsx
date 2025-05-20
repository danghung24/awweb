// FlashSaleSlider.jsx
import React, { useEffect, useState } from "react";
import {
  SliderContainer,
  Header,
  Countdown,
  SlideWrapper,
  ProductGrid,
  ProductCard,
  Image,
  Title,
  Price,
  OldPrice,
  DiscountBadge,
  SaleInfo,
  ProgressTrack,
  ProgressFill,
  SoldOutLabel,
  ArrowButton,
  TimeRange,
} from "./FlashSaleSlider.styled";
import { Icons } from "../../../assets/icons/Icons";

const promoStart = new Date();
promoStart.setHours(8, 0, 0, 0);
const promoEnd = new Date();
promoEnd.setHours(23, 59, 59, 999);

const itemsPerView = 6;

const FlashSaleSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [timeNow, setTimeNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTimeNow(new Date()), 1000);
    const autoSlide = setInterval(() => {
      setStartIndex((prev) => (prev + itemsPerView >= 20 ? 0 : prev + itemsPerView));
    }, 8000);
    return () => {
      clearInterval(timer);
      clearInterval(autoSlide);
    };
  }, []);

  const isActive = timeNow >= promoStart && timeNow <= promoEnd;
  const remainingSeconds = Math.max(0, Math.floor((promoEnd - timeNow) / 1000));
  const formatTime = (t) => {
    const h = String(Math.floor(t / 3600)).padStart(2, "0");
    const m = String(Math.floor((t % 3600) / 60)).padStart(2, "0");
    const s = String(t % 60).padStart(2, "0");
    return `${h} : ${m} : ${s}`;
  };

  const productList = Array.from({ length: 20 }).map((_, index) => ({
    id: index + 1,
    name: `Sản phẩm ${index + 1}`,
    image: "/images/demo.png",
    originalPrice: 11990000,
    discountPercent: 17,
    quantityLeft: index % 6,
    total: 5,
    link: `/product/${index + 1}`,
  }));

  const visibleProducts = productList.slice(startIndex, startIndex + itemsPerView);

  return (
    <SliderContainer>
      <Header>
        <TimeRange>Đang diễn ra<br />08:00 - 23:59</TimeRange>
        <h2>⚡ FLASHSALE</h2>
        <Countdown>KẾT THÚC TRONG<br />{formatTime(remainingSeconds)}</Countdown>
      </Header>

      <SlideWrapper>
        <ArrowButton className="left" onClick={() => setStartIndex((prev) => Math.max(0, prev - itemsPerView))}>
          <Icons.ArrowLeft size={24} />
        </ArrowButton>

        <ProductGrid>
          {visibleProducts.map((product) => {
            const isSoldOut = product.quantityLeft === 0;
            const finalPrice = Math.ceil((product.originalPrice * (100 - product.discountPercent)) / 100 / 1000) * 1000;
            const percent = Math.round((product.quantityLeft / product.total) * 100);

            const content = (
              <>
                <Image src={product.image} alt={product.name} />
                {isSoldOut && <SoldOutLabel>CHÁY SUẤT</SoldOutLabel>}
                <Title>{product.name}</Title>
                <Price>{finalPrice.toLocaleString()}₫</Price>
                <OldPrice>{product.originalPrice.toLocaleString()}₫</OldPrice>
                <DiscountBadge>-{product.discountPercent}%</DiscountBadge>
                <SaleInfo>🔥 Còn {product.quantityLeft}/{product.total}</SaleInfo>
                <ProgressTrack>
                  <ProgressFill style={{ width: `${percent}%` }} />
                </ProgressTrack>
              </>
            );

            return isActive ? (
              <ProductCard key={product.id} as="a" href={product.link}>
                {content}
              </ProductCard>
            ) : (
              <ProductCard key={product.id} as="div">
                {content}
              </ProductCard>
            );
          })}
        </ProductGrid>

        <ArrowButton className="right" onClick={() => setStartIndex((prev) => (prev + itemsPerView >= productList.length ? 0 : prev + itemsPerView))}>
          <Icons.ArrowRight size={24} />
        </ArrowButton>
      </SlideWrapper>
    </SliderContainer>
  );
};

export default FlashSaleSlider;

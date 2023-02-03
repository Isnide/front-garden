import { useState } from "react";

import { CTA } from "./components/CTA";
import { TitleCard } from "./components/TitleCard";
import * as S from "./styles";
import { SlideView } from "./components/Carousel";

export default function HomePage() {
  return (
    <S.Wrapper>
      <S.HeroWrapper>
        <TitleCard />
        <CTA />
      </S.HeroWrapper>
      <S.CarouselWrapper>
        <SlideView />
      </S.CarouselWrapper>
    </S.Wrapper>
  );
}

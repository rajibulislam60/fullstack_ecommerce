import React from "react";
import Container from "./Container";
import UpcomingBrand from "./UpcomingBrand";
import TopSelling from "./TopSelling";

const SecondBanner = () => {
  return (
    <div>
      <Container>
        <div className="flex gap-3">
          <UpcomingBrand />
          <TopSelling />
        </div>
      </Container>
    </div>
  );
};

export default SecondBanner;

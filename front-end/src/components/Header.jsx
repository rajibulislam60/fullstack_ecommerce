import React from "react";
import Marquee from "react-fast-marquee";
import Container from "./Container";

const Header = () => {
  return (
    <div className="bg-primary text-white">
      <Container>
        <div className="py-5">
          <h3 className="text-[14px] font-normal leading-5">
            <Marquee pauseOnHover="false">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </Marquee>
          </h3>
        </div>
      </Container>
    </div>
  );
};

export default Header;

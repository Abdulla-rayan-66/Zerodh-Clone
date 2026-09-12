import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <div>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Kite is a powerful, intuitive trading platform designed for retail investors to invest in stocks, derivatives, mutual funds, and more with speed and ease."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        productDescription="Console is a powerful, intuitive trading platform designed for retail investors to invest in stocks, derivatives, mutual funds, and more with speed and ease."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Coin is a comprehensive financial platform that offers a wide range of investment options and tools for both novice and experienced investors."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Kite Connect API is a powerful, intuitive trading platform designed for retail investors to invest in stocks, derivatives, mutual funds, and more with speed and ease."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity Mobile"
        productDescription="Varsity is a comprehensive educational platform that offers a wide range of investment options and tools for both novice and experienced investors."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <Universe />
    </div>
  );
}

export default ProductsPage;

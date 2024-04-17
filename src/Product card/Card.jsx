import React from "react";
import ProductCards from "./ProductCards";
import { CardData } from "./CardsData";

function CardListing() {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-7    ">
        <p className="text-4xl font-medium">Featured Products</p>
        <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-3 mt-10">
          {CardData.map(({ img, hover_img, title, price }, ind) => (
            <ProductCards
              key={ind}
              img={img}
              hover_img={hover_img}
              title={title}
              price={price}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CardListing;

import React from "react";
import { OffersData } from "./Offer.js";
import Offercard from "./Offercard";

function Offers() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 max-w-7xl mx-auto px-10 mt-7 ">
      {OffersData.map(({ title, heading, Icon }, ind) => {
        return (
          <Offercard key={ind} Icon={Icon} title={title} heading={heading} />
        );
      })}
    </div>
  );
}

export default Offers;

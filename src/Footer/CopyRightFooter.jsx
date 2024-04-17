import React from "react";

function CopyRightFooter() {
  return (
    <>
      <div className="grid  bg-black px-16 py-5 lg:grid-cols-2 md:grid-cols-1 gap-5  place-items-center border-t-[0.5px]  ">
        <p className="text-white font-medium text-justify">
          © 2023 Miniture All rights reserved. Designed by Novaworks
        </p>
        <img
          className="w-72"
          src="../../public/Footer/payment_icon.svg"
          alt="this is footer img"
        />
      </div>
    </>
  );
}

export default CopyRightFooter;

import React from "react";
import MyCardCategory from "./MyCardCategory";
import { CategoryCarddata } from "./CardData";
import CategorySlider from "./CategorySlider";

function Category() {
  return (
    <div className="flex flex-col justify-center items-center max-w-7xl mx-auto">
      <h1 className="text-3xl font-medium ">Explor Popular Categories</h1>
      <div className="relative w-full h-full">
        <CategorySlider />
      </div>
    </div>
  );
}

export default Category;

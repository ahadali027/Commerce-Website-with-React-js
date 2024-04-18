import React from "react";
import CardStructure from "./CardStructure";
import { BlogsData } from "./BlogCardsData";
import BlogsTitle from "./BlogsTitle";

function BlogsCard() {
  return (
    <div className="max-w-7xl mx-auto mt-10 p-5">
      <BlogsTitle />
      <div className="max-w-7xl mx-auto mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {BlogsData.map(
          ({ img, publisher, date, title, about, button }, ind) => (
            <CardStructure
              key={ind}
              img={img}
              publisher={publisher}
              date={date}
              title={title}
              about={about}
              button={button}
            />
          )
        )}
      </div>
    </div>
  );
}

export default BlogsCard;

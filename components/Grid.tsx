import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem
            key={item.id}
            id={item.id}
            className={item.className}
            title={item.title}
            titleClassName={item.titleClassName}
            description={item.description}
            img={item.img}
            imgClassName={item.imgClassName}
            spearImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;

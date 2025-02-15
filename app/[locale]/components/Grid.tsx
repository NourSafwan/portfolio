"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { useTranslations } from "next-intl";

// Define the type for each item in the gridItems array
interface GridItem {
  id: number;
  className?: string;
  title: string;
  titleClassName?: string;
  description: string;
  img?: string;
  imgClassName?: string;
  spearImg?: string; 
}

// const classes= [
//   "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] select-none",
//   "lg:col-span-2 md:col-span-3 md:row-span-2 select-none",
//   "lg:col-span-2 md:col-span-3 md:row-span-2 select-none",
//   "lg:col-span-2 md:col-span-3 md:row-span-1 select-none",
//   "md:col-span-3 md:row-span-2 select-none",
//   "lg:col-span-2 md:col-span-3 md:row-span-1 select-none"
// ]

const Grid = () => {
  const t = useTranslations("main");
  const gridItems = t.raw("gridItems") as GridItem[]; // Cast the raw data to GridItem[]

  console.log(gridItems);
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item: GridItem) => (
          <BentoGridItem
            key={item.id}
            id={item.id}
            className={item.className}
            title={item.title}
            titleClassName={item.titleClassName}
            description={item.description}
            img={item.img}
            imgClassName={item.imgClassName}
            spearImg={item.spearImg} 
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
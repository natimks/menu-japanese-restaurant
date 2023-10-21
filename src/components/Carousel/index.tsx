"use client";

import { useEffect, useState } from "react";

import FoodDetails from "../FoodDetails";
import FoodPicture from "../FoodPicture";

import styles from "./carousel.module.scss";

import { IFoodData } from "@/interfaces/foods";

interface IProps {
  foods: IFoodData[];
  activeId: string;
}

export default function Carousel({ foods, activeId }: IProps) {
  const [visibleItems, setVisibleItems] = useState<IFoodData[] | null>(null);

  const [activeIndex, setActiveIndex] = useState(
    foods.findIndex((food) => food.id === activeId)
  );

  useEffect(() => {
    const items = [...foods];

    const indexInArrayScope =
      ((activeIndex % items.length) + items.length) % items.length;

    const visibleItems = [...items, ...items].slice(
      indexInArrayScope,
      indexInArrayScope + 3
    );

    setVisibleItems(visibleItems);
  }, [foods, activeIndex]);

  const handleChangeActiveIndex = (newDirection: number) => {
    setActiveIndex((prevActiveIndex) => prevActiveIndex + newDirection);
  };

  if (!visibleItems) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <div
          className={styles.wrapper}
          onClick={() => handleChangeActiveIndex(1)}
        >
          {visibleItems?.map((item) => (
            <div key={item.id} className={styles.food}>
              <FoodPicture food={item} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.details}>
        <FoodDetails data={foods[0]} />
      </div>
    </div>
  );
}

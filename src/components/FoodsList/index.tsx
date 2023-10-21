"use client"

import Link from "next/link";

import FoodPicture from "../FoodPicture";

import styles from "./foodsList.module.scss";

import { restaurantFont } from "@/fonts";
import { IFoodData } from "@/interfaces/foods";
import { motion } from "framer-motion";

interface IProps {
  foods: IFoodData[];
}

export default function FoodsList({ foods }: IProps) {
  return (
    <>
      <motion.h1 className={`${restaurantFont.className} ${styles.title}`}>
        Menu
      </motion.h1>
      <section className={styles.foods}>
        {foods.map((food) => (
          <div
            key={food.id}
            className={`${styles.imageContainer} ${styles[food.id]}`}
          >
            <Link href={`/food/${food.id}`}>
              <FoodPicture food={food} />
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}

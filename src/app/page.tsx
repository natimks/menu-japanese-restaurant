import styles from "./page.module.scss";

import FoodsList from "@/components/FoodsList";
import { IFoodData } from "@/interfaces/foods";

async function getData(): Promise<{ data: IFoodData[] }> {
  const res = await fetch("http://localhost:3000/api/foods");

  if (!res.ok) {
    throw new Error("Falha ao buscar cardápio");
  }

  return res.json();
}

export default async function Home() {
  const res = await getData();

  return (
    <main className={styles.main}>
      <FoodsList foods={res.data} />
    </main>
  );
}

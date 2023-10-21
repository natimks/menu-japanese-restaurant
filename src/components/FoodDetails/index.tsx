import { Quicksand } from "next/font/google";

import styles from "./foodDetails.module.scss";

import { restaurantFont } from "@/fonts";
import { IFoodData } from "@/interfaces/foods";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

interface IProps {
  data: IFoodData;
}

export default function FoodDetails({ data }: IProps) {
  const { id, name, details } = data;

  return (
    <div className={quicksand.className}>
      <h1 className={`${restaurantFont.className} ${styles.title}`}>
        {name}
      </h1>
      <div className={styles.details}>
        <h2 className={styles.subtitle}>Informações</h2>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.label}>Valor</td>
              <td>{details.value}</td>
            </tr>
            <tr>
              <td className={styles.label}>Quantidade</td>
              <td>{(details.qtd)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.details}>
        <h2 className={styles.label}>Ingredientes</h2>
      </div>
    </div>
  );
}

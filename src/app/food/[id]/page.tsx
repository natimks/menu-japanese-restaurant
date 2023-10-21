import Carousel from "@/components/Carousel";
import { IFoodData } from "@/interfaces/foods";

interface IProps {
  params: {
    id: string;
  };
}

async function getData(): Promise<{ data: IFoodData[] }> {
  const res = await fetch("http://localhost:3000/api/foods");

  if (!res.ok) {
    throw new Error("Falha ao buscar cardápio");
  }

  return res.json();
}

export default async function Food({ params: { id } }: IProps) {
  const res = await getData();

  return <Carousel foods={res.data} activeId={id} />;
}

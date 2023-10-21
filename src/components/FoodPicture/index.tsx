import Image, { StaticImageData } from "next/image";
import ImageNiguiriSalmao from "@public/foods/niguiri-camarao.svg";
import ImageSushiOvas from "@public/foods/sushi-ovas.svg";
import ImageTemaki from "@public/foods/temaki.svg";
import ImageUramaki from "@public/foods/uramaki.svg";
import ImageUramakiSalmao from "@public/foods/uramaki-salmao.svg";
import ImageNiguiri from "@public/foods/niguiri.svg";

import { IFoodData } from "@/interfaces/foods";

const foodsImage: Record<string, StaticImageData> = {
  "niguiri-salmao": ImageNiguiriSalmao,
  "sushi-ovas": ImageSushiOvas,
  "temaki": ImageTemaki,
  "uramaki": ImageUramaki,
  "uramaki-salmao": ImageUramakiSalmao,
  "niguiri": ImageNiguiri,
};

interface IProps {
  food: IFoodData;
}

export default function FoodPicture({ food }: IProps) {
  return (
    <Image
      src={foodsImage[food.id] || ImageNiguiriSalmao}
      alt={`${food.name} Food` || ""}
      priority
    />
  );
}

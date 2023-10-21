export interface IFoodData {
  id: string;
  name: string;
  details: {
    value: number;
    qtd: number;
  };
}

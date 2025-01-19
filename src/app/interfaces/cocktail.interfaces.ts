export interface Cocktail {
    drinks: any;
    idDrink: string;
    strDrink: string;
    strCategory: string;
    strAlcoholic: string;
    strDrinkThumb: string;
    dateModified: string | null;
    ingredients: { name: string; measure: string; image?: string }[];
  }
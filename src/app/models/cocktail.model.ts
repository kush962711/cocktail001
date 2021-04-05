export class Cocktail {
  constructor(
    public name: String,
    public imgThumb: String,
    public id: String,
    public instructions?: String,
    public ingredient1?: String,
    public ingredient2?: String,
    public ingredient3?: String,
    public ingredient4?: String,
    public ingredient5?: String,
    public ingredient6?: String,
    public ingredient7?: String,
    public ingredient8?: String,
    public measure1?: String,
    public measure2?: String,
    public measure3?: String,
    public measure4?: String,
    public measure5?: String,
    public measure6?: String,
    public measure7?: String,
    public measure8?: String,
  ) {
  }

  static transform(item: any): Cocktail {
    return new Cocktail(
      item.strDrink,
      item.strDrinkThumb,
      item.idDrink,
      item.strInstructions ? item.strInstructions : null,
      item.strIngredient1 ? item.strIngredient1 : null,
      item.strIngredient2 ? item.strIngredient2 : null,
      item.strIngredient3 ? item.strIngredient3 : null,
      item.strIngredient4 ? item.strIngredient4 : null,
      item.strIngredient5 ? item.strIngredient5 : null,
      item.strIngredient6 ? item.strIngredient6 : null,
      item.strIngredient7 ? item.strIngredient7 : null,
      item.strIngredient8 ? item.strIngredient8 : null,
      item.strMeasure1 ? item.strMeasure1 : null,
      item.strMeasure2 ? item.strMeasure2 : null,
      item.strMeasure3 ? item.strMeasure3 : null,
      item.strMeasure4 ? item.strMeasure4 : null,
      item.strMeasure5 ? item.strMeasure5 : null,
      item.strMeasure6 ? item.strMeasure6 : null,
      item.strMeasure7 ? item.strMeasure7 : null,
      item.strMeasure8 ? item.strMeasure8 : null
    );
  }
}

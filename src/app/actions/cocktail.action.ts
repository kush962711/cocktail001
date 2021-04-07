import { Cocktail } from './../models/Cocktail.model';

export class GetCocktail {
    static readonly type = '[Cocktail]  Get';

    constructor(public payload: Cocktail){}
}

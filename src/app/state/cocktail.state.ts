import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetCocktail } from '../actions/cocktail.action';
import { Cocktail } from './../models/Cocktail.model';
import { Injectable } from '@angular/core';


export class CocktailStateModel {
    cocktail : Cocktail;
}

@State<CocktailStateModel>({
    name: 'cocktails',
    defaults: {
        cocktail: null
    }
})

@Injectable()
export class CocktailState{
    @Selector() static getCocktails(state: CocktailStateModel){
        return state.cocktail;
    }

    @Action(GetCocktail) get(ctx: StateContext<CocktailStateModel>,  {payload} : GetCocktail) {
            ctx.setState(
                {
                    cocktail:payload
                }
            );
          }

    
        
  } 




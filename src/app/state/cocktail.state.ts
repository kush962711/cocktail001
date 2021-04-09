import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetCocktail, GetCocktails } from '../actions/cocktail.action';
import { Cocktail } from './../models/Cocktail.model';
import { Injectable } from '@angular/core';


export class CocktailStateModel {
    cocktail : Cocktail;
    cocktails : Cocktail[];
}

@State<CocktailStateModel>({
    name: 'cocktails',
    defaults: {
        cocktail: null,
        cocktails: []
    }
})

@Injectable()
export class CocktailState{
    @Selector() static getCocktail(state: CocktailStateModel){
        return state.cocktail;
    }

    @Selector() static getCocktails(state: CocktailStateModel){
        return state.cocktails;
    }

    @Action(GetCocktail) get(ctx: StateContext<CocktailStateModel>,  {payload} : GetCocktail) {
            ctx.patchState(
                {
                    cocktail:payload
                }
            );
        
        
    }

    @Action(GetCocktails) getall(ctx: StateContext<CocktailStateModel>, action : GetCocktails) {
        ctx.patchState(
            {
                cocktails:action.payload
            }
        );
    }   
} 




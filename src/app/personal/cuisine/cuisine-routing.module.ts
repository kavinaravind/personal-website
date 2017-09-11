import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { AuthGuard } from "../../_services/auth-guard.service";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { CuisineComponent } from './cuisine.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const cuisineRoutes: Routes = [
    { path: '', component: CuisineComponent, children: [
        { path: 'shopping-list', component: ShoppingListComponent },
        { path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
        ]}
    ]}
]; 

@NgModule({
    imports: [
        RouterModule.forChild(cuisineRoutes)
    ],
    exports: [RouterModule],
    providers: [
        AuthGuard
    ]
})
export class CuisineRoutingModule {} 
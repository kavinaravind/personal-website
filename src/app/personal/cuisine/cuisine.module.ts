import { NgModule } from "@angular/core";
import { SharedModule } from "../../_shared/shared.module";
import { MdTabsModule, MdSidenavModule } from "@angular/material";
import { CuisineRoutingModule } from "./cuisine-routing.module";

import { CuisineComponent } from "./cuisine.component";

import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item/recipe-item.component";

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";

@NgModule({
    declarations: [

        // cuisine home
        CuisineComponent,

        // recipes
        RecipesComponent,
        RecipeStartComponent,
        RecipeListComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
        RecipeItemComponent,

        // shopping list
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [
        SharedModule,
        MdTabsModule,
        MdSidenavModule,
        CuisineRoutingModule,
    ]
})
export class CuisineModule {}
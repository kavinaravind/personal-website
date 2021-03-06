import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ShoppingListComponent } from "../shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "../shopping-list/shopping-edit/shopping-edit.component";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class ShoppingListModule {}
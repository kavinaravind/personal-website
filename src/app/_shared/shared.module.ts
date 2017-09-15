import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DropdownDirective } from './dropdown.directive';
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        DropdownDirective
    ],
    imports: [
        CommonModule,        
        MaterialModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,        
        MaterialModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        DropdownDirective
    ]
})
export class SharedModule {}
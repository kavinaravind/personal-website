import { NgModule } from "@angular/core";

import { SignupComponent } from "../_auth/signup/signup.component";
import { SigninComponent } from "../_auth/signin/signin.component";
import { FormsModule } from "@angular/forms";
import { AuthRoutingModule } from "../_auth/auth-routing.module";

@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent
    ],
    imports: [
        FormsModule,
        AuthRoutingModule
    ]
})
export class AuthModule {}
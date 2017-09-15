import { NgModule } from "@angular/core";
import { SharedModule } from "../_shared/shared.module";
import { AuthRoutingModule } from "../_auth/auth-routing.module";

import { SignupComponent } from "../_auth/signup/signup.component";
import { SigninComponent } from "../_auth/signin/signin.component";

@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent
    ],
    imports: [
        SharedModule,
        AuthRoutingModule
    ]
})
export class AuthModule {}
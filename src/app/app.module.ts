import { NgModule, APP_INITIALIZER, Injectable, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./_shared/shared.module";
import { ShoppingListModule } from "./personal/cuisine/shopping-list/shopping-list.module";
import { AuthModule } from "./_auth/auth.module";
import { CoreModule } from "./core/core.module";
import { BlogModule } from "./public/blog/blog.module";
import { PersonalModule } from "./personal/personal.module";

import { AppComponent } from './app.component';
import { NotFoundComponent } from "./not-found/not-found.component";

import { StartupService } from "./_services/startup.service";
import { LAZY_MAPS_API_CONFIG, LazyMapsAPILoaderConfigLiteral, AgmCoreModule } from '@agm/core';
import { PublicModule } from "./public/public.module";
import { CuisineModule } from "./personal/cuisine/cuisine.module";

export function startupServiceFactory(startupService: StartupService): Function {
  return () => startupService.load();
}

@Injectable()
class GoogleMapsConfig implements LazyMapsAPILoaderConfigLiteral, OnInit {
  
  public apiKey: string;
  
  constructor(private startup: StartupService) { }

  ngOnInit() {
    this.apiKey = this.startup.startupData.mapKey;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    CoreModule,
    PublicModule,
    BlogModule,
    PersonalModule,
    CuisineModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyALoB65r4Dm6PuLPb77YhVOtQLadltuI7s'
    })
  ],
  providers: [
    StartupService,
    {
        // Provider for APP_INITIALIZER
        provide: APP_INITIALIZER,
        useFactory: startupServiceFactory,
        deps: [StartupService],
        multi: true
    }
    // ,{
    //   provide: LAZY_MAPS_API_CONFIG,
    //   useClass: GoogleMapsConfig,
    //   deps: [StartupService]
    // }
],
  bootstrap: [AppComponent]
})

export class AppModule { }

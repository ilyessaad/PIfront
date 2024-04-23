import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {HttpClientModule, HttpClient, provideHttpClient} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CompetitionComponent } from './competition/competition.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddComponent } from './competition/add/add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditComponent } from './competition/edit/edit.component';
import { TeamComponent } from './team/team.component';
import { AddtComponent } from './team/addt/addt.component';
import { EdittComponent } from './team/editt/editt.component';
import { DetailsComponent } from './competition/details/details.component';
import { VoteComponent } from './vote/vote.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    NavbarComponent,
    AddComponent,
    EditComponent,
    TeamComponent,
    AddtComponent,
    EdittComponent,
    DetailsComponent,
    VoteComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',

    }),
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

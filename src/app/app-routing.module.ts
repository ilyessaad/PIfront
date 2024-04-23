import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompetitionComponent} from "./competition/competition.component";
import {AddComponent} from "./competition/add/add.component";
import {EditComponent} from "./competition/edit/edit.component";
import {TeamComponent} from "./team/team.component";
import {AddtComponent} from "./team/addt/addt.component";
import {EdittComponent} from "./team/editt/editt.component";
import {DetailsComponent} from "./competition/details/details.component";

const routes: Routes = [
  { path: 'competitions', component: CompetitionComponent },
  { path: 'competitions/ajouterCompt', component: AddComponent },
  { path: 'competitions/edit/:competitionId',component:EditComponent},
  { path: 'competitions/more/:competitionId',component:DetailsComponent},
  { path: 'teams', component: TeamComponent },
  { path: 'teams/ajouterTeam', component: AddtComponent },
  { path: 'teams/editt/:idTeam',component:EdittComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

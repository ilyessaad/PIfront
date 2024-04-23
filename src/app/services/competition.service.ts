import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Competition} from "../models/competition.model";
import {Vote} from "../models/vote.model";

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http:HttpClient) { }

  retrieveAll():Observable<Competition[]>{
    return this.http.get<Competition[]>("http://localhost:8078/getAllCompetition")
  }
  addCompetition(data:any):Observable<any>{
    return this.http.post("http://localhost:8078/addCompetition",data);
  }
  updateCompetition(data:any):Observable<any>{
    return this.http.put("http://localhost:8078/update",data);
  }
  getCompetition(competitionId:any): Observable<Competition[]> {
    return this.http.get<Competition[]>("http://localhost:8078/getCompetitionId/" + competitionId);
  }

  deleteCompetition(competitionId:any):Observable<any>{
    return this.http.delete("http://localhost:8078/delete/" + competitionId)
  }
  affectTeamToCompetition(competitionId:any,teamId:any,data:any):Observable<any>{
    return this.http.post("http://localhost:8078/affecter-equipe/" + competitionId + "/" + teamId,data );
  }
  createVote(teamId: number, competitionId: number, userId: number, data: any): Observable<Vote> {
    return this.http.post<Vote>(`http://localhost:8078/createVote/${teamId}/${competitionId}/${userId}`, data);
  }
}

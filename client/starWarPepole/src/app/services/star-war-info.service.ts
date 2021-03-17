import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { film } from '../model/film';
import { specy } from '../model/specy';
import starWarPerson from '../model/starWarPerson';

@Injectable({
  providedIn: 'root'
})
export class StarWarInfoService {

  constructor(private http: HttpClient) { }
  getAllPepole(page?: number): Observable<{ results: starWarPerson[], count: number }> {
    page = page - 1;
    const url = environment.url + 'people' + '?p=' + page;
    return this.http.get<{ results: starWarPerson[], count: number }>(url).pipe(catchError(err => {
      throw err;
    }));
  }
  getOnePerson(id: string): Observable<starWarPerson> {
    return this.http.get<starWarPerson>(environment.url + 'people/' + id).pipe(catchError(err => {
      throw err;
    }));
  }
  ///
  //retrive the bantch of the films data
  //
  async getFilms(ids: string[]): Promise<film[]> {
    if (ids.length == 0) {
      return new Array<film>();
    }
    const FetchFilemList = ids.map(id => { return this.getFilm(id) });
    const filmsArr = await forkJoin(FetchFilemList).pipe(catchError(err => {
      throw err;
    })).toPromise();
    return filmsArr;
  }
  getFilm(id: string): Observable<film> {
    return this.http.get<film>(environment.url + 'films/' + id);
  }
  async getSpecies(ids: string[]): Promise<specy[]> {
    if (ids.length == 0) {
      return new Array<specy>();
    }
    const FetchspecyList = ids.map(id => { return this.getspecy(id) });
    const spices = await forkJoin(FetchspecyList).pipe(catchError(err => {
      throw err;
    })).toPromise();
    return spices;
  }
  getspecy(id): Observable<specy> {
    return this.http.get<specy>(environment.url + 'species/' + id);
  }
}

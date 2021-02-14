import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PicsModel } from '../pics-component/pics-model';

@Injectable({
  providedIn: 'root'
})
export class PicsService {

  constructor(private http: HttpClient) { }

  getPics(sortType?: string, name?: string): Observable<any> {
    let pathVariable = '';
    let url = "https://pics-repo-server.herokuapp.com/api/picture?";
    if (sortType != '') pathVariable += 'SortBy=' + sortType + "&";
    if (name != '') pathVariable += 'Name=' + encodeURI(name);
    return this.http.get(url + pathVariable);
  }
}

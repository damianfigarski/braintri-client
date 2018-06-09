import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { Position } from '../model/position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http: HttpClient) { }

  save(position: Position): Observable<any> {
    return this.http.post(AppComponent.API_URL + '/create-position', position);
  }

  getAll(): Observable<any> {
    return this.http.get(AppComponent.API_URL + '/positions');
  }

}

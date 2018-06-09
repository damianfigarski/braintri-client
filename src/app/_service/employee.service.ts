import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(AppComponent.API_URL + '/employees');
  }

  save(employee: Employee): Observable<any> {
    return this.http.post(AppComponent.API_URL + '/create', employee);
  }

  delete(id: number) {
    return this.http.delete(AppComponent.API_URL + '/delete/' + id);
  }

  search(search: string): Observable<any> {
    return this.http.get(AppComponent.API_URL + '/filtered-employees?search=' + search);
  }

}

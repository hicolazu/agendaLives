import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ResponsePageable } from '../model/responsePageable.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiUrl = 'http://localhost:8080/lives';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getLivesWithFlag(flag: string): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(`${this.apiUrl}?flag=${flag}`);
  }
}

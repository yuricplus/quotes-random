import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  private quoteApi = "https://type.fit/api/quotes"

  constructor(
    private http: HttpClient,
  ) { }

  getQuotes(): Observable<any> {
    return this.http.get<any>(this.quoteApi)
        .pipe(map(response => response as any | any));
  }
}
 
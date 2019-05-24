import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PixinService {


  endpoint = 'https://localhost:5001/api/images/';
  imageData: any;
  sanitizedImageData: any;
  images: string[];
  responseData: string;

  constructor(private http: HttpClient) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
  }

  private extractData(res: Response) {
    return res || { };
  }

  public getImages(path: string): Observable<any> {
    const fullpath: string  = 'https://localhost:5001/api/images/' + path;
    return this.http.get(fullpath)
    .pipe(
      map(this.extractData),
      catchError(this.handleError));
      // .pipe(
      //   map((res: Response) => res.json() ),
      //   catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}

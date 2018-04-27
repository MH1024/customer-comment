import {Injectable} from '@angular/core';
import {Comment} from '../comment/comment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CommentDataService {

  private commentsUrl = 'api/comments';

  constructor( private http: HttpClient ) {}

  /** POST: add a new comment to the server */
  addComment (comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.commentsUrl, comment, httpOptions);
  }

  // Simulate GET /comments from the server
  getAllComments (): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentsUrl);
  }

 /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // console.error(error); // log to console instead
      // this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}

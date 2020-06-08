import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IUser } from './model/user';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private HTTP_URL = "https://jsonplaceholder.typicode.com/posts"; /* Url to web api */
  constructor(private httpClient: HttpClient) { }

  // GET posts from the server
  public getPosts(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(this.HTTP_URL);
  }

  // get post by id
  public getPost(id: number): Observable<IUser> {
    return this.getPosts().pipe(map((posts: IUser[]) => posts.find(x=>x.id === id)));
  }
}

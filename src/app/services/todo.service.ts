import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../Models/Todo';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public url="https://jsonplaceholder.typicode.com/todos?_limit=5";

  constructor(private http:HttpClient) { }


getTodos():Observable<Todo[]>{
  return this.http.get<Todo[]>(this.url);   
}

}
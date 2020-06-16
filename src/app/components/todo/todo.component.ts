import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService:TodoService) { }
   employees:any=[];
  ngOnInit(): void {
     this.employees=[{id:1,"name":"venkat","gender":"male","dateofBirth":'5/25/1994'},
     {id:2,"name":"kavya","gender":"female","dateofBirth":'5/23/1997'},
     {id:3,"name":"shiva","gender":"male","dateofBirth":'8/2/1992'},
     {id:4,"name":"sreeja","gender":"female","dateofBirth":'5/25/1993'}]
  }

  getEmployees(){
    this.employees=[{id:1,"name":"venkat","gender":"male","dateofBirth":'5/25/1994'},
    {id:2,"name":"kavya","gender":"female","dateofBirth":'5/23/1997'},
    {id:3,"name":"shiva","gender":"male","dateofBirth":'8/2/1992'},
    {id:4,"name":"sreeja","gender":"female","dateofBirth":'5/25/1993'},
    {id:5,"name":"raju","gender":"male","dateofBirth":'7/25/1983'}]
  }

  trackbyemployeeId(index:number,employee:any):number{
  return employee.id;
  }

}

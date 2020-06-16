import { Component, OnInit ,Input} from '@angular/core';
import { Todo } from 'src/app/Models/Todo';
import { TodoService } from 'src/app/services/todo.service';
import { User } from './employee';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todos:Todo;
  constructor(private todoService:TodoService) { }
  list=[]
  ngOnInit(): void {
    this.getdata();
   
  }

  getdata(){
    this.todoService.getTodos().subscribe(data=>{
      this.list=data;
    })
  }

  delete(id){
  return this.list=this.list.filter(item=>item.id!=id)  
  }

  
  form=new User("venkat",null);

   submitForm(){
     console.log(this.form);
   }
   
}



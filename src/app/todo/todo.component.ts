import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor(private ds: DataserviceService) {}
  data: any;
  ngOnInit(): void {
    this.ds.getTODOAPI().subscribe(
      (res) => {
        this.data = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
        alert('Something went wrong!');
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  data: any;

  constructor(private ds: DataserviceService) {}

  ngOnInit(): void {
    this.ds.getUserData().subscribe(
      (res) => {
        this.data = res;
      },
      (err) => {
        console.log(err);
        alert('Something wen wrong!');
      }
    );
  }
}

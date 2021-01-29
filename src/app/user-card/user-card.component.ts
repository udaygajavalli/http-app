import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  constructor(private ds: DataserviceService) {}
  data: any;
  ngOnInit(): void {
    this.ds.getUserCardAPI().subscribe(
      (res) => {
        this.data = res['data'];
      },
      (err) => {
        console.log(err);
        alert('Something went wrong!');
      }
    );
  }
}

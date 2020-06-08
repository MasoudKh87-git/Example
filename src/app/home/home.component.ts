import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IUser } from '../model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: IUser[] = [];
  maxLenghtBody: number = 30;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPosts().subscribe((data: IUser[])=>{
      // console.log(data);
      this.users = data;
    });
  }

}

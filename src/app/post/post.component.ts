import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { IUser } from '../model/user';
import { Location } from '@angular/common';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post : IUser;
  constructor(private _route: ActivatedRoute, private apiService: ApiService, private location: Location) { }

  ngOnInit(): void {
      this.getUserPost();
  }

  getUserPost(): void {
    const id = +this._route.snapshot.paramMap.get("id");
    this.apiService.getPost(id).subscribe( res => this.post = res );
  }

  goBack(): void{
    this.location.back();
  }
}

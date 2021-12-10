import { Component, OnInit } from '@angular/core';
import { FetchService } from 'src/app/service/fetch.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  p:any;
  users:any="";
  constructor(private fetch:FetchService ,private router:Router){
    this.fetch.getUsers().subscribe((users)=>this.users=users)
      }

  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FetchService } from 'src/app/service/fetch.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId: any;
  user:any={};
  userAddress:any;
  perUserUrl='';
  constructor(private route:ActivatedRoute,private http:HttpClient) {
  }
  
  ngOnInit(): void {
  //   let id=this.route.snapshot.params['id']
 
this.route.queryParamMap.subscribe(qparam=>{
    this.userId=qparam.get('id')});
    
    let url=`https://jsonplaceholder.typicode.com/users/${this.userId}`
  this.perUserUrl=url
  this.http.get(this.perUserUrl).subscribe((user)=>{
    this.user=user;
  });
}
}

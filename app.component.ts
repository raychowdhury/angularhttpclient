import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'http-users';

  constructor(private userServices: UserService){}

  ngOnInit(): void {
    this.onGetUsers()
    this.onGetUser()
    
  }

  onGetUsers():void {
    this.userServices.getUsers().subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log('Done getting users.')
    );
  }

  onGetUser():void {
    this.userServices.getUser().subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log('Done getting user.')
    );
  }

}

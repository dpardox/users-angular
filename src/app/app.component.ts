import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public users: User[];

  constructor(private userService: UserService) {
    this.userService.list().subscribe((data: any) => {
      this.users = data.results;
    });
  }
}

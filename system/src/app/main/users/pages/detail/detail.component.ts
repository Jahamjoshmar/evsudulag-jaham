import { Component } from '@angular/core';
import { UserModel } from '../../model/UserModel';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  // user: UserModel | null;

  // constructor(private userService: UserService) {
  //   this.user = this.userService.getLoggedInUser();
  // }
}

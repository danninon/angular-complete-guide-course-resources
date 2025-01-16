import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { AppTaskComponent } from './app-task/app-task.component';
import { DUMMY_USERS } from './dummy-users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, AppTaskComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public users = DUMMY_USERS;
  
  private defaultUser = {
    id: '0',
    name: 'No user chosen',
    avatar: 'default-avatar.png',
  };

  private selectedUserId = this.users[0].id  || this.defaultUser.id
  
  // public selectedUser: { id: string; name: string; avatar: string } = this.users[0] || this.defaultUser

  get selecetdUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(userId: string) {
    console.log('User selected:', userId);
    this.selectedUserId = userId;
      
  }

}

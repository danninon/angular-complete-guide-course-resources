import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndexGenerator = () => Math.floor(Math.random() * DUMMY_USERS.length) ;

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
   public selectedUser = signal(DUMMY_USERS[randomIndexGenerator()]);
   public imagePath = computed(() => {
    console.log('computed called');
    return`assets/users/${this.selectedUser().avatar}`
  });

// public selectedUser: { id: string; name: string; avatar: string } = {
//   id: '',
//   name: '',
//   avatar: '',
// };

  constructor(){
    // this.selectedUser = DUMMY_USERS[randomIndexGenerator()];
    // this.selectedUser = signal(DUMMY_USERS[randomIndexGenerator()]);
  }
 

  // get imagePath(){
    // return `assets/users/${this.selectedUser().avatar}`;
    // return `assets/users/' + selectedUser.avatar"
  // }

  onSelectUser(){
    let newIndex = randomIndexGenerator()
    // let oldIndex = DUMMY_USERS.indexOf(this.selectedUser);
    // console.log(`oldIndex: ${oldIndex}`);
    // console.log(`newIndex: ${newIndex}`);
    // this.selectedUser = DUMMY_USERS[newIndex];
    this.selectedUser.set(DUMMY_USERS[newIndex]);
    // console.log('Clicked');
  }
}


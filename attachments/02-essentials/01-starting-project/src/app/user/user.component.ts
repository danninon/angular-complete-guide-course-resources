import { Component , EventEmitter, Input, Output, output } from '@angular/core';
import { User } from '../interfaces/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
}) 

export class UserComponent {
  @Input({required: true}) user!: User;

  @Output() public select = new EventEmitter<string>();

  get imagePath(){
    return `assets/users/${this.user.avatar}`;    
  }

  public onSelectUser(){
    this.select.emit(this.user.id);
  }
}


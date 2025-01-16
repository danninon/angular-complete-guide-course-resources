import { Component , EventEmitter, Input, Output, output } from '@angular/core';

type User = {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
}) 

export class UserComponent {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Input({required: true}) user!: User;

  @Output() public select = new EventEmitter<string>();

  get imagePath(){
    return `assets/users/${this.user.avatar}`;    
  }

  public onSelectUser(){
    this.select.emit(this.user.id);
  }
}


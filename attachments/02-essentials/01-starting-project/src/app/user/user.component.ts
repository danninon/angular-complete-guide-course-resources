import { Component , EventEmitter, Input, Output, output } from '@angular/core';

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
  @Input({required: true}) user!: {
    id: string;
    name: string;
    avatar: string 
  };

  @Output() public select = new EventEmitter<string>();

  get imagePath(){
    return `assets/users/${this.user.avatar}`;    
  }

  public onSelectUser(){
    this.select.emit(this.user.id);
  }
}


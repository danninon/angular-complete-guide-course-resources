import { Component , Input, input, computed } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  // public avatar = input<string>('');
  // public avatar = input.required<string>(); //these are readonly
  // public name = input.required<string>();

  // public imagePath = computed(() => `assets/users/${this.avatar()}`);
  get imagePath(){
    return `assets/users/${this.avatar}`;    
  }
  onSelectUser(){
  }
}


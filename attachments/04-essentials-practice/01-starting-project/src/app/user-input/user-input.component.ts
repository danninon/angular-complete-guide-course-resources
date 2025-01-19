import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment:string='0';
  enteredAnnualInvestment:string='0';
  enteredExpectedReturn:string='5';
  enteredDuration:string='10';

  onSubmit() {
    console.log('You submitted the form.');
    console.log('Initial Investment: ' + this.enteredInitialInvestment);
    console.log('Annual Investment: ' + this.enteredAnnualInvestment);
    console.log('Expected Return: ' + this.enteredExpectedReturn);
    console.log('Duration: ' + this.enteredDuration);
  }
  
}

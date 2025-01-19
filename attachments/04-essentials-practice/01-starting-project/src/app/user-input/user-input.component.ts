import { Component, EventEmitter, Output, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentData } from '../interfaces/investmentData.model';
import { InvestmentService } from '../investment.service';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment=signal('0');
  enteredAnnualInvestment=signal('0');
  enteredExpectedReturn=signal('5');
  enteredDuration=signal('10');

  constructor(private investmentService: InvestmentService) {}
  // calculate = output<InvestmentData>();
  // @Output() calculate = new EventEmitter<InvestmentData>();
  
  onSubmit() {
    console.log('You submitted the form.');
    console.log('Initial Investment: ' + this.enteredInitialInvestment);
    console.log('Annual Investment: ' + this.enteredAnnualInvestment);
    console.log('Expected Return: ' + this.enteredExpectedReturn);
    console.log('Duration: ' + this.enteredDuration);
+
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +(this.enteredInitialInvestment()),
      annualInvestment: +(this.enteredAnnualInvestment()),
      expectedReturn: +(this.enteredExpectedReturn()),
      duration: +(this.enteredDuration())
    })

    this.enteredAnnualInvestment.set('0');
    this.enteredInitialInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');

  } 
  
}

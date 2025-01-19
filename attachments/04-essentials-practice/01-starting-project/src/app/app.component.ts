import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports:[HeaderComponent, UserInputComponent],
})
export class AppComponent {

  onCalculateInvestmentResults(data: {
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number
  }) {
    const annualData = [];

    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;  
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    console.log("@@@@@@@@@@@")
    console.log(annualData);
    console.log("@@@@@@@@@@@")
    return annualData;
  }
}

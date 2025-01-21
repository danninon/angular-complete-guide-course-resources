import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../interfaces/ticket.module';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  // detailsVisible = signal(false);
  detailsVisible = false;
  // closed = output<string>()
  closed = output();

  onToggleDetails(){
    // this.detailsVisible.set(!this.detailsVisible);
    // this.detailsVisible.update((wasVisible)=> !wasVisible);
    this.detailsVisible = ! this.detailsVisible;
  }

  onTicketClosedClicked(){
    console.log('on onTicketCloseClicked');
    console.log('this.data().id:', this.data().id);
    // this.closed.emit(this.data().id);
    this.closed.emit();

  }
}

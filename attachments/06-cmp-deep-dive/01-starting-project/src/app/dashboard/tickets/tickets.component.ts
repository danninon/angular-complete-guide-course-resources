import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './interfaces/ticket.module';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets:Ticket[] = [];

  onTicketAdded(ticketData: {title:string,text:string}){
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: 'open'
    }
    this.tickets.push(ticket);
    console.log("new ticket:", ticket);
    console.log("tickets array status:", this.tickets);
    // this.tickets.push(ticket);
  }

  onTicketClose(id: string){
    // this.tickets = this.tickets.filter((ticket)=>ticket.id!==id);
    this.tickets = this.tickets.map((ticket)=>{
      if (ticket.id === id ){
        return {...ticket, status:'closed'};
      }
      return ticket;
    });
  }
}

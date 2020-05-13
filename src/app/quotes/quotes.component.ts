import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {



  quotes:Quote[] = [
    new Quote('“Do I not destroy my enemies when I make them my friends?”', 0, 0, 'Abraham Lincoln', 'John McGraw'),
    new Quote('"Nothing in life is promised except death."', 0, 0, 'Kanye West', 'David Boseman'),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete the following quote: ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

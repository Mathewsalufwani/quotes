import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[] = [
    {quote:'"Find an online version and watch merlin find his son"', upvote:0, downvote:0, description:'djdfdkf'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

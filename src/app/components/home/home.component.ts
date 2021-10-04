import { Component, OnInit, Output } from '@angular/core';
import { GooglePayComponent } from 'src/app/google-pay/google-pay.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showNumberCard = false;
  @Output() any?: GooglePayComponent;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCard(): void {
    this.showNumberCard = !this.showNumberCard;
  }

}

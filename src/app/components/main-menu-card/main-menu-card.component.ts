import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-menu-card',
  templateUrl: './main-menu-card.component.html',
  styleUrls: ['./main-menu-card.component.scss']
})
export class MainMenuCardComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  content: string;
  @Input()
  img: string;

  constructor() { }

  ngOnInit() {
  }

  testCard() {
    alert('teste');
  }
}

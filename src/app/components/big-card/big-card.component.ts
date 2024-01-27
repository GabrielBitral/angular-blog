import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input()
  titleNotice: string = '';

  @Input()
  photoNotice: string = '';

  @Input()
  gameName: string = '';

  @Input()
  readTime: string = '';

  @Input()
  photoAuthor: string = '';

  @Input()
  author: string = '';

  @Input()
  dateNotice: string = '';
}

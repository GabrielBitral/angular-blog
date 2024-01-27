import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
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

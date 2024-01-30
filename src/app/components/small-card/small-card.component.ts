import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.responsive.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  idNotice:string = '0';

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

  ngOnInit(): void {
    this.setValuesToComponent(this.idNotice);
  }

  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id == id)[0];

    if (result) {
      this.titleNotice = result.titleNotice;
      this.photoNotice = result.photoCover;
      this.gameName = result.gameName;
      this.readTime = result.readTime;
      this.photoAuthor = result.photoAuthor;
      this.author = result.author;
      this.dateNotice = result.dateNotice;
    }
  }
}

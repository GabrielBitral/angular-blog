import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.responsive.component.css']
})
export class ContentComponent implements OnInit {
  private id:string | null = '0';

  @Input()
  photoNotice: string = '';

  @Input()
  titleNotice: string = '';

  @Input()
  descriptionNotice: string = '';

  @Input()
  contentImages: string[] = [];

  @Input()
  redirectUrls: string[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get('id'));

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id == id)[0];

    if (result) {
      this.titleNotice = result.titleNotice;
      this.photoNotice = result.photoCover;
      this.descriptionNotice = result.description;
      this.contentImages = result.contentImages.map(image => image.coverImage);
      this.redirectUrls = result.contentImages.map(image => image.redirectUrl);
    }
  }
}

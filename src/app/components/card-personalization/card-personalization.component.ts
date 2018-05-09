
import { Component, OnInit } from '@angular/core';
import { CardPersonalizationService } from "./card-personalization.service";
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-card-personalization',
  templateUrl: './card-personalization.component.html',
  styleUrls: ['./card-personalization.component.scss']
})
export class CardPersonalizationComponent implements OnInit {

  constructor(protected pesonalization: CardPersonalizationService) { }
  
  cardPersonalization: any;
  cancelButton = "Cancel";
  personalizeButton = "Personalize";
  buttonClass = "btn-master"; 

  ngOnInit() {
    this.pesonalization.getPersonalizeData()
      .subscribe(
      (successResponse) => {
        this.cardPersonalization =  successResponse;
      },
      (errorResponse) => {
        window.alert('Error occurred while fetching events. Please contact administrator for more details.');
      }
      );

    }
}
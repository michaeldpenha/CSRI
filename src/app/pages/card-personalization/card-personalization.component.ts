
import { Component, OnInit } from '@angular/core';
import { CardPersonalizationService } from "./card-personalization.service";
import { Observable } from 'rxjs/observable';
import {LoaderService} from '../../shared/services/index';

@Component({
  selector: 'app-card-personalization',
  templateUrl: './card-personalization.component.html',
  styleUrls: ['./card-personalization.component.scss']
})
export class CardPersonalizationComponent implements OnInit {

  constructor(protected pesonalization: CardPersonalizationService , private loadingService : LoaderService) { }

  cardPersonalization: any;
  personalizeButton = "Personalize";
  buttonClass = "btn-master";
  isCheckBox: boolean = true;
  openPIElementsById: any;
  public poCardClass: string = "po-cards";
  passProgressStatus: string = "" ;

  private showHidePersonalItems = true;

  ngOnInit() {
    this.pesonalization.getPersonalizeData()
      .subscribe(
      (successResponse) => {
        this.cardPersonalization = successResponse;
        this.loadingService.hide();
      },
      (errorResponse) => {
        window.alert('Error occurred while fetching events. Please contact administrator for more details.');
      }
      );
  }

  togglePersonalizeItems(index: any) {
    this.openPIElementsById = index;
    this.showHidePersonalItems = !this.showHidePersonalItems;
    !this.showHidePersonalItems ? document.getElementById('showHide_' + index).innerHTML = "Hide all PI's" : document.getElementById('showHide_' + index).innerHTML = "Show all PI's"
  }
}

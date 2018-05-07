import { Component, OnInit, ViewChildren } from '@angular/core';
import { POdetailsService } from './podetails.service'
import { UtilsService } from '../../shared/services/utils/utils.service';
import { ArrayFilterPipe } from "../../shared/card-filter.pipe";
import { SearchfieldComponent } from '../../shared/components/searchfield/searchfield.component';
@Component({
  selector: 'app-podetails',
  templateUrl: './podetails.component.html',
  styleUrls: ['./podetails.component.scss']
})
export class PodetailsComponent implements OnInit {

 @ViewChildren('selectedcard') selectedCardCount;
 

  cardDetails: any;
  filteredCards = this.cardDetails;
  tempArray: any; 
  performFilter(value): any {
    value = value.toLocaleLowerCase();
    this.filteredCards = this.utils.filterArray(this.cardDetails, value, ['cardNumber']);
  }
  constructor(private podetailsService: POdetailsService, private utils: UtilsService, public cardpipe: ArrayFilterPipe) {
  }

  
  ngOnInit() {
    this.podetailsService.getCards()
      .subscribe(cards => {
        this.cardDetails = cards;
        this.filteredCards = this.cardDetails
      });
  }
  personalise(eve: any) {
    this.tempArray = this.utils.filterArray(this.cardDetails, 'true', ['cardSelected']);
    console.log(this.tempArray);
  }

}

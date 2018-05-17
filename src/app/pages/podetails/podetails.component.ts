import { Component, OnInit, ViewChildren } from '@angular/core';
import { POdetailsService } from './podetails.service';
import { UtilsService } from '../../shared/services/utils/utils.service';
import { ArrayFilterPipe } from "../../shared/card-filter.pipe";
import { ActivatedRoute } from '@angular/router';
import { SearchfieldComponent } from '../../shared/components/searchfield/searchfield.component';
@Component({
  selector: 'app-podetails',
  templateUrl: './podetails.component.html',
  styleUrls: ['./podetails.component.scss']
})
export class PodetailsComponent implements OnInit {
  public podetails: any;
  public personalizeButton: string = "Personalize All"
  public redirectButton: string = "Redirect"
  public cardDetails: any;
  public poCardClass: string = "card po-cards";
  public masterButtonClass: string = "btn-master";
  public secondaryButtonClass: string = "btn-secondary";
  filteredCards = this.cardDetails;
  public isCheckBox:boolean= false;
  public placeholder: string = "Search using PAN #";
  performFilter(value): any {
    value = value.toLocaleLowerCase();
    this.filteredCards = this.utils.filterArray(this.cardDetails, value, ['pan'], 'or');
  }
  constructor(private podetailsService: POdetailsService, private utils: UtilsService, public cardpipe: ArrayFilterPipe, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.triggerPoDetails(params)
    });
  }
  /**
   * triggerPoDetails
   */
  public triggerPoDetails = (params) => {
    //params.id
    this.podetailsService.getCards()
      .subscribe(cards => {
        this.cardDetails = cards.productionItems;
        this.podetails = cards;
        this.filteredCards = this.cardDetails
      });
  }
  personalise(eve: any) {

  }

  /**
   * recordSelected
   */
  public recordSelected = (item: any) => {
    let index = this.utils.fetchObjectFromAnArray(this.cardDetails, item, 'pan');
    this.cardDetails[index].selected = this.cardDetails[index].selected ? !this.cardDetails[index].selected : true;
  }

}

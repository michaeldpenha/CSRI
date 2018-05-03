import { Component, OnInit } from '@angular/core';
import {POdetailsService} from './podetails.service'

@Component({
  selector: 'app-podetails',
  templateUrl: './podetails.component.html',
  styleUrls: ['./podetails.component.scss']
})
export class PodetailsComponent implements OnInit {

	_listFilter: string;
	
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredCards = this.listFilter ? this.performFilter(this.listFilter) : this.cardDetails;
	}
	
	 cardDetails:any ;
	filteredCards= this.cardDetails;
	performFilter(filterBy: string): any[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.cardDetails.filter((card: any) =>
              (card.cardNumber.toLocaleLowerCase().indexOf(filterBy) !== -1) 
            );
	}
	
 
 constructor(private podetailsService: POdetailsService) {

    }

  ngOnInit() {
	  this.podetailsService.getCards()
                .subscribe(cards => {
                    this.cardDetails = cards;
                   this.filteredCards = this.cardDetails
                });
  }

}

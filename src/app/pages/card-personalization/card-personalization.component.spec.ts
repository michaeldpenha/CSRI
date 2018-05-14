import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { CardPersonalizationComponent } from './card-personalization.component';
import { FormControl, FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CardsComponent } from "../../shared/components/cards/cards.component";
import { CardPersonalizationService } from "./card-personalization.service"; 
import { HttpClientModule } from '@angular/common/http';
describe('CardPersonalizationComponent', () => {
  let component: CardPersonalizationComponent;
  let fixture: ComponentFixture<CardPersonalizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientModule,FormsModule],
      declarations: [ CardPersonalizationComponent,ButtonComponent,CardsComponent ],
      providers : [CardPersonalizationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPersonalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SortablejsModule } from 'angular-sortablejs';
import { OrderRoutingModule } from './order.routing';

import { ViewComponent } from './components/view/view.component';
import { ListingComponent } from './components/listing/listing.component';
import { LastOrderCardComponent } from './components/last-order-card/last-order-card.component';

import { OrderService } from './services/order.service';

import { NoImagePipe, NoPhotoPipe } from '../shared/pipes';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SortablejsModule,
    //our custom module
    OrderRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    ViewComponent,
    ListingComponent,
    LastOrderCardComponent,
    NoImagePipe,
    NoPhotoPipe
  ],
  providers: [
    OrderService
  ],
  exports: [
    LastOrderCardComponent
  ]
})
export class OrderModule { }

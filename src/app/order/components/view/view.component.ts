import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import * as _ from 'lodash';

@Component({
  selector: 'view',
  templateUrl: './view.html'
})
export class ViewComponent implements OnInit {

  public isSubmitted: boolean = false;
  public order: any = {};
  public avatarUrl: any;

  constructor(private router: Router, private route: ActivatedRoute,
    private orderService: OrderService, private toasty: ToastyService) {
    const id = this.route.snapshot.params.id;
    this.orderService.findOne(id).then((res) => {
      this.order = res.data;
      this.avatarUrl = res.data.productDetails.mainImage ? res.data.productDetails.mainImage.mediumUrl : '/assets/images/background/user-info.jpg';
    })
  }

  ngOnInit() {
  }

  submit(frm: any) {
    this.isSubmitted = true;
    if (!frm.valid) {
      return this.toasty.error('Something went wrong, please check and try again!');
    }
    const data = _.pick(this.order, ['shippingMethod', 'shippingCode']);

    this.orderService.updateShipping(this.order._id, data).then(resp => {
      this.toasty.success('Updated shipping type successfuly!');
    }).catch((err) =>
    this.toasty.error('Something went wrong, please try again!'));
  }

  query() {
    const data = _.pick(this.order, ['status']);
    this.orderService.updateStatus(this.order._id, data).then(resp => {
      this.toasty.success('Updated status successfuly!');
    }).catch((err) => this.toasty.error('Something went wrong, please try again!'));
  }
}

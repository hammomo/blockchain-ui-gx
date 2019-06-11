import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OperatorService } from '../../../services/operator.serivce';
import { Operator } from '../../../models/operator';

@Component({
  selector: 'page-create-operator',
  templateUrl: 'createOperator.html'
})
export class CreateOperatorPage {
    operator: Operator = new Operator();

  constructor(public navCtrl: NavController, public navParams: NavParams, public OperatorSvc: OperatorService) {
    
  }

  save() {
    this.OperatorSvc.create(this.operator).toPromise().then(res => {
        console.log(res);
        this.navCtrl.pop();
    }).catch(err => {
        console.log(err);
    });
  }
}

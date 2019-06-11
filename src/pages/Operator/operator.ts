import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OperatorService } from '../../services/operator.serivce';
import { Operator } from '../../models/operator';
import { CreateOperatorPage } from './CreateOperator/createrOperator';

@Component({
  selector: 'page-operator',
  templateUrl: 'operator.html'
})
export class OperatorPage {
  operators: Operator[] = [new Operator()];

  constructor(public navCtrl: NavController, public navParams: NavParams, public OperatorSvc: OperatorService) {
    
  }

  ionViewWillEnter(){
    this.OperatorSvc.getAll().toPromise().then(res => {
        this.operators = res;
    }).catch(err => {
        console.log(err);
    });
  }

  click() {
      
  }

  addOperator() {
    this.navCtrl.push(CreateOperatorPage);
  }
}

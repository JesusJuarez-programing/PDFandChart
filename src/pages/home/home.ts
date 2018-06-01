import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
 // Pie
 public pieChartLabels:string[] = ['Hola', 'Marco', 'Polo'];
 public pieChartData:number[] = [300, 500, 100];
 public pieChartType:string = 'pie';


}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nombres: string [] = ['Polo', 'Julio', 'Verne'];
  valores: number [] = [500, 600, 700];

  paises: string [] = ['México', 'USA', 'España', 'Cataluña'];
  valor: number [] = [300, 400, 50, 2];

  empresas: string [] = ['SpaceX', 'Tesla'];
  val: number [] = [10, 10];

  constructor(public navCtrl: NavController) {

  }


// Estatico
public doughnutChartLabels:string[] = this.nombres;
public doughnutChartData:number[] = this.valores;
public doughnutChartType:string = 'pie';


// Dinamico


}

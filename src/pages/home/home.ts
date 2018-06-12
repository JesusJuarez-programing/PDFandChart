import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  preguntas: string[] = ['', 'Pregunta 1', 'Pregunta 2', 'Pregunta 3'];
  nombres: string [] = ['Polo', 'Julio', 'Verne'];
  valores: number [] = [500, 600, 700];

  paises: string [] = ['México', 'USA', 'España', 'Cataluña'];
  valor: number [] = [300, 400, 50, 20];

  empresas: string [] = ['SpaceX', 'Tesla'];
  val: number [] = [10, 15];

  doughnutChartLabels: string [];
  doughnutChartData: number [];
  public doughnutChartType: string = 'pie';
  conta : number = 0;
  pregunta: string;

  constructor(public navCtrl: NavController) {
    this.contar();
  }

  contar(){
    this.conta ++;
    this.doughnutChartLabels = [];
      this.doughnutChartData =[];
    if (this.conta == 1){
      this.pregunta = this.preguntas[this.conta];
      console.log(this.pregunta);
      this.doughnutChartLabels = [];
      this.doughnutChartLabels = this.paises;
      
      this.doughnutChartData = this.valor;
    }
    if(this.conta == 2){
      this.pregunta = this.preguntas[this.conta];
      this.doughnutChartLabels = [];
      this.doughnutChartLabels = this.nombres;
      this.doughnutChartData = this.valores;
    }
    if(this.conta == 3){
      this.pregunta = this.preguntas[this.conta];
      this.doughnutChartLabels = [];
      this.doughnutChartLabels = this.empresas;
      this.doughnutChartData = this.val;
    }
  }

  contarRegresar(){
    this.conta --;
    this.doughnutChartLabels = [];
      this.doughnutChartData =[];
    if (this.conta == 1){
      this.pregunta = this.preguntas[this.conta];
      this.doughnutChartLabels = [];
      this.doughnutChartLabels = this.paises;
      
      this.doughnutChartData = this.valor;
    }
    if(this.conta == 2){
      this.pregunta = this.preguntas[this.conta];
      this.doughnutChartLabels = [];
      this.doughnutChartLabels = this.nombres;
      this.doughnutChartData = this.valores;
    }
    if(this.conta == 3){
      this.pregunta = this.preguntas[this.conta];
      this.doughnutChartLabels = [];
      this.doughnutChartLabels = this.empresas;
      this.doughnutChartData = this.val;
    }
  }
}

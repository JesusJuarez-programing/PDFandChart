import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  encuestaId: any;
  asks: any [] = [];
  answer: any;
  askSliderCount: any;
  title: any;
  for: any;
  by: any;
  graphic: any [] = [];
  annexA: any [] = [];
  annexB: any [] = [];
  annexC: any [] = [];
  annexD: any [] = [];
  answerannexA: any;
  answerannexB: any;
  answerannexC: any;
  answerannexD: any;
  operacion: any [] = [];
  variable: any;
  dimension: any;
  indicator: any;
  item: any;
  variables: any [] = [];
  dimensiones: any [] = [];
  indicadores: any [] = [];
  items: any [] = [];
  problem: any;
  object: any;
  research: any;
  information: any;
  instrumentation: any;
  population: any;
  analysisG: any;
  analysisC: any;
  conclusion: any;
  graphicc: any;
  showVariable: any [] = [];
  resultado: any;
  tamano: number;
  tableVariable: any;
  inicio: any;
  final: any;
  nombre: any;
  horario: any;
  inicios: any [] = [];
  finales: any [] = [];
  nombres: any [] = [];
  horarios: any [] = [];
  showVariableD: any [] = [];

  letterObj = {
    from: 'Simon',
    to: 'Paul',
    text: 'Creating a PDF fileCreating a PDF fileCreating a PDF fileCreating a PDF fileCreating a PDF fileCreating a PDF file' +
          'Creating a PDF fileCreating a PDF fileCreating a PDF fileCreating a PDF fileCreating a PDF fileCreating a PDF fileCreating a PDF file'
  }

  pdfObj = null;

  constructor(public navCtrl: NavController) {

  }
  
  createPdf(){
    var docDefinition = {
      content: [
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////New Page//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {text: '\n\n\n\n\n\n\n\n\n\n\n\n\nInvestigación de mercado ' + this.title, style: 'header'},

        {text: '\n\n\nPreparado para: '+ this.for, style: 'subheader'},

        {text: 'Preparado por: ' + this.by, style: 'subheader'},

        {text: '\nVictoria de Durango, ' + new Date().toDateString(), style: 'subheader'},
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////New Page//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nCONTEXTO', style: 'subtitulo'},

        {text: 'Problema', style: 'subsubtitulo'},

        {text: '' + this.problem, style: 'text'},

        {text: '\n\nObjetivo', style: 'subsubtitulo'},

        {text: '' + this.object, style: 'text'},

        {text: '\n\n\nMETODOLOGÍA', style: 'subtitulo'},

        {text: 'Diseño de Investigación', style: 'subsubtitulo'},

        {text: '' + this.research, style: 'text'},

        {text: '\n\nFuentes de Información', style: 'subsubtitulo'},

        {text: '' + this.information, style: 'text'},

        {text: '\n\nDiseño de Instrumentación', style: 'subsubtitulo'},

        {text: '' + this.instrumentation, style: 'text'},
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////New Page//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nOperacionalización de variables', style: 'subtitulo'},

        {
          style: 'tableExample',
          table: {
            widths: [100, '*', 200, '*'],
            body: [
              ///////////////////////////////Headers///////////////////////////////////////////////
              [{text: 'Variable', style: 'headers'}, 
              {text: 'Dimensión', style: 'headers'}, 
              {text: 'Indicadores', style: 'headers'}, 
              {text: 'No. de Ítems', style: 'headers'}],
              ///////////////////////////////////Rows///////////////////
              [this.variables, 
              this.dimensiones,
              this.indicadores,
              this.items]
            ]
          }
        },

        {text: '' + this.tableVariable, style: 'text'},

        {text: '\n\nPoblación y muestra', style: 'subsubtitulo'},

        {text: '' + this.population, style: 'text'},
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////New Page//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nDIAGNÓSTICO', style: 'subtitulo'},

        {text: 'Tabulación y gráficas de datos', style: 'subsubtitulo'},

        {text: '' + this.graphicc, style: 'text'},
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////New Page//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////New Page//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nANÁLISIS GENERAL', style: 'subtitulo'},

        {text: '' + this.analysisG, style: 'text'},
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////New Page//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nANÁLISIS CRUZADO', style: 'subtitulo'},

        {text: '' + this.analysisC, style: 'text'},
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////New Page//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nCONCLUSIONES Y RECOMENDACIONES', style: 'subtitulo'},

        {text: '\n\nConclusiones y recomendaciones', style: 'subsubtitulo'},

        {text: '' + this.conclusion, style: 'text'},
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////New Page//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nAnexo A', style: 'subtitulo'},

        {text: '\n\nInstrumento de recolección de datos', style: 'subsubtitulo'},

        {text: '' + this.annexA, style: 'text'},
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////New Page//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nAnexo B', style: 'subtitulo'},

        {text: '\n\nAGEBS de aplicación', style: 'subsubtitulo'},

        {text: '' + this.annexB, style: 'text'},
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////New Page//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nAnexo C', style: 'subtitulo'},

        {text: '\n\nAplicaciones de encuestas', style: 'subsubtitulo'},

        {text: '' + this.annexC, style: 'text'},
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////New Page//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nAnexo D', style: 'subtitulo'},

        {text: '\n\nFotos de los encuestadores', style: 'subsubtitulo'},

        {text: '' + this.annexD, style: 'text'},  
        {
          style: 'tableExample',
          table: {
            widths: [100, '*', 200, '*'],
            body: [
              ///////////////////////////////Headers///////////////////////////////////////////////
              [{text: '', style: 'headers'}, 
              {text: 'Inicio', style: 'headers'}, 
              {text: 'Final', style: 'headers'}, 
              {text: 'Horario de aplicación. (Lunes a viernes).', style: 'headers'}],
              ///////////////////////////////////Rows///////////////////
              [this.nombres, 
              this.inicios,
              this.finales,
              this.horarios]
            ]
          }
        },




      ],
      styles: {
        header: {
          fontSize: 19,
           bold: true,
           alignment: 'justify',
           calibri: true
        },
        headers: {
          calibri: true, 
          color: 'black',
          alignment: 'center', 
          bold: true
        },
        tableExample: {
          margin: [0, 5, 0, 15]
        },
        subtitulo: {
          fontSize: 13,
           bold: true,
           alignment: 'center',
           calibri: true
        },
        subsubtitulo: {
          fontSize: 13,
           bold: true,
           alignment: 'justify',
           calibri: true
        },
        text: {
           fontSize: 12,
           alignment: 'justify',
           calibri: true
        }
      }
    }

    this.pdfObj = pdfMake.createPdf(docDefinition);
    this.pdfObj.download();
  }

  




  doReport(){
    //this.createPdf();
    if(this.title != null && this.for != null && this.by != null && this.title != null && this.problem != null &&
      this.object != null && this.research != null && this.information != null && this.instrumentation != null &&
      this.population != null && this.analysisC != null && this.analysisG != null && this.conclusion != null
      && this.graphicc != null){
        this.createPdf();
      }
    else{
      console.log("Rellena los campos solicitados.")
    }

  }

  addAskOption(){
    if(this.variable != null && this.dimension != null && this.indicator != null && this.item != null){
    this.showVariable.push(this.variable);
    this.variables.push(this.variable);
    this.dimensiones.push(this.dimension);
    this.indicadores.push(this.indicator);
    this.items.push(this.item);
    }
  }

  addAnnexD(){
    if(this.nombre != null && this.inicio != null && this.final != null && this.horario != null){
    this.showVariableD.push(this.nombre);
    this.nombres.push(this.nombre);
    this.inicios.push(this.inicio);
    this.finales.push(this.final);
    this.horarios.push(this.horario);
    }
  }

  addGraphic(){
    this.graphic.push(this.answer);
  }

  deleteGraphic(){
    if(this.graphic.length >= 1){
      this.graphic.pop();
    } 
  }

  addA(){
    this.annexA.push(this.answerannexA);
  }

  addB(){
    this.annexB.push(this.answerannexB);
  }

  addC(){
    this.annexC.push(this.answerannexC);
  }

  addD(){
    this.annexD.push(this.answerannexD);
  }
}

import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { FileOpener } from '@ionic-native/file-opener';
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

  letterObj = {
    from: 'Simon',
    to: 'Paul',
    text: 'Creating a PDF fileCreating a PDF fileCreating a PDF fileCreating a PDF fileCreating a PDF fileCreating a PDF file' +
          'Creating a PDF fileCreating a PDF fileCreating a PDF fileCreating a PDF fileCreating a PDF fileCreating a PDF fileCreating a PDF file'
  }

  pdfObj = null;

  constructor(public navCtrl: NavController, private plt: Platform) {

  }
  
  createPdf(){
    var docDefinition = {
      content: [
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////New Page//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {text: '\n\n\n\n\n\n\n\n\n\n\n\n\nInvestigación de mercado ' + this.letterObj.from, style: 'header'},

        {text: '\n\n\nPreparado para: '+ this.letterObj.from, style: 'subheader'},

        {text: 'Preparado por: ' + this.letterObj.to, style: 'subheader'},

        {text: '\nVictoria de Durango, ' + new Date().toDateString(), style: 'subheader'},
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////New Page//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nCONTEXTO', style: 'subtitulo'},

        {text: 'Problema', style: 'subsubtitulo'},

        {text: '' + this.letterObj.text, style: 'text'},

        {text: '\n\nObjetivo', style: 'subsubtitulo'},

        {text: '' + this.letterObj.text, style: 'text'},

        {text: '\n\n\nMETODOLOGÍA', style: 'subtitulo'},

        {text: 'Diseño de Investigación', style: 'subsubtitulo'},

        {text: '' + this.letterObj.text, style: 'text'},

        {text: '\n\nFuentes de Información', style: 'subsubtitulo'},

        {text: '' + this.letterObj.text, style: 'text'},

        {text: '\n\nDiseño de Instrumentación', style: 'subsubtitulo'},

        {text: '' + this.letterObj.text, style: 'text'},
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
              ['Ejemplo', 
              'Hola',
              'Marco',
              'Polo'],
              ['Ejemplo', 
              'Hola',
              'Marco',
              'Polo'],
              ['Ejemplo', 
              'Hola',
              'Marco',
              'Polo']
            ]
          }
        },

        {text: '' + this.letterObj.text, style: 'text'},

        {text: '\n\nPoblación y muestra', style: 'subsubtitulo'},

        {text: '' + this.letterObj.text, style: 'text'},
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////New Page//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nDIAGNÓSTICO', style: 'subtitulo'},

        {text: 'Tabulación y gráficas de datos', style: 'subsubtitulo'},

        {text: '' + this.letterObj.text, style: 'text'},
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////New Page//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////New Page//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nANÁLISIS GENERAL', style: 'subtitulo'},

        {text: '' + this.letterObj.text, style: 'text'},
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////New Page//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nANÁLISIS CRUZADO', style: 'subtitulo'},

        {text: '' + this.letterObj.text, style: 'text'},
        
        {text: '\n\nInteraciones entre consumo, gusto y frecuencia', style: 'subsubtitulo'},

        {text: '' + this.letterObj.text, style: 'text'},
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////New Page//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nCONCLUSIONES Y RECOMENDACIONES', style: 'subtitulo'},

        {text: '\n\nConclusiones y recomendaciones', style: 'subsubtitulo'},

        {text: '' + this.letterObj.text, style: 'text'},
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////New Page//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nAnexo A', style: 'subtitulo'},

        {text: '\n\nInstrumento de recolección de datos', style: 'subsubtitulo'},

        {text: '' + this.letterObj.text, style: 'text'},
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////New Page//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nAnexo B', style: 'subtitulo'},

        {text: '\n\nAGEBS de aplicación', style: 'subsubtitulo'},

        {text: '' + this.letterObj.text, style: 'text'},
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////New Page//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nAnexo C', style: 'subtitulo'},

        {text: '\n\nAplicaciones de encuestas', style: 'subsubtitulo'},

        {text: '' + this.letterObj.text, style: 'text'},
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////New Page//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {text: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nAnexo D', style: 'subtitulo'},

        {text: '\n\nFotos de los encuestadores', style: 'subsubtitulo'},

        {text: '' + this.letterObj.text, style: 'text'},  




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
    if(this.title != null && this.for != null && this.by != null && this.title != null && this.problem != null &&
      this.object != null && this.research != null && this.information != null && this.instrumentation != null &&
      this.population != null && this.analysisC != null && this.analysisG != null && this.conclusion != null
      && this.graphicc != null){
        console.log("Hola");
      }
    else{
      console.log("Rellena los campos solicitados.")
    }

  }

  addAskOption(){
    if(this.variable != null && this.dimension != null && this.indicator != null && this.item != null){
    this.showVariable.push(this.variable);
    this.operacion.push(this.variable);
    this.operacion.push(this.dimension);
    this.operacion.push(this.indicator);
    this.operacion.push(this.item);
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
